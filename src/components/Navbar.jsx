import { Link, NavLink } from "react-router";
import MyContainer from "./MyContainer";
import logo from "/public/cat-coffee-logo.png";
import MyLink from "./MyLink";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";



const Navbar = () => {
  const { user, setUser, signOutUserFunc, loading, setLoading } =
    use(AuthContext); 

  const handleSignout = () => {
    signOutUserFunc()
      .then(() => {
        toast.success("Signout Successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="bg-slate-100 py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-10 md:w-[55px] lg:w-[60px] transition-all duration-300" />
        </figure>
        <ul className="hidden md:flex items-center gap-4 lg:gap-6">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/services"}>Services</MyLink>
          </li>
          <li>
            <MyLink to={"/add-service"}>Add Services</MyLink>
          </li>
          {user && (
            <li>
              <MyLink to={"/profile"}>My Profile</MyLink>
            </li>
          )}
        </ul>

        {loading ? (
          <FadeLoader height={10} width={5} margin={2} />
        ) : user ? (
          <div className="flex items-center gap-4">
            {/* User Profile Hover Trigger */}
            <div className="relative group">
              <div className="cursor-pointer">
                <img
                  src={user?.photoURL || "https://via.placeholder.com/88"}
                  className="h-10 w-10 rounded-full"
                  alt="User avatar"
                />
              </div>

              {/* Popover Content */}
              <div className="absolute left-0 top-full mt-2 w-52 rounded-box bg-base-100 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 flex flex-col items-center">
                  <img
                    src={user?.photoURL || "https://via.placeholder.com/88"}
                    className="h-15 w-15 rounded-full mx-auto mb-3"
                    alt=""
                  />
                  <h2 className="text-sm font-semibold">{user?.displayName}</h2>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
              </div>
            </div>

            {/* Signout Button */}
            <button
              onClick={handleSignout}
              className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              Log Out
            </button>
          </div>
        ) : (
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            <Link to={"/signin"}>Sign in</Link>
          </button>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
