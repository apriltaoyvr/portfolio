/* General */
/* Sliding */
export const slideContainer = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 25,
      staggerChildren: 0.5,
    },
  },
  exit: { opacity: 0, y: -20 },
};

export const slideSubContainer = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 25,
      delay: 0.5,
      staggerChildren: 0.25,
    },
  },
  exit: { opacity: 0, y: -20 },
};

export const slideItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 25,
    },
  },
  exit: { opacity: 0, y: -50 },
};

/* Fading */
export const fadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 25,
      staggerChildren: 0.33,
    },
  },
};

export const fadeItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

/* Component Specific */
export const langContainer = {
  hidden: {
    transition: {
      type: 'spring',
      delay: 1,
      staggerChildren: 0.25,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 25,
      staggerChildren: 0.25,
      staggerDirection: -1,
    },
  },
};

export const langChild = {
  hidden: { opacity: 0, y: -10 },
  exit: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};
