import { Header } from "components/header";
import AppRoutes from "./routes/app.routes";
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
