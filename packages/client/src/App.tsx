import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'

function App() {

  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <color attach="background" args={['#ececec']} />
      <Experience />
    </Canvas>
  )
}

export default App
