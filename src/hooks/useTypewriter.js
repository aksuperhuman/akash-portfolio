import { useEffect, useState } from "react";

/**
 * Simple typewriter effect: types out `text`, holds, then loops
 * if `loop` is true. Respects prefers-reduced-motion by rendering
 * the full string immediately.
 */
const useTypewriter = (text, { speed = 70, pause = 1800, loop = false } = {}) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(text);
      return;
    }

    let i = 0;
    let deleting = false;
    let timeout;

    const tick = () => {
      if (!deleting) {
        i++;
        setDisplay(text.slice(0, i));
        if (i === text.length) {
          if (!loop) return;
          timeout = setTimeout(() => {
            deleting = true;
            tick();
          }, pause);
          return;
        }
      } else {
        i--;
        setDisplay(text.slice(0, i));
        if (i === 0) {
          deleting = false;
        }
      }
      timeout = setTimeout(tick, deleting ? speed / 2 : speed);
    };

    timeout = setTimeout(tick, 300);
    return () => clearTimeout(timeout);
  }, [text, speed, pause, loop]);

  return display;
};

export default useTypewriter;
