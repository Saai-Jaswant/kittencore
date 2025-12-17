import { useState, useEffect, useCallback } from "react";

export const useScrollMeow = () => {
  const [isMeowing, setIsMeowing] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDelta = Math.abs(currentScrollY - lastScrollY);
    
    if (scrollDelta > 30) {
      setIsMeowing(true);
      setLastScrollY(currentScrollY);
      
      setTimeout(() => {
        setIsMeowing(false);
      }, 200);
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isMeowing;
};
