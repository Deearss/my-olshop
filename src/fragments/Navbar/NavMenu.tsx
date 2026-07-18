import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavMenu() {
  const location = useLocation();

  return (
    <>
      <div className="w-full h-full gap-3 py-3 flexc">
        {[
          { text: "Dashboard", url: "/admin" },
          { text: "Storage", url: "/admin/storage" }, // Ganti URL sesuai kebutuhan
          { text: "Orders", url: "/admin/orders" }, // Ganti URL sesuai kebutuhan
        ].map((value, index) => (
          <React.Fragment key={`navmenu-${index}`}>
            <Link
              className={`w-[10rem] h-full flexc transall hover:text-black active:scale-90 text-gray-500 hover:font-semibold ${
                location.pathname === value.url
                  ? "text-black font-semibold"
                  : ""
              }`}
              to={value.url}
            >
              {value.text}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default NavMenu;
