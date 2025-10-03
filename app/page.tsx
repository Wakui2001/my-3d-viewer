"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Bounds } from "@react-three/drei";
import React, { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/models/apple.glb");
  return <primitive object={scene} />;
}

export default function Page() {
  return (
    <main className="w-screen h-dvh flex flex-col bg-black text-white">
      {/* 3Dビューエリア */}
      <div className="flex-1">
        <Canvas shadows dpr={[1, 2]}>
          <ambientLight intensity={0.45} />
          <spotLight
            position={[2, 4, 2]}
            angle={0.4}
            penumbra={0.6}
            intensity={1.2}
            castShadow
          />
          <Suspense fallback={null}>
            <Environment preset="studio" />
            <Bounds fit clip margin={1.2}>
              <Model />
            </Bounds>
          </Suspense>
          <OrbitControls makeDefault enableDamping dampingFactor={0.08} />
        </Canvas>
      </div>

      {/* フッター（ライセンス表記） */}
      <footer className="bg-gray-900 text-sm text-center p-2">
        3D Model:&nbsp;
        <a
          href="https://www.fab.com/listings/c4323552-1ba6-48e9-9cb3-d4e6be29fc2b"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400 hover:text-blue-200"
        >
          "Red apple" by Alin C.
        </a>
        &nbsp;is licensed under&nbsp;
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400 hover:text-blue-200"
        >
          CC BY 4.0
        </a>.
      </footer>
    </main>
  );
}
