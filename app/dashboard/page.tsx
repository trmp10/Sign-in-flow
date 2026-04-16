"use client";

import { useEffect, useState } from "react";
import { Button } from "@finity/design-system";
import { CheckCircle, Close } from "@finity/design-system";

function FinityLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2L4 11H10L9 18L16 9H10L11 2Z" fill="#111" />
      </svg>
      <span className="text-[var(--color-grey-900)] font-semibold text-lg tracking-tight">Finity</span>
    </div>
  );
}

export default function DashboardPage() {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowToast(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg-subtle)]">
      {/* Top nav */}
      <header className="bg-white border-b border-[var(--color-grey-200)] px-8 h-14 flex items-center">
        <FinityLogo />
      </header>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-5 right-5 flex items-center gap-3 bg-white border border-[var(--color-grey-200)] rounded-xl shadow-lg px-4 py-3 z-50">
          <CheckCircle size={18} color="var(--color-grey-900)" />
          <span className="text-sm font-medium text-[var(--color-grey-900)]">
            Account created successfully
          </span>
          <button
            onClick={() => setShowToast(false)}
            className="ml-1 text-[var(--color-grey-400)] hover:text-[var(--color-grey-700)]"
          >
            <Close size={16} />
          </button>
        </div>
      )}

      {/* Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-56px)]">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-[var(--color-grey-900)]">Dashboard</h1>
          <p className="text-[var(--color-text-secondary)]">Your account has been set up successfully.</p>
        </div>
      </main>

      {/* Footer */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
        <p className="text-xs text-[var(--color-text-tertiary)]">
          Need help?{" "}
          <a href="#" className="text-[var(--color-grey-900)] underline underline-offset-2">
            Get in touch
          </a>
        </p>
      </div>
    </div>
  );
}
