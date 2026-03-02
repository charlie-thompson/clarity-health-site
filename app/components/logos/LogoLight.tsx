import Image from "next/image";
import type { CSSProperties } from "react";

export default function LogoLight({
  className,
  style,
  priority,
}: {
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/clarity-light-400.png"
      alt="Clarity Health Benefits"
      width={400}
      height={100}
      className={className}
      style={style}
      priority={priority}
      unoptimized
    />
  );
}
