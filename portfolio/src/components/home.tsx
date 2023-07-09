/* eslint-disable react/no-unescaped-entities */
"use client"
import { React, useRef, useCallback, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import * as THREE from 'three'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, LUT } from '@react-three/postprocessing'
import { Box } from '../assets/dynamic/Box'
import { Prism } from '../assets/dynamic/Prism'
import { Beam } from '../assets/dynamic/Beam'
import { Flare } from '../assets/dynamic/Flare'
import { Rainbow } from '../assets/dynamic/Rainbow'
import { Reflect } from '../assets/dynamic/Reflect'

//Prism code:
export function lerp(object, prop, goal, speed = 0.1){
    object[prop] = THREE.MathUtils.lerp(object[prop], goal, speed)
}

const vector = new THREE.Vector3()
export function lerpV3(value, goal, speed = 0.1) {
    value.lerp(vector.set(...goal), speed)
}

export function calculateRefractionAngle(incidentAngle, glassIor = 2.5, airIor = 1.000293) {
    const theta = Math.asin((airIor * Math.sin(incidentAngle))/glassIor) || 0
    return theta
}

export const Home = () => {
    return (
        <div id='home' className='w-full h-screen flex'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
                <h1 className='text-4xl sm:text-7xl font-bold py-4'>Welcome to my site!</h1>
                <p className=''>Hey, my name is Sandeep Suri and I'm a</p>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Full-Stack Developer</h2>
                <p className=' py-4 max-w-[700px]'>I’m also a Computer Engineer looking for an opportunity to apply my critical thinking skills 
                    to unique problems. I have excellent skills in web development and I’m passionate about 
                    developing innovative software. Currently, I have a desire for a career in software 
                    development.
                </p>

                <div>
                    <Link to='about' smooth={true} duration={300}>
                        <button className='group border-2 rounded-lg px-6 py-3 my-2 flex items-center justify-center hover:bg-[#42546f] hover:border-[#42546f] hover:text-white duration-300'>
                            View Work
                            <span className='group-hover:rotate-90 group-hover:mt-[-10px] duration-300 inline-flex items-center'>
                            <HiArrowNarrowRight className='ml-2 transform origin-center'/>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <Canvas orthographic gl={{ antialias: false }} camera={{ position: [0, 0, 100], zoom: 70}} className='w-full h-full z-0'>
                {/* <Prism scale={.6} position={[0, -0.5, 0]} onRayOver={rayOver} onRayOut={rayOut} onRayMove={rayMove} /> */}
                {/* <Box position={[-1.4, 1, 0]} rotation={[0, 0, Math.PI / 8]} />
                <Box position={[-2.4, -1, 0]} rotation={[0, 0, Math.PI / -4]} />
                <Box position={[1.4, -1, 0]} rotation={[0, 0, Math.PI / 8]} />
                <Box position={[2.4, 1, 0]} rotation={[0, 0, Math.PI / 8]} /> */}
                <color attach="background" args={['black']} />
                <Scene />
                <EffectComposer disableNormalPass>
                    <Bloom mipmapBlur levels={9} intensity={1.5} luminanceThreshold={1} luminanceSmoothing={1} />
                </EffectComposer>
            </Canvas>
        </div>
    )
}

function Scene() {
    const [prismHit, setPrismHit] = useState(false)
    const flare = useRef(null)
    const ambient = useRef(null)
    const spot = useRef(null)
    const boxreflect = useRef(null)
    const rainbow = useRef(null)

    const rayOut = useCallback(() => setPrismHit(false), [])
    const rayOver = useCallback((e) => {
        e.stopPropagation()
        setPrismHit(true)
        rainbow.current.material.speed = 1
        rainbow.current.material.emissiveIntensity = 20
    }, [])

    const vec = new THREE.Vector3()
    const rayMove = useCallback(({ api, position, direction, normal }) => {
        if(!normal)  return
        vec.toArray(api.positions, api.number++ * 3)
        flare.current.position.set(position.x, position.y, -0.5)
        flare.current.rotation.set(0, 0, -Math.atan2(direction.x, direction.y))

        let angleScreenCenter = Math.atan2(-position.y, -position.x)
        const normalAngle = Math.atan2(normal.y, normal.x)

        const incidentAngle = angleScreenCenter - normalAngle
        const refractionAngle = calculateRefractionAngle(incidentAngle) * 6

        angleScreenCenter += refractionAngle
        rainbow.current.rotation.z = angleScreenCenter
        lerpV3(spot.current.target.position, [Math.cos(angleScreenCenter), Math.sin(angleScreenCenter), 0], 0.05)
        spot.current.target.updateMatrixWorld()
    }, [])

    useFrame((state) => {
        boxreflect.current.setRay([(state.pointer.x * state.viewport.width) / 2, (state.pointer.y * state.viewport.height) / 2, 0], [0, 0, 0])

        lerp(rainbow.current.material, 'emissiveIntensity', prismHit ? 2.5 : 0, 0.1)
        spot.current.intensity = rainbow.current.material.emissiveIntensity
        lerp(ambient.current, 'intensity', 0, 0.025)
    })

    return (
        <>
          {/* Lights */}
          <ambientLight ref={ambient} intensity={0} />
          <pointLight position={[10, -10, 0]} intensity={0.05} />
          <pointLight position={[0, 10, 0]} intensity={0.05} />
          <pointLight position={[-10, 0, 0]} intensity={0.05} />
          <spotLight ref={spot} intensity={1} distance={7} angle={1} penumbra={1} position={[0, 0, 1]} />
          {/* Prism + blocks + reflect beam */}
          <Beam ref={boxreflect} bounce={10} far={20}>
            <Prism scale={.6} position={[0, -0.5, 0]} onRayOver={rayOver} onRayOut={rayOut} onRayMove={rayMove} />
          <Box position={[-1.4, 1, 0]} rotation={[0, 0, Math.PI / 8]} />
          <Box position={[-2.4, -1, 0]} rotation={[0, 0, Math.PI / -4]} />
          </Beam>
          {/* Rainbow and flares */}
          <Rainbow ref={rainbow} startRadius={0} endRadius={0.5} fade={0} />
          <Flare ref={flare} visible={prismHit} renderOrder={10} scale={1.25} streak={[12.5, 20, 1]} />
        </>
      )
}