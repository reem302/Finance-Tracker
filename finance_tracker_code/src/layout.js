import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";

export default function Layout() {
  const location = useLocation();
  const { pathname } = location;

  // Define an array of routes where the header is not displayed
  const routesWithoutHeader = ["/login", "/register", "/"];

  // Check if the current route is in the array of routes without the header
  const isRouteWithoutHeader = routesWithoutHeader.includes(pathname);

  return (
    <div>
      {!isRouteWithoutHeader && <Header />}

      {/* Renders the child routes defined in App.js*/}
      <Outlet /> 
      <Footer />
    </div>
  );
}
