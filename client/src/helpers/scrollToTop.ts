const scrollToTop = (top = 0, behavior: ScrollBehavior = "smooth") => {
  window.scrollTo({
    top: top,
    behavior: behavior,
  });
};

export default scrollToTop;
