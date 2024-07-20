import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/magicui/particles";

const Particle = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#808080");

  useEffect(() => {
    console.log("Current theme:", theme);
    setColor(theme === "dark" ? "#000000" : "#808080");
  }, [theme]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={80}
        color={color}
        refresh
        size={0.4}
        vx={0.5}
      />
    </div>
  );
};

export default Particle;
