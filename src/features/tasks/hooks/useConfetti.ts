import { useCallback } from "react";
import confetti from "canvas-confetti";

interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
  origin?: { x?: number; y?: number };
}

export const useConfetti = () => {
  const launchConfetti = useCallback((options?: ConfettiOptions) => {
    confetti({
      particleCount: options?.particleCount || 200,
      spread: options?.spread || 100,
      origin: options?.origin || { y: 0.6 },
    });
  }, []);

  return { launchConfetti };
};
