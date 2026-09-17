"use client";

import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

type Node = {
  Icon: IconType;
  label: string;
  color: string;
  x: number;
  y: number;
};

const NODES: Node[] = [
  { Icon: SiPython, label: "Python", color: "#3776AB", x: 40, y: 24 },
  { Icon: SiOpenjdk, label: "Java", color: "#EA2D2E", x: 150, y: 60 },
  { Icon: SiCplusplus, label: "C++", color: "#00599C", x: 70, y: 120 },
  { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E", x: 210, y: 140 },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178C6", x: 130, y: 200 },
  { Icon: SiReact, label: "React", color: "#61DAFB", x: 260, y: 220 },
  { Icon: SiNextdotjs, label: "Next.js", color: "#ECEEF5", x: 180, y: 280 },
  { Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1", x: 300, y: 310 },
  { Icon: SiMysql, label: "MySQL", color: "#4479A1", x: 220, y: 370 },
];

function buildPathD(nodes: Node[]) {
  return nodes.map((n, i) => `${i === 0 ? "M" : "L"} ${n.x} ${n.y}`).join(" ");
}

export default function TechPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<SVGCircleElement>(null);
  const iconRefs = useRef<(SVGGElement | null)[]>([]);
  const totalLenRef = useRef(0);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      totalLenRef.current = path.getTotalLength();
      path.style.strokeDasharray = `${totalLenRef.current}`;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let frame: number;
    function update() {
      const el = containerRef.current;
      const p = pathRef.current;
      if (el && p) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 as the section enters from the bottom of the viewport,
        // 1 once it has fully passed the top.
        const raw = (vh - rect.top) / (vh + rect.height);
        const progress = Math.min(1, Math.max(0, raw));
        const total = totalLenRef.current;

        p.style.strokeDashoffset = `${total * (1 - progress)}`;

        const point = p.getPointAtLength(total * progress);
        markerRef.current?.setAttribute("cx", String(point.x));
        markerRef.current?.setAttribute("cy", String(point.y));

        NODES.forEach((_, i) => {
          const g = iconRefs.current[i];
          if (!g) return;
          const nodeProgress = i / (NODES.length - 1);
          const lit = progress >= nodeProgress - 0.015;
          g.style.opacity = lit ? "1" : "0.3";
          g.style.filter = lit ? "none" : "grayscale(1)";
        });
      }
      if (!reduceMotion) frame = requestAnimationFrame(update);
    }

    update();
    if (!reduceMotion) frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-sm">
      <svg viewBox="0 0 340 400" className="w-full overflow-visible">
        <path
          ref={pathRef}
          d={buildPathD(NODES)}
          fill="none"
          stroke="#4FD1B3"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
        <circle ref={markerRef} r={4} fill="#4FD1B3" />

        {NODES.map((n, i) => (
          <g
            key={n.label}
            ref={(el) => {
              iconRefs.current[i] = el;
            }}
            transform={`translate(${n.x - 18}, ${n.y - 18})`}
            style={{ transition: "opacity 300ms ease, filter 300ms ease" }}
          >
            <circle
              cx={18}
              cy={18}
              r={19}
              fill="#1B1E38"
              stroke="#2A2D4A"
              strokeWidth={1}
            />
            <foreignObject x={4} y={4} width={28} height={28}>
              <n.Icon size={28} color={n.color} />
            </foreignObject>
          </g>
        ))}
      </svg>

      <p className="mt-4 text-center font-mono text-xs text-[#6E7191]">
        Python, Java, C++, JavaScript, TypeScript, React, Next.js,
        PostgreSQL, MySQL
      </p>
    </div>
  );
}