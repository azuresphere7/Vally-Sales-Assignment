import { Variants } from "framer-motion";

export const fadeUpVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      opacity: 0,
      y: 32,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
      },
    },
  };

  return variant;
};

export const fadeLeftVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      opacity: 0,
      x: 32
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay
      }
    }
  };

  return variant;
};