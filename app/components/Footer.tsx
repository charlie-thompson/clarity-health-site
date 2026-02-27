import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy py-10">
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/images/clarity_logo_white.png"
          alt="Clarity Health Benefits"
          width={160}
          height={48}
          style={{ height: "auto" }}
        />
        <p className="text-sm text-gray-400">
          © 2026 Clarity Health Benefits. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">Confidential</p>
      </div>
    </footer>
  );
}
