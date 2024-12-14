import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { NavLink } from "react-router-dom";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className=" mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "flex items-center"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive && "text-blue-600 font-semibold"
          }
        >
          Products
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive && "text-blue-600 font-semibold"
          }
        >
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive && "text-blue-600 font-semibold"
          }
        >
          Contact
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className=" max-h-[768px] w-[calc(100%+10px)] sticky top-0 z-50">
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
                <NavLink
                  to={"/signup"}
                  className="absolute inset-0 w-1/2 bg-blue-500 text-white flex items-center justify-center"
                >
                  SignUp
                </NavLink>
                <NavLink
                  to={"/signin"}
                  className="absolute inset-0 left-1/2 w-1/2 bg-primary-c font-bold text-white flex items-center justify-center"
                >
                  Login
                </NavLink>
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

          {/* sign out button on user conditioin */}
          {user ? (
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign out</span>
            </Button>
          ) : (
            <div className="flex items-center gap-x-1 ">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </div>
          )}
        </MobileNav>
      </Navbar>
    </div>
  );
}
