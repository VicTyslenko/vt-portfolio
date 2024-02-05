export const globalAnimation = ({
  xInitial = 0,
  yInitial = 70,
  xAnimate = 0,
  yAnimate = 0,
  duration = 1,
  ease = "easeOut",
} = {}) => ({
  initial: { x: xInitial, y: yInitial, opacity: 0 },
  animate: { x: xAnimate, y: yAnimate, opacity: 1 },
  transition: { duration, ease },
});
