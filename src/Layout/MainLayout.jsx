import { Outlet, useNavigation } from "react-router";
import { FooterWithSitemap } from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loading from "../components/loader/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";

const MainLayout = () => {
  const navigation = useNavigation();
  const [loading] = useAuthState(auth)
  return (
    <>
      <Header />
      <div>
        <div>{navigation.state === "loading" ? <Loading loading={loading}/> : <Outlet />}</div>
      </div>
      <FooterWithSitemap />
    </>
  );
};

export default MainLayout;
