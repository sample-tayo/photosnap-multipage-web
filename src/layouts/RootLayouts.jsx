import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function rootlayouts() {
  const logoSrc = "./assets/logo.svg";

  return (
    <div>
      <Navbar logoSrc={logoSrc} />
      <Outlet />
      <Footer logoSrc={logoSrc} />
    </div>
  );
}

export default rootlayouts;
