import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV as Fpv } from './components/FPV'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelector } from './components/TextureSelect'

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 80, 10]} />
        <ambientLight intensity={0.6} />
        <Fpv />

        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="pointer">+</div>
      <TextureSelector />
    </>
  )
}

export default App