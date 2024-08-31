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
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 200,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // push grab repulse
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 10,
          },
          grab: {
            distance: 150,
          },
          repulse: {
            distance: 80,
          },
        },
      },
      particles: {
        color: {
          value: isDarkMode ? "#FFFFFF" : "#000000",
        },
        links: {
          color: isDarkMode ? "#FFFFFF" : "#000000",
          distance: 150,
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
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
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
    }),
    [isDarkMode]
  );
  return (
    <div className=" absolute inset-0 ">
      <Particles
        id={props.id}
        init={particlesLoaded}
        options={options}
        className="h-full w-full"
      />
    </div>
  );
};

export default ParticlesComponent;
