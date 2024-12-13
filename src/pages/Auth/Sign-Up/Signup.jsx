import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <Card
      color="transparent"
      className="bg-teal-50 px-10 w-fit mx-auto my-5"
      shadow={true}
    >
      <Typography variant="h4" color="blue-gray" className="mt-1 text-center border-b-black border-b-2 p-2">
        Sign Up
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="md"
            placeholder="your_name"
            className=" !border-t-blue-gray-400 bg-cyan-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="md"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200  bg-cyan-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="md"
            placeholder="********"
            className=" !border-t-blue-gray-200  bg-cyan-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
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
        <Button className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <NavLink to={"/signin"} className="font-bold text-blue-900">
            Sign In
          </NavLink>
        </Typography>
      </form>
    </Card>
  );
}
