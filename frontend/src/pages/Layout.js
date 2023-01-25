import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = (props) => {
  return <>
  <div>
    <Navbar />
    {props.children}
    <CssBaseline />
    <Outlet />
    </div>
    
  </>;
};

export default Layout;



