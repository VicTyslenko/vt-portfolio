import React from "react";

export const HeaderVisibilityContext = React.createContext({
  isVisible: true,
  setIsVisible: () => {},
});
