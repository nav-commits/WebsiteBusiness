import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;       
  bgColor?: string;         
};

export const Card = ({ children, className = "", bgColor = "bg-white" }: CardProps) => {
  return (
    <div
      className={`${bgColor} flex flex-col rounded-2xl shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};
