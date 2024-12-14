import { CarouselDefault } from "../carousel";
import { StickyNavbar } from "./Navbar";
import { useLocation } from "react-router-dom";
const Header = () => {
  const routelocation = useLocation();

  return (
    <div className="bg-gradient-to-b from-blue-500 ">
      <StickyNavbar />
      {routelocation.pathname === "/" && <CarouselDefault />}
    </div>
  );
};

export default Header;
