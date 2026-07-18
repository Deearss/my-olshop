import { useEffect, useState } from "react";
import Nav from "./Nav";
import LoadingScreen from "../LoadingScreen";
import { fetchOrders } from "../../services/api";
import { Order } from "../../data/fakeOrders";
import OrderList from "./OrderList";

function Orders() {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    // Simulasi pengambilan data
    fetchOrders().then((fakeOrders: Array<Order> | unknown): void => {
      setOrders(fakeOrders as Array<Order>);
      setIsLoading(false);
    });
  }, []);

  let haveOrders = orders.length > 0;

  return (
    <>
      {isLoading && <LoadingScreen />}

      <Nav />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 max-w-[95rem] m-auto">
        {haveOrders && <OrderList orders={orders} />}
      </div>
    </>
  );
}

export default Orders;
