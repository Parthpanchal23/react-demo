import Navbar from "./component/navbar.tsx";
import { Outlet } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider.tsx";

const Layout = () => {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Outlet />
      </UserContextProvider>
    </>
  );
};

export default Layout;
