import { useState } from "react";
// import { Button } from "@material-tailwind/react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import SocialLogin from "../../../components/SocialLogin";
import { NavLink, useNavigate } from "react-router-dom";
import {
  loginInWithFacebook,
  loginWithEmailAndPassword,
  loginWithGithub,
  loginWithGoogle,
} from "../../../firebase/firebase";
import { toast, ToastContainer } from "react-toastify";

export default function Signin() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmailAndPassword(email, password);
      toast.success("Logged in successfully!", {
        onClose: () => navigate("/"),
        toastId: "success1",
      });
    } catch (error) {
      toast.error("An error occurred during login", error.message);
    }
  };
  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
      toast.success(`Log In Successfully with Google`, {
        onClose: () => navigate("/"),
      });
    } catch (error) {
      toast.error("An error occurred during login", error);
    }
  };

  const handleLoginWithGithub = async () => {
    try {
      await loginWithGithub();
      toast.success(`Log In Successfully with Github`, {
        onClose: () => navigate("/"),
      });
    } catch (error) {
      toast.error("An error occurred during login", error);
    }
  };

  const handleLoginWithFacebook = async () => {
    await loginInWithFacebook();
    toast.success(`Log In Successfully with Facebook`, {
      onClose: () => navigate("/"),
    });
  };

  return (
    <section className="grid text-center min-h-screen items-center p-8  bg-teal-50">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={true}
        theme="colored"
      />
      <NavLink to={"/"}>
        <Button className="float-left w-fit hover:bg-cyan-500" color="blue">
          Back To Home
        </Button>
      </NavLink>
      <div>
        <Typography variant="h3" color="blue" className="">
          Sign In
        </Typography>
        <span className="h-1 w-28 bg-black block mx-auto mb-4"></span>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-[24rem] text-left"
        >
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
            <Input
              required
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              required
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
          </div>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            variant="small"
            className="font-medium float-right mb-2 -mt-4"
          >
            Forgot password
          </Typography>
          <Button
            type="submit"
            color="gray"
            size="lg"
            className="mt-6"
            fullWidth
          >
            sign in
          </Button>
          <div className="!mt-4 flex justify-end"></div>
          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal"
          >
            Not registered?{" "}
            <NavLink to={"/signup"} className="font-bold text-gray-900">
              Create account
            </NavLink>
          </Typography>
          <SocialLogin
            onloginWithGoogle={handleLoginWithGoogle}
            onloginWithGithub={handleLoginWithGithub}
            onloginWitFacebook={handleLoginWithFacebook}
          />
        </form>
      </div>
    </section>
  );
}
