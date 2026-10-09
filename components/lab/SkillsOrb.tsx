"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { IconBaseProps, IconType } from "react-icons";
import {
  SiPython,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiMysql,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiFastapi,
  SiSqlite,
  SiVercel,
  SiRender,
  SiGit,
  SiLinux,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3, DiPhotoshop, DiIllustrator } from "react-icons/di";
import { FaMicrosoft } from "react-icons/fa6";

// react-icons has no dedicated Canva mark, so this stands in for it as a
// plain brush glyph, in the same IconType shape as every other icon here.
function CanvaGlyph({ size = 18, color = "#00C4CC" }: IconBaseProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.6" />
      <path
        d="M7.5 15.5c1.1-4 2.6-7 4.6-7 1.3 0 1.9 1.1 1.4 2.4-.6 1.6-2.2 2.7-3.6 2.7-1.1 0-1.8-.7-1.8-1.7 0-2 2-3.9 4.1-3.9"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Skill = {
  label: string;
  Icon: IconType;
  color: string;
};

const SKILLS: Skill[] = [
  { label: "Python", Icon: SiPython, color: "#3776AB" },
  { label: "Java", Icon: SiOpenjdk, color: "#EA2D2E" },
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#ECEEF5" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { label: "Prisma", Icon: SiPrisma, color: "#8C9EFF" },
  { label: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { label: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { label: "C++", Icon: SiCplusplus, color: "#00599C" },
  { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { label: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { label: "CSS", Icon: DiCss3, color: "#3E9BE0" },
  { label: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { label: "SQLite", Icon: SiSqlite, color: "#5DADE2" },
  { label: "Vercel", Icon: SiVercel, color: "#ECEEF5" },
  { label: "Render", Icon: SiRender, color: "#46E3B7" },
  { label: "Photoshop", Icon: DiPhotoshop, color: "#31A8FF" },
  { label: "Illustrator", Icon: DiIllustrator, color: "#FF9A00" },
  { label: "Canva", Icon: CanvaGlyph, color: "#00C4CC" },
  { label: "Git", Icon: SiGit, color: "#F05032" },
  { label: "Linux", Icon: SiLinux, color: "#FCC624" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { label: "Microsoft", Icon: FaMicrosoft, color: "#F25022" },
];

// Even distribution of `count` points on a sphere of the given radius, via
// the golden-angle spiral. Sampling at i+0.5 (instead of i) keeps a point
// off each exact pole, so nothing sits at the one spot where the sphere's
// projection is most compressed and neighbors would crowd together.
function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - ((i + 0.5) / count) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius
      )
    );
  }
  return points;
}

// A visible "grid globe": a sphere built only from its wireframe latitude
// and longitude lines, sitting just inside the ring of icons.
function GridGlobe({ radius }: { radius: number }) {
  return (
    <mesh>
      <sphereGeometry args={[radius, 20, 14]} />
      <meshBasicMaterial color="#3A3D66" wireframe transparent opacity={0.45} />
    </mesh>
  );
}

function SkillNode({
  skill,
  position,
  isMobile,
}: {
  skill: Skill;
  position: THREE.Vector3;
  isMobile: boolean;
}) {
  const { Icon, label, color } = skill;
  const elRef = useRef<HTMLDivElement>(null);
  const normal = useMemo(() => position.clone().normalize(), [position]);

  // Nodes don't move (the camera orbits instead), so "facing the camera"
  // is just the dot product of each node's outward normal with the
  // direction to the camera. Front-of-globe icons stay fully visible;
  // ones rotated round the back fade out instead of overlapping the
  // front set or showing through as ghost text.
  useFrame(({ camera }) => {
    const el = elRef.current;
    if (!el) return;
    const camDir = camera.position.clone().normalize();
    const facing = normal.dot(camDir);
    const opacity = THREE.MathUtils.clamp((facing + 0.25) / 0.55, 0, 1);
    el.style.opacity = String(opacity);
    el.style.pointerEvents = opacity > 0.5 ? "auto" : "none";
  });

  return (
    <Html position={position} center occlude={false} zIndexRange={[10, 0]}>
      <div
        ref={elRef}
        className={`flex flex-col items-center ${isMobile ? "gap-0.5" : "gap-1"}`}
        style={{ opacity: 0 }}
      >
        <div
          className={`flex items-center justify-center rounded-full border ${
            isMobile ? "h-6 w-6" : "h-8 w-8"
          }`}
          style={{ background: "#1B1E38", borderColor: "#2A2D4A" }}
        >
          <Icon size={isMobile ? 12 : 16} color={color} />
        </div>
        <span className={`whitespace-nowrap font-mono text-[#A6A9C4] ${
          isMobile ? "text-[7px]" : "text-[8px]"
        }`}>
          {label}
        </span>
      </div>
    </Html>
  );
}

// Camera distance is derived from the sphere radius and the vertical FOV
// below, rather than picked by eye, so the globe reliably fills ~90% of
// whatever height the container ends up with instead of floating small
// in the middle of it.
const FOV = 42;
const FILL_FRACTION = 0.92;

export default function SkillsOrb() {
  // Detect mobile viewport
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const iconRadius = isMobile ? 4.5 : 6;
  const globeRadius = iconRadius * 0.86;
  const cameraZ =
    iconRadius / (FILL_FRACTION * Math.tan((FOV / 2) * (Math.PI / 180)));
  const positions = useMemo(
    () => fibonacciSphere(SKILLS.length, iconRadius),
    [iconRadius]
  );

  return (
    <div
      className="relative mx-auto w-full"
      // Inline styles here on purpose: this needs to reliably size the
      // canvas regardless of the project's Tailwind content-glob setup
      // (see tailwind.config.ts), and a fixed vh-based height fills the
      // section instead of leaving dead space around a small globe.
      style={{ 
        height: isMobile ? "min(70vh, 480px)" : "min(82vh, 880px)", 
        maxWidth: "1400px" 
      }}
    >
      <Canvas camera={{ position: [0, 0, cameraZ], fov: FOV }}>
        <ambientLight intensity={1} />
        <GridGlobe radius={globeRadius} />
        {SKILLS.map((skill, i) => (
          <SkillNode 
            key={skill.label} 
            skill={skill} 
            position={positions[i]} 
            isMobile={isMobile}
          />
        ))}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          rotateSpeed={0.6}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
      <p
        className={`pointer-events-none font-mono text-[#6E7191] ${
          isMobile ? "text-[8px]" : "text-[10px]"
        }`}
        style={{
          position: "absolute",
          left: "50%",
          bottom: isMobile ? 4 : 6,
          transform: "translateX(-50%)",
        }}
      >
        Drag to explore
      </p>
    </div>
  );
}
