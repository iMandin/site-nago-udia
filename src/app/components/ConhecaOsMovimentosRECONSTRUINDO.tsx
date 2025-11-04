"use client";

import { useEffect, useRef, useState } from "react";
// @ts-ignore
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// === declarações fake para TS ===
// @ts-ignore
type AnimationMixer = any;
// @ts-ignore
type Group = any;

const movimentos = [
  "Ginga",
  "Troca de pé",
  "Situps",
  "Role",
  "Rasteira Rabo de arraia",
  "Rasteira Meia-lua de frente",
  "Rasteira em pé",
  "Rasteira de fronte",
  "Rasteira de costas",
  "Rabo de arraia",
  "Queixada",
  "Queixada from a step back",
  "Queda de rins",
  "Ponteira",
  "Pike walk",
  "Pião de cabeça",
  "Mola",
  "model",
  "Mma Martelo",
  "Mma Martelo rotado",
  "Mma Chapa",
  "Mma Chapa giratória",
  "Meia-lua de frente",
];

export default function ConhecaOsMovimentos() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mixerRef = useRef<AnimationMixer | null>(null);
  const [player, setPlayer] = useState<Group | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // === Scene, Camera, Renderer ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // === Lights ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const spotLight = new THREE.SpotLight(0xffffff, 0.8);
    spotLight.position.set(10, 20, 10);
    scene.add(spotLight);

    // === Ground ===
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50),
      new THREE.MeshPhongMaterial({ color: 0x222222 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // === Clock ===
    const clock = new THREE.Clock();

    // === Load initial FBX ===
    const loader = new FBXLoader();
    loader.load(
      `/assets/fbx/${movimentos[0]}.fbx`,
      (object) => {
        object.scale.set(0.01, 0.01, 0.01);
        scene.add(object);

        const mixer = new THREE.AnimationMixer(object);
        mixerRef.current = mixer;

        if (object.animations.length > 0) {
          const action = mixer.clipAction(object.animations[0]);
          action.play();
        }

        setPlayer(object);
      },
      undefined,
      (err) => console.error("Erro ao carregar FBX:", err)
    );

    // === Animate loop ===
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      mixerRef.current?.update(delta);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // === Cleanup ===
    return () => {
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // === Switch movement ===
  const handleMove = (move: string) => {
    if (!player) return;

    const loader = new FBXLoader();
    loader.load(
      `/assets/fbx/${move}.fbx`,
      (object) => {
        // Remove old model
        player.parent?.remove(player);

        object.scale.set(0.01, 0.01, 0.01);
        const mixer = new THREE.AnimationMixer(object);
        mixerRef.current = mixer;

        if (object.animations.length > 0) {
          const action = mixer.clipAction(object.animations[0]);
          action.play();
        }

        setPlayer(object);
      },
      undefined,
      (err) => console.error("Erro ao carregar FBX:", err)
    );
  };

  return (
    <section className="py-24 bg-black">
      <h2 className="text-4xl font-bold text-gold text-center mb-8">
        Conheça os Movimentos
      </h2>
      <div
        ref={mountRef}
        className="w-full h-[600px] mx-auto rounded-xl border border-gold"
      ></div>

      <div className="flex justify-center mt-4 gap-4 flex-wrap">
        {movimentos.map((m) => (
          <button
            key={m}
            onClick={() => handleMove(m)}
            className="bg-greenCapoeira text-black px-4 py-2 rounded hover:bg-gold transition"
          >
            {m}
          </button>
        ))}
      </div>
    </section>
  );
}
