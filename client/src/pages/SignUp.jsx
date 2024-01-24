import { Button } from "@mui/material";
import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex p-3 max-w-6xl mx-auto flex-col md:flex-row md:items-center">
        <div className="flex-1">
          <Link to="/" className="  text-4xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-400 from-pink-500  rounded-lg text-white">
              Shubham
            </span>
            Blog
          </Link>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="email" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button variant="contained" type="submit">
              Sign Up
            </Button>
            <div className="flex gap-2 text-sm mt-6">
          <span>Have an account?</span>
          <Link to="/sign-in" className="text-blue-700">
            Sign In
          </Link>
        </div>
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default SignUp;
