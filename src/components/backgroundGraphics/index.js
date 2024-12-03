
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { PerspectiveCamera, SpotLight } from "@react-three/drei";
// import Ground from "./Ground";
// import { Car } from "./Car";
// import { City } from "./City";

// function CarShow() {
//     return (
//       <Canvas shadows>
//         <PerspectiveCamera makeDefault fov={50} position={[3, 5, 5]} />
//         <color args={["#0b0c10"]} attach="background" />

//         <SpotLight
//           color={[1, 1, 1]}
//           intensity={2}
//           position={[5, 5, 5]}
//           castShadow
//         />
//         <SpotLight
//           color={[1, 0.6, 0.2]}
//           intensity={2}
//           position={[-5, 5, -5]}
//           castShadow
//         />
//         <ambientLight intensity={1} />

//         <Ground />

//         <Suspense fallback={null}>
//           <City />
//         </Suspense>

//         <Suspense fallback={null}>
//           <Car />
//         </Suspense>
//       </Canvas>
//     );
// }

// export default CarShow;


import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Arrow from "./arrow";
import City from "./newCity";

const App = () => {
  return (
     
      <Canvas style={{ background: "#1e1e1e" }}>
        <ambientLight intensity={0.8} />
        <directionalLight intensity={1} position={[5, 10, 5]} />
        <Suspense fallback={null}>
          <City />
          <Arrow />
        </Suspense>
      </Canvas>
  
  );
};

export default App;
