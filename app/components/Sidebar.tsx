import Link from "next/link";
import FinityLogo from "./FinityLogo";

export default function Sidebar() {
  return (
    <aside className="w-60 shrink-0 bg-black flex flex-col justify-between p-8 min-h-screen">
      <FinityLogo color="white" />
      <div className="flex flex-col gap-3">
        <p className="text-white font-semibold text-xl">Worker portal</p>
        <p className="text-sm text-[#555]">
          Need help?{" "}
          <Link href="#" className="text-[#FF885D] hover:underline">
            Get in touch
          </Link>
        </p>
      </div>
    </aside>
  );
}
