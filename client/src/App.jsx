import { Header } from "components/header";
import AppRoutes from "./routers/AppRoutes";
import { Toaster } from "react-hot-toast";

import { useGetLocation } from "hooks/use-location";

const App = () => {
  useGetLocation();
  return (
    <>
      <Header />
      <AppRoutes />
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};

export default App;
