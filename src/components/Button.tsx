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
    "button-premium inline-flex min-h-12 items-center justify-center gap-1 rounded-xl font-bold tracking-[-0.01em] transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200";

  const variants = {
    primary: "border border-white/70 bg-white text-[#5e17eb] shadow-[0_12px_30px_-12px_rgba(15,23,42,0.45)] hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-[0_18px_36px_-14px_rgba(15,23,42,0.5)]",
    secondary: "border border-[#5e17eb] bg-gradient-to-r from-[#5e17eb] to-indigo-600 text-white shadow-[0_14px_28px_-14px_rgba(94,23,235,0.75)] hover:-translate-y-0.5 hover:from-[#4c10c6] hover:to-indigo-700 hover:shadow-[0_18px_36px_-14px_rgba(94,23,235,0.85)]",
    outline: "border border-white/35 bg-white/5 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10",
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
