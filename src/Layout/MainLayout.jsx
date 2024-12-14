import { Outlet } from "react-router";
import { FooterWithSitemap } from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <FooterWithSitemap />
    </>
  );
};

export default MainLayout;
