import { ButtonHTMLAttributes } from "react";
import { cn } from "@lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export const Button = ({ active, className, children, ...props }: ButtonProps) => {
  const buttonClass = cn(
    "flex h-8 items-center rounded-lg px-5 font-medium whitespace-nowrap outline-none",
    active
      ? ["bg-yellow-600/60", "text-amber-50", "shadow"]
      : [
          "hover:text-amber-100/60",
          "focus:text-yellow-600/50",
          "focus:ring-2",
          "focus:ring-yellow-600/50",
          "focus:ring-inset",
        ],
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
