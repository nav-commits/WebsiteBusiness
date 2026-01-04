import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type ButtonProps = {
  to?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  arrow?: boolean;
  className?: string;
};

export const Button = ({
  to,
  href,
  type = "button",
  disabled = false,
  children,
  variant = "primary",
  arrow = false,
  className,
}: ButtonProps) => {
  const base = "inline-flex items-center font-semibold transition rounded-lg justify-center";

  const variants = {
    primary: "bg-white text-[#5e17eb] hover:bg-indigo-50",
    secondary: "bg-[#5e17eb] text-white hover:bg-indigo-700",
    outline: "border border-white/40 hover:bg-white/10 text-white",
  };

  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </>
  );

  const classes = clsx(
    base,
    variants[variant],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (to)
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );

  return (
    <button type={type} disabled={disabled} className={classes}>
      {content}
    </button>
  );
};
