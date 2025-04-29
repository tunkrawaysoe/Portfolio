import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "4rem" }}>
        <Outlet /> {/* This renders the child routes */}
      </div>
    </>
  );
};

export default Layout;
