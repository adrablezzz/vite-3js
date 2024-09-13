import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'

function Model(props) {
  const { nodes, materials } = useGLTF('/train_cart.glb')
  const group = useRef()
  let [doorPosition, setDoorPosition] = useState([0, 0, 0])
  useEffect(() => {
    console.log(group)
    let pos = { x: 0, y: 0 }
    const tl = gsap.timeline({duration: 1, ease: "power2.inOut", paused: true, onUpdate: () => {
      const { x, y } = pos
      setDoorPosition([x, y, 0])
    }})
    tl.to(pos, { x: 0.2, duration: 0.5 })
      .to(pos,{ y: 2, duration: 1 }, "+=1")
    
    if(props.doorOpen) {
      tl.play()
    }else {
      tl.reverse(tl.reversed())
    }
  }, [props.doorOpen])
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.lambert13SG}
        />
        {/* doors */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.lambert13SG}
          position={doorPosition}
        >
          {props.doorRed && <meshStandardMaterial color={"red"} />}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.lambert13SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.lambert13SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.lambert13SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.lambert13SG}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/train_cart.glb')

export default Model