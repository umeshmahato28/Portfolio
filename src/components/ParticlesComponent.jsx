import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../utils/Theme"; // Import your theme hook

const ParticlesComponent = (props) => {
  const { isDarkMode } = useTheme(); // Get the current theme mode
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Memoize options based on the current theme mode
  const options = useMemo(() => ({
    background: {
      color: {
        value: "",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse", // Use "repulse" for click interactions
        },
        onHover: {
          enable: true,
          mode: "grab", // Use "push" for hover interactions
        },
      },
      modes: {
        push: {
          distance: 10,
          duration: 5,
        },
        grab: {
          distance: 150,
        },
      },
    },
    particles: {
      color: {
        value: isDarkMode ? "#FFFFFF" : "#000000", // Particle color based on theme
      },
      links: {
        color: isDarkMode ? "#FFFFFF" : "#000000", // Link color based on theme
        distance: 10,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 200,
      },
      opacity: {
        value: 1.0,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), [isDarkMode]);

  return (
      <div className="absolute inset-0  w-full">
    <Particles id={props.id} init={particlesLoaded} options={options} />
  </div>
  )
};

export default ParticlesComponent;
