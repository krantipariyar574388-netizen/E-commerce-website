import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Input from "../ShareableComponents/Input";
import loginImage from "../../assets/image1.webp";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[80vh] items-center gap-10 lg:gap-20 py-10 lg:py-20">
      
      {/* LEFT SIDE - IMAGE SECTION */}
      <div className="w-full lg:w-1/2 bg-[#CBE4E8] flex justify-center items-center rounded-r-lg overflow-hidden">
        {/* Replace with your actual image path */}
        <img 
         src={loginImage}
          alt="Login Illustration" 
          className="w-full max-w-150 object-cover"
        />
      </div>

      {/* RIGHT SIDE - LOGIN FORM */}
      <div className="w-full lg:w-1/3 px-6 lg:px-0">
        <div className="max-w-sm space-y-8">
          <header className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground">
              Log in to Exclusive
            </h1>
            <p className="text-base text-muted-foreground">
              Enter your details below
            </p>
          </header>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-5">
              <Input 
                type="text" 
                placeholder="Email or Phone Number" 
                className="border-0 border-b border-muted-foreground/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all text-foreground"
              />
              <Input 
                type="password" 
                placeholder="Password" 
                className="border-0 border-b border-muted-foreground/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all text-foreground"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-4">
              <Button 
                type="submit"
                className="bg-[#DB4444] hover:bg-[#c13a3a] text-white px-12 py-6 rounded-md font-medium transition-colors"
              >
                Log In
              </Button>
              
              <Link 
                to="/forgot-password" 
                className="text-[#DB4444] text-sm hover:underline transition-all underline-offset-4"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
          
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;