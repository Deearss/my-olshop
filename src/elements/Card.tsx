import { FC, ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <>
      <div
        className={`overflow-hidden bg-white rounded-lg shadow shadow-gray-400 border border-gray-300 ${className}`}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
