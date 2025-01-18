'use client'

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three'
import { techStackInfo } from '@/Data/data';

const FallingBlock: React.FC<{ position: [number, number, number]; rotationVal: [number, number, number]; delay: number; colour: string; img_src: string; }> = ({ position, rotationVal, delay, colour, img_src }) => {
    const ref = useRef<THREE.Group>(null);
    const [falling, setFalling] = useState(false);
    const [yPos, setYPos] = useState(position[1] + 5);
    const [startTime, setStartTime] = useState<number | null>(null);
    let randDelay = 0;

    if (delay > 0) {
        randDelay = delay + (Math.random() * 300 - 150);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setFalling(true);
            setStartTime(Date.now());
        }, randDelay);

        return () => clearTimeout(timer);
    }, [randDelay]);

    const easeInOut = (t: number) => {
        return t < 0.5 ? 4 * Math.pow(t, 2.75) : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    useFrame(() => {
        if (falling && ref.current && startTime !== null) {
            const timeElapsed = (Date.now() - startTime) / 1000;
            const progress = Math.min(timeElapsed / 2, 1);

            const easing = easeInOut(progress);

            const newY = position[1] + (yPos - position[1]) * (1 - easing);
            setYPos(newY);
            ref.current.position.y = newY;

            if (newY <= position[1]) {
                setYPos(position[1]);
                setFalling(false);
            }
        }
    })

    const darkenHex = (hex: string, percent: number) => {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);

        r = Math.max(0, Math.floor(r * (1 - percent)));
        g = Math.max(0, Math.floor(g * (1 - percent)));
        b = Math.max(0, Math.floor(b * (1 - percent)));

        const toHex = (c: number) => c.toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    return (
        <group rotation={rotationVal} ref={ref} position={[position[0], yPos, position[2]]}>
            <mesh>
                <boxGeometry args={[1, 0.65, 1]} />
                <meshStandardMaterial color={colour} />
            </mesh>
            <mesh position={[0, 0, 0.505]}>
                <planeGeometry args={[0.45, 0.45]} />
                <meshBasicMaterial map={useLoader(THREE.TextureLoader, img_src)} transparent />
            </mesh>

            <mesh position={[-0.35, 0.65 / 2, -0.35]}>
                <cylinderGeometry args={[0.1, 0.1, 0.2]} />
                <meshStandardMaterial color={darkenHex(colour, 0.12)} />
            </mesh>
            <mesh position={[0.35, 0.65 / 2, -0.35]}>
                <cylinderGeometry args={[0.1, 0.1, 0.2]} />
                <meshStandardMaterial color={darkenHex(colour, 0.12)} />
            </mesh>
            <mesh position={[-0.35, 0.65 / 2, 0.35]}>
                <cylinderGeometry args={[0.1, 0.1, 0.2]} />
                <meshStandardMaterial color={darkenHex(colour, 0.12)} />
            </mesh>
            <mesh position={[0.35, 0.65 / 2, 0.35]}>
                <cylinderGeometry args={[0.1, 0.1, 0.2]} />
                <meshStandardMaterial color={darkenHex(colour, 0.12)} />
            </mesh>
        </group>
    )
}

const LogCameraPosition = () => {
    useFrame((state) => {
        // Access the camera's position
        const { x, y, z } = state.camera.position;
        console.log(`Camera Position: x=${x.toFixed(2)}, y=${y.toFixed(2)}, z=${z.toFixed(2)}`);
    });

    return null; // This component doesn't render anything
};

const Scene: React.FC = () => {
    // const cameraRef = useRef();
    const colourArr = ["#4E515E", "#696773", "#FFDD4A", "#E88873", "#E0AC9D"];
    // useEffect(() => {
    //     if (cameraRef.current) {
    //         cameraRef.current.lookAt(0, 0, 0);
    //     }
    // }, []);

    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [3.95, 2.26, 3.63], fov: 50 }}>
                <LogCameraPosition />
                <ambientLight intensity={1} />
                <directionalLight
                    castShadow
                    position={[7, 2, 3]}
                    intensity={0.8}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
                <pointLight position={[10, 10, 10]} />

                {Array.from({ length: 5 }).map((_, index) => (
                    <FallingBlock key={index} rotationVal={[0, Math.PI / 5, 0]} position={[0, index * 0.65, 0]} delay={index * 400} colour={colourArr[index]} img_src={techStackInfo[index].img_src} />
                ))}
                {Array.from({ length: 4 }).map((_, index) => (
                    <FallingBlock key={index} rotationVal={[0, Math.PI / 3, 0]} position={[-0.8, index * 0.65, 1.35]} delay={index * 400 + 1 * 400} colour={colourArr[index]} img_src={techStackInfo[index + 5].img_src} />
                ))}
                {Array.from({ length: 3 }).map((_, index) => (
                    <FallingBlock key={index} rotationVal={[0, Math.PI / 8, 0]} position={[1.5, index * 0.65, -0.5]} delay={index * 400 + 1.7 * 400} colour={colourArr[index]} img_src={techStackInfo[index + 8].img_src} />
                ))}

                <OrbitControls target={[0, 1.2, 0]}/>
            </Canvas>
        </div>
    )
}

export default Scene;
