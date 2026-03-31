import express from 'express';
import { createServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import type { PlayerState } from '@mesh-mates/shared';

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

const PORT = 3000;
const HOST = '0.0.0.0'; // Crucial for your devcontainer

// 1. In-memory State (The "Source of Truth")
// Map of Socket -> Player ID (to clean up on disconnect)
const clients = new Map<WebSocket, string>();
// Map of Player ID -> State
const players: Record<string, PlayerState> = {};

// 2. Broadcast function to send data to everyone
const broadcast = (data: object) => {
  const message = JSON.stringify(data);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};

// 3. WebSocket Logic
wss.on('connection', (ws) => {
  const id = Math.random().toString(36).substring(2, 9);
  console.log(`User connected: ${id}`);

  // Initial state for new player
  players[id] = {
    id,
    x: 0,
    y: 0,
    z: 0,
    animation: 'idle'
  };
  clients.set(ws, id);

  // Send the fresh list to everyone
  broadcast({ type: 'UPDATE', players: Object.values(players) });

  ws.on('message', (data) => {
    try {
      const payload = JSON.parse(data.toString());
      
      // Update local state when client moves
      if (payload.type === 'MOVE') {
        players[id] = { ...players[id], ...payload.data };
        // TODO: Throttle this to avoid spamming updates when we have many players
        broadcast({ type: 'UPDATE', players: Object.values(players) });
      }
    } catch (e) {
      console.error("Failed to parse message", e);
    }
  });

  ws.on('close', () => {
    console.log(`User disconnected: ${id}`);
    delete players[id];
    clients.delete(ws);
    broadcast({ type: 'LEAVE', id, players: Object.values(players) });
  });
});

// 4. Health Check (helps verify the port is open in your devcontainer)
app.get('/health', (_, res) => {
  res.send({ status: 'ok', players: Object.keys(players).length });
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 MeshMates Server ready at http://${HOST}:${PORT}`);
  console.log(`📡 WebSocket listening on ws://${HOST}:${PORT}`);
});