import { Header } from "components/header";
import AppRoutes from "./routers/AppRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};

export default App;
