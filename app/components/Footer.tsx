import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-blue py-10">
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/images/clarity-dark-400.png"
          alt="Clarity Health Benefits"
          width={400}
          height={100}
          className="h-auto w-36"
          unoptimized
        />
        <p className="text-sm text-gray-400">
          © 2026 Clarity Health Benefits. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">Confidential</p>
      </div>
    </footer>
  );
}
