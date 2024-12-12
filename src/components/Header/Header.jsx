import { CarouselDefault } from "../carousel";
import { StickyNavbar } from "./Navbar";

const Header = () => {
  return (
    <div>
      <StickyNavbar />
      <CarouselDefault />
    </div>
  );
};

export default Header;
