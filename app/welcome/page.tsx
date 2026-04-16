import Link from "next/link";
import { Button } from "@finity/design-system";

function FinityLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2L4 11H10L9 18L16 9H10L11 2Z" fill="white" />
      </svg>
      <span className="text-white font-semibold text-lg tracking-tight">Finity</span>
    </div>
  );
}

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="w-[280px] shrink-0 bg-[#111] flex flex-col justify-between p-8">
        <FinityLogo />
        <p className="text-[#555] text-sm font-medium">Worker portal</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center bg-white px-8">
        <div className="w-full max-w-[400px] flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-[1.75rem] font-semibold text-[var(--color-grey-900)] leading-tight">
              Welcome to Finity Worker Portal Sebastian
              <span className="ml-2">👋</span>
            </h1>
            <p className="text-[var(--color-text-secondary)] text-base">
              Access your payslips, timesheets, and everything for your employment in one place!
            </p>
          </div>

          <Link href="/create-account">
            <Button variant="primary" size="medium" className="w-full">
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
