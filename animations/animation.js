export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0 },
};

export const headerAnimLeft = {
  hidden: { x: '-100%', opacity: 0, transition: { duration: 0.75 } },
  show: { x: 0, opacity: 1, transition: { duration: 0.75 } },
  transition: { ease: 'ease', duration: 1 },
};
export const headerAnimRight = {
  hidden: { x: '100%', opacity: 0, transition: { duration: 0.75 } },
  show: { x: 0, opacity: 1, transition: { duration: 0.75 } },
  transition: { ease: 'easeInOut', duration: 1 },
};

export const circleAnim = {
  hidden: { opacity: 0 },
  show: {
    scale: [1, 2, 2, 3, 1],
    transition: { duration: 2.5 },
    opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
    borderRadius: ['20%', '20%', '50%', '80%', '20%'],
  },
};

export const photoAnimLeft = {
  hidden: { x: -200 },
  show: {
    x: 0,
    transition: { duration: 1, type: 'spring', stiffness: 50 },
  },
};

export const titleReveal = {
  hidden: {
    y: '4rem',
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      type: 'tween',

      staggerChildren: 0.25,
    },
  },
};

export const slideLeft = {
  hidden: {
    opacity: 0,
    x: '-15rem',
    scale: 0.25,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', duration: 1.75 },
  },
};
