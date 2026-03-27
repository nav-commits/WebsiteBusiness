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
  onClick?: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  >;
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
  onClick,
}: ButtonProps) => {
  const base =
    "inline-flex items-center font-semibold transition rounded-lg justify-center";

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

  // 🔗 React Router Link
  if (to)
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );

  // 🌐 External link
  if (href)
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {content}
      </a>
    );

  // 🔘 Regular button
  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
    >
      {content}
    </button>
  );
};