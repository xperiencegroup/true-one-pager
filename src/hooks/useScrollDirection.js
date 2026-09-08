import { useState, useEffect, useRef } from "react";

export function useScrollDirection() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const threshold = 10; // px mínimos de scroll para reaccionar
    const topOffset = 83; // no ocultar mientras estemos cerca del top

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Siempre visible cerca del top
      if (currentScrollY < topOffset) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;

      if (Math.abs(diff) < threshold) return;

      if (diff > 0) {
        // scrolleando hacia abajo
        setVisible(false);
      } else {
        // scrolleando hacia arriba
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible;
}
