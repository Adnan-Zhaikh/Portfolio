"use client";

import { useEffect, useRef, useState, type MutableRefObject, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus, Icosahedron, Box, Sphere, Octahedron, Stars } from "@react-three/drei";
import * as THREE from "three";

type ScrollRef = MutableRefObject<number>;

function Layer({
  scrollRef,
  depth,
  travel,
  spin,
  children,
}: {
  scrollRef: ScrollRef;
  depth: number;
  travel: number;
  spin: number;
  children: ReactNode;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    g.position.y = scrollRef.current * travel;
    g.rotation.y += spin * delta;
    g.rotation.x += spin * 0.6 * delta;
  });

  return (
    <group ref={group} position={[0, 0, depth]}>
      {children}
    </group>
  );
}

function StarOrbit({ scrollRef }: { scrollRef: ScrollRef }) {
  const group = useRef<THREE.Group>(null);
  const lastScroll = useRef(0);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    const current = scrollRef.current;
    const scrollDelta = current - lastScroll.current;
    lastScroll.current = current;
    // A slow constant orbit, like a long-exposure night sky photo, plus a
    // brief boost in the same direction whenever the page is scrolled.
    g.rotation.y += delta * 0.025 + scrollDelta * 3;
  });

  return (
    // No tilt: Stars already distributes evenly in a full sphere around
    // the camera, so this fills the whole visible frame at every scroll
    // position instead of clustering near one edge.
    <group ref={group}>
      <Stars
        radius={60}
        depth={50}
        count={4500}
        factor={3}
        saturation={0}
        fade
        speed={0.4}
      />
    </group>
  );
}

function ScrollRig({ scrollRef }: { scrollRef: ScrollRef }) {
  const SECTIONS = 5;
  const Z_FAR = 8.5;
  const Z_NEAR = 3.2;

  useFrame((state, delta) => {
    const t = scrollRef.current;
    const idx = Math.min(SECTIONS - 1, Math.floor(t * SECTIONS));
    const local = t * SECTIONS - idx;
    // Even sections zoom in (far -> near) as you scroll through them,
    // odd sections zoom back out (near -> far), so the camera breathes
    // in and out once per section instead of dollying one direction
    // for the whole page.
    const zoomingIn = idx % 2 === 0;
    const start = zoomingIn ? Z_FAR : Z_NEAR;
    const end = zoomingIn ? Z_NEAR : Z_FAR;
    const target = THREE.MathUtils.lerp(start, end, local);
    state.camera.position.z = THREE.MathUtils.damp(
      state.camera.position.z,
      target,
      4,
      delta
    );
  });
  return null;
}

export default function ParallaxScene() {
  const scrollRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function onScroll() {
      const max = document.body.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scene = (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8.5], fov: 50 }} dpr={[1, 1.5]}>
        <color attach="background" args={["#14162A"]} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 4, 5]} intensity={0.6} />

        <ScrollRig scrollRef={scrollRef} />
        <StarOrbit scrollRef={scrollRef} />

        {/* Far layer: slow drift, slow spin, dim slate blue */}
        <Layer scrollRef={scrollRef} depth={-9} travel={-2} spin={0.05}>
          <Torus args={[1, 0.3, 16, 48]} position={[-2.6, 1, 0]}>
            <meshStandardMaterial color="#3A3D66" wireframe />
          </Torus>
          <Octahedron args={[0.9]} position={[2.6, -1.5, 0]}>
            <meshStandardMaterial color="#3A3D66" wireframe />
          </Octahedron>
        </Layer>

        {/* Mid layer */}
        <Layer scrollRef={scrollRef} depth={-4.5} travel={-4} spin={0.15}>
          <Icosahedron args={[1.1]} position={[2.1, 0.5, 0]}>
            <meshStandardMaterial color="#5C6099" wireframe />
          </Icosahedron>
          <Box args={[1.3, 1.3, 1.3]} position={[-2.3, -1, 0]}>
            <meshStandardMaterial color="#5C6099" wireframe />
          </Box>
        </Layer>

        {/* Near layer: fastest, closest to camera, bright accent teal */}
        <Layer scrollRef={scrollRef} depth={-1.5} travel={-6.5} spin={0.3}>
          <Sphere args={[0.5, 24, 24]} position={[0, 1.6, 0]}>
            <meshStandardMaterial color="#4FD1B3" wireframe />
          </Sphere>
        </Layer>
      </Canvas>
    </div>
  );

  // Rendered via a portal straight onto <body>, not nested inside the
  // page's own wrapper divs. A "fixed" element's positioning can get
  // silently trapped inside any ancestor that sets a transform, filter,
  // perspective, or similar property, and behave as if it's fixed to
  // that ancestor's box instead of the real browser viewport, which is
  // exactly what was making the canvas stop after one screen's height.
  // Attaching straight to document.body sidesteps that entirely.
  if (!mounted) return null;
  return createPortal(scene, document.body);
}