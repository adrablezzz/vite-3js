import { useRef, useState, useEffect, forwardRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

const Model = forwardRef((props:any, myRef) => {
  const group = myRef || useRef()
  const { nodes, materials, animations } = useGLTF('/classic-watch.glb')
  const { actions } = useAnimations(animations, group)

  useFrame((state, delta) => {
    if(props.rotated) {
      group.current.rotation.y += delta*0.1
    }
  })

  useEffect(() => {
    props.mounted && props.mounted()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Scene-centered" position={[-0.063, -1.618, 1.151]}>
          <group name="Scene_1" scale={16.462}>
            <group
              name="Camera"
              position={[-0.367, 0.165, 0.306]}
              rotation={[1.49, -0.104, 0.911]}
              scale={0.1}>
              <PerspectiveCamera
                name="Camera_Orientation"
                makeDefault={false}
                far={1000}
                near={0.1}
                fov={20.408}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group name="Camera002" position={[0, 0.05, 0.092]} rotation={[2.228, -0.001, -0.001]}>
              <PerspectiveCamera
                name="Camera002_Orientation"
                makeDefault={false}
                far={1000}
                near={0.01}
                fov={20.408}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group name="Camera003" position={[0, 0.405, -0.069]} rotation={[2.984, 0, Math.PI]}>
              <PerspectiveCamera
                name="Camera003_Orientation"
                makeDefault={false}
                far={1000}
                near={0.1}
                fov={39.598}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group
              name="Camera004"
              position={[-0.372, 0.103, 0.003]}
              rotation={[1.57, -0.014, 1.509]}>
              <PerspectiveCamera
                name="Camera004_Orientation"
                makeDefault={false}
                far={1000}
                near={0.1}
                fov={20.408}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group name="Camera005" position={[0, 0.098, 0.098]} rotation={[Math.PI / 2, 0, 0]}>
              <PerspectiveCamera
                name="Camera005_Orientation"
                makeDefault={false}
                far={1000}
                near={0.01}
                fov={39.598}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group name="camera_target" position={[0, 0.103, 0.023]} />
            <group name="light1" position={[-0.249, 0.217, 0.263]} />
            <group name="light2" position={[0.033, 0.12, 0.255]} />
            <group name="NurbsPath" position={[0.036, 0.103, 0.003]} />
            <group name="Empty" position={[0.036, 0.103, 0.003]} scale={0.074} />
            <group name="Empty001" position={[0.036, 0.103, 0.003]} scale={0.049} />
            <group
              name="BezierCircle"
              position={[0, 0.103, 0.092]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.082, 0.053, 0.053]}
            />
            <mesh
              name="Plane"
              castShadow
              receiveShadow
              geometry={nodes.Plane.geometry}
              material={materials.Material}
              position={[0, 0.098, -0.003]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.044}
            />
            <mesh
              name="date"
              castShadow
              receiveShadow
              geometry={nodes.date.geometry}
              material={materials.date}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="buttons"
              castShadow
              receiveShadow
              geometry={nodes.buttons.geometry}
              material={materials.metal}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="glass"
              castShadow
              receiveShadow
              geometry={nodes.glass.geometry}
              material={materials.glass}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="hand_hour_middle"
              castShadow
              receiveShadow
              geometry={nodes.hand_hour_middle.geometry}
              material={materials.hands_middle}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="hand_second"
              castShadow
              receiveShadow
              geometry={nodes.hand_second.geometry}
              material={materials.metal_hands}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="cover"
              castShadow
              receiveShadow
              geometry={nodes.cover.geometry}
              material={materials.metal_cover}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="hand_hour"
              castShadow
              receiveShadow
              geometry={nodes.hand_hour.geometry}
              material={materials.metal_hands}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="hand_minute_middle"
              castShadow
              receiveShadow
              geometry={nodes.hand_minute_middle.geometry}
              material={materials.hands_middle}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="hand_small1"
              castShadow
              receiveShadow
              geometry={nodes.hand_small1.geometry}
              material={materials.metal_hands}
              position={[0, 0.083, -0.003]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="hand_minute"
              castShadow
              receiveShadow
              geometry={nodes.hand_minute.geometry}
              material={materials.metal_hands}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="hand_small3"
              castShadow
              receiveShadow
              geometry={nodes.hand_small3.geometry}
              material={materials.metal_hands}
              position={[0.013, 0.106, -0.003]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="hands_shaft"
              castShadow
              receiveShadow
              geometry={nodes.hands_shaft.geometry}
              material={materials.metal_hands}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="buckle_tongue"
              castShadow
              receiveShadow
              geometry={nodes.buckle_tongue.geometry}
              material={materials.metal}
              position={[0, 0.095, -0.011]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="hand_small2"
              castShadow
              receiveShadow
              geometry={nodes.hand_small2.geometry}
              material={materials.metal_hands}
              position={[-0.013, 0.106, -0.003]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="buckle"
              castShadow
              receiveShadow
              geometry={nodes.buckle.geometry}
              material={materials.metal}
              position={[0, 0.095, -0.011]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="crown"
              castShadow
              receiveShadow
              geometry={nodes.crown.geometry}
              material={materials.metal}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="strap_bent"
              castShadow
              receiveShadow
              geometry={nodes.strap_bent.geometry}
              material={materials.strap}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="stitches_bent"
              castShadow
              receiveShadow
              geometry={nodes.stitches_bent.geometry}
              material={materials.stitches}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="case"
              castShadow
              receiveShadow
              geometry={nodes['case'].geometry}
              material={materials.metal}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="clockface"
              castShadow
              receiveShadow
              geometry={nodes.clockface.geometry}
              material={materials.clockface}
              position={[0, 0.098, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
        </group>
        <directionalLight
          name="light_0"
          intensity={3}
          decay={2}
          position={[10, 10, 10]}
          rotation={[-Math.PI / 4, 0.615, Math.PI / 6]}>
          <group position={[0, 0, -1]} />
          <group position={[0, 0, -1]} />
          <group position={[0, 0, -1]} />
          <group position={[0, 0, -1]} />
        </directionalLight>
      </group>
    </group>
  )
})

useGLTF.preload('/classic-watch.glb')

export default Model