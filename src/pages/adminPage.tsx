import Admin from "../layouts/Admin";

import Dashboard from "../fragments/Dashboard";
import Storage from "../fragments/Storage";
import { useLocation } from "react-router-dom";
import Settings from "../fragments/Settings";
import Orders from "../fragments/Orders";

function adminPage() {
  const location = useLocation();

  return (
    <>
      <Admin>
        {location.pathname == "/admin" && <Dashboard />}
        {location.pathname == "/admin/storage" && <Storage />}
        {location.pathname == "/admin/orders" && <Orders />}
        {location.pathname == "/admin/settings" && <Settings />}
      </Admin>
    </>
  );
}

export default adminPage;
