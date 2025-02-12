const Listdata = [
  {
    href: "/",
    name: "Home",
  },
  // {
  //   href: "/password",
  //   name: "Password generator",
  // },
  {
    href: "/currency",
    name: "Currency convertor",
  },
  {
    href: "/contact",
    name: "Contact us",
  },
];

import {  useContext, useState, useTransition } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { UserType } from "../context/UserContextProvider";

interface  NavContextType {
  user:UserType;
  setUser:(user:UserType)=>void;
}
interface listType {
  href:string;
  name:string;
}

export default function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext) as NavContextType;
  const [isMobile,setIsMobile] = useState<boolean>(false);
  const [_,startTransition]=useTransition();

  const toggleVisibility = () => {
    startTransition(()=>{
      setIsMobile(!isMobile);
    })
  }

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="flex items-center">
            <h1 className="">LOGO</h1>
            {/* <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            /> */}
          </NavLink>
          <button  className="sm:flex  md:hidden lg:hidden xl:hidden border p-2 rounded-md"  onClick={toggleVisibility}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-2 rounded bg-gray-200"></div>
            </div>
          </button>
          <div className="flex items-center lg:order-2">
            {!user || user?.username == "" ? (
              <NavLink
                to="/login"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </NavLink>
            ) : (
              <div className="flex  flex-col text-center">
                <button
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  onClick={() => {
                    setUser({ username: "", password: "" });
                    navigate("./login");
                  }}
                >
                  logout
                </button>
              </div>
            )}
          </div>
          
          {isMobile && 
          <div
            className="transition-all transition-discrete delay-700 justify-between items-center w-full sm:flex  md:hidden lg:hidden xl:hidden"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium sm:flex-row lg:flex-row lg:space-x-8 lg:mt-0 ">
              {Listdata.map((item:listType, i:number) => (
                <li key={i}>
                  <NavLink
                    to={item?.href ?? "/"}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    onClick={toggleVisibility}
                  >
                    {item?.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>}
              {user&& user?.username !="" &&
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium sm:flex-row lg:flex-row lg:space-x-8 lg:mt-0 ">
              {Listdata.map((item:listType, i:number) => (
                <li key={i} >
                  <NavLink
                    to={item?.href ?? "/"}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    {item?.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>}
        </div>
      </nav>
    </header>
  );
}
