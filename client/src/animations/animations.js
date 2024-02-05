export const globalAnimation = ({
  yInitial = 70,
  yAnimate = 0,
  duration = 1,
  ease = "easeOut",
} = {}) => ({
  initial: { y: yInitial, opacity: 0 },
  animate: { y: yAnimate, opacity: 1 },
  transition: { duration, ease },
});

