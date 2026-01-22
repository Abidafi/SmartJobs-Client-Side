import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { useContext, useRef, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa"; 
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
  const [show, setShow] = useState(false);
  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    user,
    setUser,
  } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from || "/";
  const emailRef = useRef(null);
  const navigate = useNavigate();

  if (user) {
    return <Navigate to={from} />;
  }

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Signin Successful");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithEmailFunc()
      .then((res) => {
        setUser(res.user);
        toast.success("Signin Successful");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* LEFT SIDE: Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#005a87]">Welcome Back!</h1>
            <p className="text-gray-600 mt-2">Please sign in to your account.</p>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            <button 
              onClick={handleGoogleSignin}
              className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded hover:bg-gray-50 transition-all text-sm font-medium"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
              Log In with Google
            </button>
          </div>

          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="bg-white px-3 text-gray-500 text-sm absolute">OR</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSignin} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 focus:outline-none"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-9 text-blue-500 cursor-pointer"
              >
                {show ? <FaEye /> : <FaRegEyeSlash />}
              </span>
            </div>

            <button
              type="button"
              className="text-blue-500 text-sm hover:underline"
            >
              Forgot Password?
            </button>

            <button
              type="submit"
              className="w-full bg-[#ff5231] hover:bg-[#e64a2b] text-white font-bold py-3 rounded transition-colors text-lg"
            >
              Log In
            </button>
          </form>

          <div className="mt-6 text-center text-gray-700">
            New to FlexJobs?{" "}
            <Link to="/signup" className="text-blue-500 font-semibold hover:underline">Join now!</Link>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Image Section */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-50">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070" 
          alt="Person working on laptop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>
    </div>
  );
};

export default Signin;