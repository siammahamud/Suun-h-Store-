import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Progress } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { NavLink } from "react-router-dom";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [loading] = useAuthState(auth);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    if (loading) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10; // প্রতি ধাপে ১০% বাড়ানো
        if (progress >= 100) {
          clearInterval(interval); // ১০০% হয়ে গেলে থামিয়ে দাও
          setProgressValue(100);
        } else {
          setProgressValue(progress); // প্রগ্রেস আপডেট করো
        }
      }, 300); // প্রতি ৩০০ms পর আপডেট হবে
    } else {
      setProgressValue(0); // লোডিং শেষ হলে প্রগ্রেস ০% এ রিসেট
    }
  }, [loading]);

  const navList = (
    <ul className=" mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/"} className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/products"} className="flex items-center">
          Products
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/about"} className="flex items-center">
          About
        </NavLink >
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal"
      >
         <NavLink to={"/contact"} className="flex items-center">
          Contact
        </NavLink >
      </Typography>
    </ul>
  );

  return (
    <div className=" max-h-[768px] w-[calc(100%+10px)]">
      {loading && (
        <Progress
          className="absolute top-0 -left-1"
          value={progressValue}
          size="sm"
          variant="gradient"
          color="blue"
        />
      )}

      <Navbar className="relative mb-0.5 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className=" flex items-center justify-between text-blue-gray-900">
          <div>
            <img className="w-40" src="/src/assets/logo.png" alt="" />
          </div>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {/* <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                >
                <span>Log In</span>
                </Button> */}
       

              <button className="relative w-36 h-12 overflow-hidden rounded-lg border border-gray-300">
                <NavLink to={"/signup"} className="absolute inset-0 w-1/2 bg-blue-500 text-white flex items-center justify-center">
               SignUp
                </NavLink>
                <NavLink to={"/signin"} className="absolute inset-0 left-1/2 w-1/2 bg-cyan-400 font-bold text-white flex items-center justify-center">
                  Login
                </NavLink >
              </button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
