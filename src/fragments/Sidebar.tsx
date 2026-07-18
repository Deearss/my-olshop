import {
  faCashRegister,
  faGear,
  faHouse,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AdminProps {
  children?: ReactNode;
}

const Sidebar: React.FC<AdminProps> = () => {
  return (
    <>
      <div className="border-r-gray-300 border-r shadow-md shadow-gray-400 h-screen w-52 flexc flex-col !justify-start py-10">
        <h1 className="text-lg font-bold">Store Title</h1>
        <div className="mt-5 w-full px-5 text-[0.95rem]">
          {[
            {
              text: "Dashboard",
              url: "/admin",
              icon: (
                <FontAwesomeIcon
                  className="leading-none flexc"
                  icon={faHouse}
                />
              ),
            },
            {
              text: "Storage",
              url: "/admin/storage",
              icon: (
                <FontAwesomeIcon
                  className="leading-none flexc"
                  icon={faWarehouse}
                />
              ),
            },
            {
              text: "Orders",
              url: "/admin/orders",
              icon: (
                <FontAwesomeIcon
                  className="leading-none flexc"
                  icon={faCashRegister}
                />
              ),
            },
            {
              text: "Settings",
              url: "/admin/settings",
              icon: (
                <FontAwesomeIcon className="leading-none flexc" icon={faGear} />
              ),
            },
          ].map((value) => (
            <>
              <Link
                to={value.url}
                className={`my-3 text-gray-500 flexc !justify-start text-center h-[3rem] w-full cursor-pointer active:scale-90 hover:text-black hover:font-semibold transall ${
                  location.pathname === value.url
                    ? "text-black font-semibold"
                    : ""
                }`}
              >
                <span className="text-center flexc leading-none w-[2.5rem] h-[1.2rem]">
                  {value.icon}
                </span>
                <span className="w-full h-full leading-none flexc !justify-start">
                  {value.text}
                </span>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
