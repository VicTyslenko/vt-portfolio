import { useLocation } from "react-router-dom";

export const usePathParameters = () => {
  const location = useLocation();
  const paths = location.pathname.split("/");
  const collectionName = paths[1];
  return { paths, collectionName };
};
export default usePathParameters;
