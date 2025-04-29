import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "4rem" }}>
        <Outlet /> {/* This renders the child routes */}
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
