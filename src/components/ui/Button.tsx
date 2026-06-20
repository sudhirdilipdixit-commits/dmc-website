import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const variants = {
  primary:
    "bg-saffron text-navy shadow-saffron hover:bg-[#d8830a] hover:-translate-y-px hover:shadow-saffron-lg",
  secondary:
    "bg-transparent text-navy border border-[1.5px] border-navy hover:bg-navy hover:text-white",
  ghost: "bg-transparent text-navy hover:text-saffron px-4",
};

const base =
  "inline-flex items-center justify-center gap-2 font-body font-semibold text-[15px] px-6 py-3.5 rounded-lg leading-none whitespace-nowrap transition-all duration-150 cursor-pointer";

export function Button({
  variant = "primary",
  href,
  arrow = false,
  children,
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <span className="transition-transform group-hover:translate-x-1">→</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${classes} group`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${classes} group disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {content}
    </button>
  );
}
