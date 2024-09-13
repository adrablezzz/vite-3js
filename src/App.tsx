import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Train from './components/3dModels/train.tsx'

function App() {
  const [doorRed, setDoorRed] = useState(false)
  const [doorOpen, setDoorOpen] = useState(false)

  return (
    <div id="canvas-container">
      <div className="tool">
        <button onClick={() => setDoorRed(!doorRed)}>车门故障</button>
        <button onClick={() => setDoorOpen(!doorOpen)}>车门开关</button>
      </div>
      <Canvas camera={{position: [20, 5, 0] }}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Train rotation={[0, 0, 0]} doorRed={doorRed} doorOpen={doorOpen}></Train>
        <OrbitControls target={[0, 0, 0]}></OrbitControls>
      </Canvas>
    </div>
  );
}

export default App;
