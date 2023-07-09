import * as THREE from 'three'
import { forwardRef, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const width = 2
const height = 2
const radius = 0.4
const depth = 2
const shape = new THREE.Shape()

shape.moveTo(-width/2, -height/2 + radius)
shape.lineTo(-width/2, height/2 - radius)
shape.absarc(-width/2 + radius, height/2 - radius, radius, Math.PI, 0.5 * Math.PI, true)
shape.lineTo(width/2 - radius, height/2)
shape.absarc(width/2 - radius, height/2 - radius, radius, 0.5 * Math.PI, 0, true)
shape.lineTo(width/2, -height/2 + radius)
shape.absarc(width/2 - radius, -height/2 + radius, radius, 2 * Math.PI, 1.5 * Math.PI, true)
shape.lineTo(-width/2 + radius, -height/2)
shape.absarc(-width/2 + radius, -height/2 + radius, radius, 1.5 * Math.PI, Math.PI, true)

export function lerp(object, prop, goal, speed=0.1){
    object[prop]=THREE.MathUtils.lerp(object[prop], goal, speed)
}

const colour = new THREE.Color()
export function lerpC(value, goal, speed=0.1){
    value.lerp(colour.set(goal), speed)
}

const vector = new THREE.Vector3()
export function lerpV3(value, goal, speed=0.1){
    value.lerp(vector.set(...goal), speed)
}

export function calculateRefractionAngle(incidentAngle, glassIor=2.5, airIor=1.000293){
    return Math.asin((airIor*Math.sin(incidentAngle))/glassIor) || 0
}

const boxGeometry = new THREE.BoxGeometry()
const roundedBoxGeometry = new THREE.ExtrudeGeometry(shape, {
    depth: 1,
    bevelEnabled: false
})
roundedBoxGeometry.translate(0, 0, -depth/2)
roundedBoxGeometry.computeVertexNormals()

export const Box = forwardRef((props, ref) => {
    const [hovered, hover] = useState(false)
    const inner = useRef(null)
    useFrame(() => {
        lerpC(inner.current.material.emissive, hovered ? 'white' : '#454545', 0.1)
    })
    return (
        <group scale={0.5} ref={ref} {...props} >
            <mesh visible={false} onRayOver={() => hover(true)} onRayOut={() => hover(false)} geometry={boxGeometry} />
            <mesh ref={inner} geometry={roundedBoxGeometry}>
                <meshStandardMaterial color="#333" toneMapped={false} emissiveIntensity={2} />
            </mesh>
        </group>
    )
})