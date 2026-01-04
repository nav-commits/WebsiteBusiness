import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;       
  bgColor?: string;         
};

export const Card = ({ children, className = "", bgColor = "bg-white" }: CardProps) => {
  return (
    <div
      className={`${bgColor} rounded-xl shadow-md flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};
