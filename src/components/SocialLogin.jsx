/* eslint-disable react/prop-types */
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Typography, Button } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";

export default function SocialLogin({onloginWithGoogle, onloginWithGithub, onloginWithFacebook}) {
  const location = useLocation();
  return (
    <div className="w-96">
      <div className="my-2 flex items-center gap-2">
        <span className="h-[1px] w-1/2 bg-black" />
        <Typography variant="small" color="blue-gray">
          Or
        </Typography>
        <span className="h-[1px] w-1/2 bg-black" />
      </div>
      <div className="flex flex-col gap-2">
        <Button
        onClick={onloginWithGoogle}
          variant="filled"
          color="red"
          className="flex w-full items-center justify-center gap-2"
        >
          <FaGoogle size={20} />
          <span>
            {location.pathname === "/signup" ? "continue" : "sign in"}
          </span>{" "}
          with Google
        </Button>

        <Button
        onClick={onloginWithGithub}
          variant="filled"
          color="light-blue"
          className="flex w-full items-center justify-center gap-2 tracking-wider"
        >
          <FaGithub size={20} />
          <span>
            {location.pathname === "/signup" ? "continue" : "sign in"}
          </span>{" "}
          with github
        </Button>

        <Button
        onClick={onloginWithFacebook}
          variant="filled"
          className="flex w-full items-center justify-center gap-2 tracking-wider bg-blue-800"
        >
          <FaFacebook size={20} />
          <span>
            {location.pathname === "/signup" ? "continue" : "sign in"}
          </span>{" "}
          with facebook
        </Button>
      </div>
    </div>
  );
}
