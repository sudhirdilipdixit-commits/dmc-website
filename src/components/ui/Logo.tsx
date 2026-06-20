import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "primary" | "reverse";
  className?: string;
}

export function Logo({ variant = "primary", className = "" }: LogoProps) {
  const src =
    variant === "reverse" ? "/logo-reverse.png" : "/logo-primary.png";

  return (
    <Link href="/" aria-label="Distance MBA College home" className={className}>
      <Image
        src={src}
        alt="Distance MBA College"
        width={220}
        height={52}
        className="h-11 w-auto"
        priority={variant === "primary"}
      />
    </Link>
  );
}
