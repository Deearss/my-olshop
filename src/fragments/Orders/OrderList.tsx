import { Button } from "@mui/material";
import { FC, Fragment } from "react";
import OrderRow from "./OrderRow";
import { Order } from "../../data/fakeOrders";
import Card from "../../elements/Card";
import { toCurrency } from "../../utils/toCurrency";

interface OrderListProps {
  orders: Array<Order>;
}

const OrderList: FC<OrderListProps> = ({ orders }) => {
  return (
    <>
      {orders.map(
        (
          {
            customer,
            orderDate,
            orderId,
            orderStatus,
            paymentMethod,
            shippingMethod,
            totalPrice,
          },
          index
        ) => {
          return (
            <Fragment key={`${index}-orders-${customer.id}`}>
              <Card className="shadow shadow-gray-300">
                <div className="p-5 w-[30rem]">
                  {/*  */}

                  {/* ORDER ID */}
                  <OrderRow
                    label={<span className={`font-bold`}>order id</span>}
                    value={<span className={`font-bold`}>{orderId}</span>}
                  />

                  {/* ORDER DATE */}
                  <OrderRow label={`order date`} value={orderDate} />

                  {/* CUSTOMER NAME */}
                  <OrderRow label={`customer name`} value={customer.name} />

                  {/* ORDER STATUS */}
                  <OrderRow label={`order status`} value={orderStatus} />

                  {/* TOTAL PRICE */}
                  <OrderRow
                    label={`total price`}
                    value={toCurrency(totalPrice, "id-ID")}
                  />

                  {/* PAYMENT METHOD */}
                  <OrderRow label={`payment method`} value={paymentMethod} />

                  {/* SHIPPING METHOD */}
                  <OrderRow label={`shipping method`} value={shippingMethod} />

                  <div className="w-full mt-5 flexc !justify-end gap-3">
                    <Button
                      variant="contained"
                      color="info"
                      className="!font-semibold !font-inter !capitalize !rounded-md !transition-all !ease-in-out !duration-200 active:scale-95 !bg-teal-500"
                    >
                      Detail
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      className="!font-semibold !font-inter !capitalize !rounded-md !transition-all !ease-in-out !duration-200 active:scale-95 !bg-teal-600"
                    >
                      Accept
                    </Button>
                    <Button
                      variant="contained"
                      className="!font-semibold !font-inter !capitalize !rounded-md !transition-all !ease-in-out !duration-200 active:scale-95 !bg-teal-800"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Card>
            </Fragment>
          );
        }
      )}
    </>
  );
};

export default OrderList;
