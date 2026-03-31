# 💎 MeshMates

A simplistic, shared 3D social space inspired by early-2000s isometric life sims. Built with **React-Three-Fiber**, **Node.js**, and **WebSockets**.

MeshMates allows multiple users to inhabit the same low-poly world, represented by animated avatars. It’s a nostalgic playground built on a modern 2026 tech stack.

---

## 🚀 Tech Stack

- **Frontend:** React, Three.js (via `@react-three/fiber`), Vite
- **Backend:** Node.js, Express, `ws` (WebSockets)
- **Monorepo:** pnpm Workspaces
- **Language:** TypeScript (Shared types across client/server)

---

## 🛠️ Getting Started

The easiest way to run MeshMates is using the included **DevContainer** configuration.

### 1. Prerequisite
- [Docker](https://www.docker.com/)
- [VS Code](https://code.visualstudio.com/) with the **Dev Containers** extension.

### 2. Setup
1. **Clone the repo:**
   ```bash
   git clone [https://github.com/bbgott/mesh-mates.git](https://github.com/bbgott/mesh-mates.git)
   cd mesh-mates
    ```

2.  **Open in DevContainer:**

      - Open the folder in VS Code.
      - When prompted, click **"Reopen in Container"** (or run `Dev Containers: Reopen in Container` from the Command Palette).

3.  **Install Dependencies:**

    ```bash
    pnpm install
    ```

### 3\. Running the Project

From the root directory, you can start both the client and server simultaneously:

```bash
pnpm dev
```

  - **Client:** [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173)
  - **Server Health:** [http://localhost:3000/health](https://www.google.com/search?q=http://localhost:3000/health)

-----

## 📁 Project Structure

  - `packages/client`: The Vite + React + Three.js frontend.
  - `packages/server`: The Node.js WebSocket server.
  - `shared/`: Shared TypeScript interfaces and game constants.

-----

## 🎮 Features (In Progress)

  - [x] Monorepo Architecture
  - [x] WebSocket Handshake
  - [ ] Synchronized Avatar Movement
  - [ ] Plumbob Rendering
  - [ ] "Sul Sul\!" Chat Bubbles

-----

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.