/* eslint-disable react/jsx-no-useless-fragment */
import { Box, Typography, useTheme } from "@mui/material";
import { Canvas, useFrame } from '@react-three/fiber';
import { Text,OrbitControls } from '@react-three/drei';
import { useEffect, useRef } from "react";
import { DirectionalLightHelper,DoubleSide } from 'three';
import { useHelper,PerspectiveCamera } from '@react-three/drei';


/* eslint-disable-next-line */
export interface LogoProps {
  mode?:'dark'|'light'
}

export const Logo = ({
  mode='light',
}:LogoProps) => {
  return (
    <div
      style={{ height:56,}}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 0.9]} />
        <ambientLight intensity={1} />
        <TextObject mode={mode} text={'Nakazato\'s blog'} />
      </Canvas>
    </div>
  )
}

export default Logo;

export const useRotate = (speed = [1, 1, 1]) => {
  const ref = useRef<any>(null)
  useFrame(({ clock }) => {
      const a = clock.getElapsedTime()
      ref.current.rotation.x = a * speed[0]
      ref.current.rotation.y = a * speed[1]
      ref.current.rotation.z = a * speed[2]
  })
  return ref
}

type TCanvasProps = {
  children: React.ReactNode
  fov?: number
  position?: [number, number, number]
}

export const TCanvas = (props:TCanvasProps) => {
  const { children, fov = 50, position = [0, 3, 10] } = props
  return (
      <Canvas camera={{ fov, position }} dpr={[1, 2]} shadows>
          {children}
      </Canvas>
  )
}

type TdirectionalLightProps = {
  position: [number, number, number]
  isHelper?: boolean
}

export const TDirectionalLight = (props:TdirectionalLightProps) => {
  const { position, isHelper = false } = props

  const lightRef = useRef()
  useHelper(lightRef, DirectionalLightHelper)

  return (
      <>
          {isHelper ? (
              <directionalLight
                  ref={lightRef}
                  position={position}
                  intensity={1} // 光の強さ
                  shadow-mapSize-width={2048} // 描画精度
                  shadow-mapSize-height={2048}
                  castShadow
              />
          ) : (
              <directionalLight
                  position={position}
                  intensity={1} // 光の強さ
                  shadow-mapSize-width={2048} // 描画精度
                  shadow-mapSize-height={2048}
                  castShadow
              />
          )}
      </>
  )
}


type TFloorPlaneProps = {
    size?: [number, number]
    color?: string
    isGridHelper?: boolean
}

export const TFloorPlane = (props:TFloorPlaneProps) => {
    const { size = [10, 10], color = 'white', isGridHelper = false } = props

    return (
        <>
            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={size} />
                <meshPhongMaterial color={color} side={DoubleSide} />
            </mesh>

            {isGridHelper && (
                <gridHelper position={[0, 0.01, 0]} args={[size[0], size[0], 'red', 'black']} />
            )}
        </>
    )
}

const TextObject = ({ text,mode }:{ text: string,mode:'light'|'dark' }) => {
  // const textRef = useRotate([0, 0.1, 0])
  const textRef = useRef();
  const theme = useTheme()
  console.log({theme})
  return (
      <Text
          ref={textRef}
          color={mode === 'light'?'black':'white'}
          fontSize={0.5}
          maxWidth={10}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={'left'}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle">
          {text}
      </Text>
  )
}
