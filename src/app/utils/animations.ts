import { Variants, easeOut, easeInOut } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const ginga: Variants = {
  hidden: { rotate: -2 },
  animate: {
    rotate: [2, -2, 2],
    transition: { duration: 2, repeat: Infinity, ease: easeInOut },
  },
};
