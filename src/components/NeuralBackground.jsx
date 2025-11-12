import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // 🧠 Lighter build than loadFull

export default function NeuralBackground() {
  const particlesInit = useCallback(async (engine) => {
    // Loads only essential features (no plugins)
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        background: { color: "transparent" },
        fpsLimit: 45, // ⚙️ Cap FPS for stability
        particles: {
          number: {
            value: 50, // ⚡ Fewer particles = lighter render
            density: { enable: true, area: 1000 },
          },
          color: { value: "#FFD700" },
          shape: { type: "circle" },
          opacity: { value: 0.5 }, // static opacity
          size: { value: { min: 1, max: 2.5 } },
          links: {
            enable: true,
            distance: 110, // shorter link distance = fewer connections
            color: "#FFD700",
            opacity: 0.25,
            width: 3,
          },
          move: {
            enable: true,
            speed: 0.4, // slower motion
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
          },
        },
        detectRetina: false, // ⚙️ Skip high-res calculations
        pauseOnBlur: true,   // 💤 Pauses animation when tab inactive
      }}
    />
  );
}
