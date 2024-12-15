import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import SocialLogin from "../../../components/SocialLogin";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import {
  loginInWithFacebook,
  loginWithGithub,
  loginWithGoogle,
  registerWithEmailAndPassword,
} from "../../../firebase/firebase";
import { toast, ToastContainer } from "react-toastify";

export default function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerWithEmailAndPassword(name, email, password);
      toast.success(
        "Signed up successfully, Please verify your email before logging in.",
        {
          onClose: () => navigate("/signin"),
          toastId: "success2",
        }
      );
    } catch (error) {
      toast.error(`An error occurred during signup: ${error.message}`);
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
    <>
      <NavLink to={"/"}>
        <Button
          className="float-left w-fit hover:bg-cyan-500 ml-8 mt-2"
          color="blue"
        >
          Back To Home
        </Button>
      </NavLink>
      <Card
        color="transparent"
        className="bg-teal-50 px-10 w-fit mx-auto my-5 pb-5"
        shadow={true}
      >
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={true}
          theme="colored"
        />
        <Typography
          variant="h4"
          color="blue-gray"
          className="mt-1 text-center border-b-black border-b-2 p-2"
        >
          Sign Up
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
        >
          <div className="mb-1 flex flex-col gap-2">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              onChange={(e) => setName(e.target.value)}
              size="md"
              placeholder="your_name"
              className=" !border-t-blue-gray-400 bg-cyan-300 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              size="md"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200  bg-cyan-300 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              size="md"
              placeholder="********"
              color="black"
              labelProps={{
                className: "hidden",
              }}
              className=" !border-t-blue-gray-200  bg-cyan-300 focus:!border-t-gray-900"
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
          <Checkbox
            label={
              <Typography
                variant="small"
                color="black"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <NavLink to={"/signin"} className="font-bold text-blue-900">
              Sign In
            </NavLink>
          </Typography>
        </form>
        <SocialLogin
          onloginWithGoogle={handleLoginWithGoogle}
          onloginWithGithub={handleLoginWithGithub}
          onloginWitFacebook={handleLoginWithFacebook}
        />
      </Card>
    </>
  );
}
