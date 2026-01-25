import { Link, NavLink } from "react-router";
import MyContainer from "./MyContainer";
import logo from "/public/cat-coffee-logo.png";
import MyLink from "./MyLink";
import { use, useEffect, useState } from "react";
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

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [color, setColor] = useState(theme === "dark" ? "#ffff" : "#00224D");

  // Persist theme and update DOM attributes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);

    if (theme === "dark") {
      setColor("#ffff");
    } else {
      setColor("#00224D");
    }
  }, [theme]);

  // Handle the toggle change
  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className={`bg-[#eee] ${theme === 'dark' && 'dark:bg-[#313b47]'} shadow-lg`}>
      <div className="bg-slate-100 py-2 border-b border-b-slate-300 ">
        <MyContainer className="flex items-center justify-between">
          <figure>
            <img
              src={logo}
              className="w-10 md:w-[55px] lg:w-[60px] transition-all duration-300"
            />
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
            <li>
              <MyLink to={"/tabular-service"}>Tabular Service</MyLink>
            </li>
            {user && (
              <li>
                <MyLink to={"/profile"}>My Profile</MyLink>
              </li>
            )}
          </ul>

          <div className="md:pl-8 md:block hidden">
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={handleThemeToggle}
                checked={theme === "dark"}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              {/* Sun Icon (Visible in Light Mode) */}
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              {/* Moon Icon (Visible in Dark Mode) */}
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

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
                    <h2 className="text-sm font-semibold">
                      {user?.displayName}
                    </h2>
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
    </nav>
  );
};

export default Navbar;
