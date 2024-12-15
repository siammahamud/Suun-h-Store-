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
import { InputWithButton } from "../searchBox/searchInput";

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
      ></Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            `flex items-center p-2  font-semibold ${
              isActive && "text-blue-600  underline underline-offset-4"
            }`
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
            `flex items-center p-2 font-semibold ${
              isActive && "text-blue-600   underline underline-offset-4"
            }`
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
            `flex items-center p-2 font-semibold ${
              isActive && "text-blue-600  underline underline-offset-4"
            }`
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
          <NavLink to={"/"}>
            <img className="w-40" src="/src/assets/logo.png" alt="" />
          </NavLink>
          {/* search box  */}
          <InputWithButton />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {user ? (
                <Button
                  onClick={() => auth.signOut()}
                  fullWidth
                  variant="gradient"
                  size="sm"
                  color="blue"
                  className="hidden md:block"
                >
                  <span>Sign out</span>
                </Button>
              ) : (
                <button className="relative w-32 h-8 overflow-hidden rounded-lg border border-gray-300 hidden md:block">
                  <NavLink
                    to={"/signup"}
                    className="absolute inset-0 w-1/2 bg-blue-500 text-white flex items-center justify-center h-fit py-1"
                  >
                    SignUp
                  </NavLink>
                  <NavLink
                    to={"/signin"}
                    className="h-fit py-1 absolute inset-0 left-1/2 w-1/2 bg-primary-c font-bold text-white flex items-center justify-center"
                  >
                    Login
                  </NavLink>
                </button>
              )}
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

        {/* style for mobile devices  */}
        <MobileNav open={openNav}>
          {navList}

          {/* sign out button on user condition */}
          {user ? (
            <Button
              onClick={() => auth.signOut()}
              fullWidth
              variant="gradient"
              size="sm"
              className=""
            >
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
