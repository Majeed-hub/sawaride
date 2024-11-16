import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import {
  TextureLoader,
  RepeatWrapping,
  RGBAFormat,
  UnsignedByteType,
  SRGBColorSpace,
} from "three"; // Import SRGBColorSpace

export default function Ground() {
  // Load the textures for roughness and normal maps
  const [roughness, normal] = useLoader(TextureLoader, [
    process.env.PUBLIC_URL + "/textures/terrain-roughness.jpg",
    process.env.PUBLIC_URL + "/textures/terrain-normal.jpg",
  ]);

  // Use effect to configure the texture properties
  useEffect(() => {
    [normal, roughness].forEach((t) => {
      t.wrapS = RepeatWrapping; // Repeat wrapping for the textures
      t.wrapT = RepeatWrapping;
      t.repeat.set(5, 5); // Set texture repetition
      t.offset.set(0, 0); // Set the initial texture offset
      t.encoding = SRGBColorSpace; // Use SRGBColorSpace as a fallback
      t.format = RGBAFormat; // Set the format to RGBA
      t.type = UnsignedByteType; // Set the type to UnsignedByteType for proper color handling
    });
  }, [normal, roughness]);

  // Use frame to animate the texture offsets for scrolling effect
  useFrame((state, delta) => {
    let t = -state.clock.getElapsedTime() * 0.128;
    roughness.offset.set(0, t % 1); // Animate roughness texture offset
    normal.offset.set(0, t % 1); // Animate normal map offset
  });

  // Return the mesh with plane geometry and reflector material
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -0.1, 0]}>
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        roughnessMap={roughness} // Set the roughness map
        normalMap={normal} // Set the normal map
        roughness={1} // Set the roughness of the material
        blur={[300, 100]} // Set blur values for reflection
        mixBlur={0.7} // Mix blur amount
        reflectivity={0.5} // Set reflectivity of the material
      />
    </mesh>
  );
}
