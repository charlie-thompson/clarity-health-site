import Image from "next/image";
import type { CSSProperties } from "react";

export default function LogoDark({
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
      src="/images/clarity-dark-1600.png"
      alt="Clarity Health Benefits"
      width={1600}
      height={400}
      className={className}
      style={style}
      priority={priority}
      unoptimized
    />
  );
}
