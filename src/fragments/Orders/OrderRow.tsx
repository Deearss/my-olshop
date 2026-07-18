import { FC } from "react";
import { ReactNode } from "react";

interface OrderRowProps {
  children?: ReactNode;
  className?: string;
  label: ReactNode;
  value: ReactNode;
}

const OrderRow: FC<OrderRowProps> = ({ label, value }) => {
  return (
    <>
      <div className="flexc !justify-start text-gray-600 my-1.5">
        <span className="w-[8rem] flexc !justify-start">{label}</span>
        <span className="flexc w-[2rem]">:</span>
        <span className="min-w-[5rem]">{value}</span>
      </div>
    </>
  );
};

export default OrderRow;
