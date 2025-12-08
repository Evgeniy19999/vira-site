import { useEffect, useState } from "react";

function useCoarsePointer() {
  const [isCoarse, setIsCoarse] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia("(pointer: coarse)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");

    const handler = (e: MediaQueryListEvent) => {
      setIsCoarse(e.matches);
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isCoarse;
}

export default useCoarsePointer;
