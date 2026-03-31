import { OrbitControls } from '@react-three/drei'

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={"orange"}/>
      </mesh>
    </>
  )
}

export default Experience