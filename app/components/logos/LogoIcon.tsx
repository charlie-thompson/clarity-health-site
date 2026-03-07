import Image from "next/image";
import type { CSSProperties } from "react";

export default function LogoIcon({
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
      src="/images/clarity-orb-icon-final.svg"
      alt="Clarity Health Benefits"
      width={100}
      height={100}
      className={className}
      style={style}
      priority={priority}
      unoptimized
    />
  );
}
