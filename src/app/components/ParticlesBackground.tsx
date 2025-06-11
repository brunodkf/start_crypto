"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import type { Engine } from "tsparticles-engine";

export default function ParticlesNetwork() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="-z-10 opacity-25"
      options={{
        fullScreen: { enable: false }, 
        background: { color: "transparent" }, 
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          color: { value: "#ededed" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1, direction: "none", outModes: "out" },
          links: {
            enable: true,
            distance: 150,
            color: "#0F725C",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "remove" },
          },
          modes: {
            repulse: { distance: 200, duration: 0.5, speed: 1 },
            remove: { quantity: 2 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
