import { useLocation } from "react-router-dom";

export const usePathParameters = () => {
  const location = useLocation();
  const paths = location.pathname.split("/");
  let collectionName = paths[1];
  if (collectionName === "" || collectionName === "home") {
    collectionName = "projects";
  }
  return { paths, collectionName };
};
export default usePathParameters;
