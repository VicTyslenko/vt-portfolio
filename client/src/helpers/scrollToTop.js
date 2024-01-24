const scrollToTop = (top = 0, behavior = "smooth") => {
  window.scrollTo({
    top: top,
    behavior: behavior,
  });
};

export default scrollToTop;
