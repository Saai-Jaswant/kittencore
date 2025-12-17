import { useState, useEffect, useCallback, useRef } from "react";

export const useScrollMeow = () => {
  const [isMeowing, setIsMeowing] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playMeow = useCallback(() => {
    try {
      // Initialize audio context if not already done
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = audioContextRef.current;
      const now = ctx.currentTime;
      
      // Create a fun cat meow sound using oscillators
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      
      // Meow frequencies (fundamental and harmonics)
      osc1.frequency.setValueAtTime(350, now);
      osc1.frequency.exponentialRampToValueAtTime(250, now + 0.15);
      
      osc2.frequency.setValueAtTime(700, now);
      osc2.frequency.exponentialRampToValueAtTime(500, now + 0.15);
      
      // Envelope
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.05, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      
      osc1.start(now);
      osc2.start(now);
      
      osc1.stop(now + 0.2);
      osc2.stop(now + 0.2);
    } catch (e) {
      console.log("Audio playback not available");
    }
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDelta = Math.abs(currentScrollY - lastScrollY);
    
    if (scrollDelta > 30) {
      setIsMeowing(true);
      playMeow();
      setLastScrollY(currentScrollY);
      
      setTimeout(() => {
        setIsMeowing(false);
      }, 200);
    }
  }, [lastScrollY, playMeow]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isMeowing;
};
