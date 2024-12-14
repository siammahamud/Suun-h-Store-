import { ToastContainer } from "react-toastify";
import MainLayout from "../Layout/MainLayout";
import "react-toastify/dist/ReactToastify.css";

import Loading from "../components/loader/Loading";

function App() {
  return (
    <>
      {navigation.state === "loading" && <Loading />}
      <MainLayout />
      <ToastContainer />
    </>
  );
}

export default App;
