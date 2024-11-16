
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, SpotLight } from "@react-three/drei";
import Ground from "./Ground";
import { Car } from "./Car";
import { City } from "./City";

function CarShow() {
    return (
      <Canvas shadows>
        <PerspectiveCamera makeDefault fov={50} position={[3, 5, 5]} />
        <color args={["#0b0c10"]} attach="background" />

        <SpotLight
          color={[1, 1, 1]}
          intensity={2}
          position={[5, 5, 5]}
          castShadow
        />
        <SpotLight
          color={[1, 0.6, 0.2]}
          intensity={2}
          position={[-5, 5, -5]}
          castShadow
        />
        <ambientLight intensity={0.4} />

        <Ground />

        <Suspense fallback={null}>
          <City />
        </Suspense>

        <Suspense fallback={null}>
          <Car />
        </Suspense>
      </Canvas>
    );
}

export default CarShow;