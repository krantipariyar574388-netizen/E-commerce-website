import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Input from "../ShareableComponents/Input";
// Image path tapaiko project anusar milauunuhos
import registerImg from "../../assets/image1.webp"; 

const Register = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[80vh] items-center gap-10 lg:gap-20 py-10 lg:py-20">
      
      {/* LEFT SIDE - IMAGE SECTION */}
      <div className="w-full lg:w-1/2 bg-[#CBE4E8] flex justify-center items-center rounded-r-lg overflow-hidden">
        <img 
          src={registerImg} 
          alt="Register Illustration" 
          className="w-full max-w-[600px] object-cover"
        />
      </div>

      {/* RIGHT SIDE - REGISTER FORM */}
      <div className="w-full lg:w-1/3 px-6 lg:px-0">
        <div className="max-w-sm space-y-8">
          <header className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground">
              Create an account
            </h1>
            <p className="text-base text-muted-foreground">
              Enter your details below
            </p>
          </header>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-5">
              <Input 
                type="text" 
                placeholder="Name" 
                className="border-0 border-b border-muted-foreground/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all text-foreground bg-transparent"
              />
              <Input 
                type="text" 
                placeholder="Email or Phone Number" 
                className="border-0 border-b border-muted-foreground/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all text-foreground bg-transparent"
              />
              <Input 
                type="password" 
                placeholder="Password" 
                className="border-0 border-b border-muted-foreground/40 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all text-foreground bg-transparent"
              />
            </div>

            <div className="space-y-4 pt-4">
              <Button 
                type="submit"
                className="w-full bg-[#DB4444] hover:bg-[#c13a3a] text-white py-6 rounded-md font-medium transition-colors"
              >
                Create Account
              </Button>
              
              <Button 
                variant="outline"
                className="w-full py-6 flex items-center justify-center gap-3 border-border hover:bg-muted"
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                Sign up with Google
              </Button>
            </div>
          </form>
          
          <p className="text-center text-sm text-muted-foreground pt-2">
            Already have account?{" "}
            <Link to="/login" className="text-foreground font-medium hover:underline underline-offset-4 decoration-muted-foreground/50">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;