"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  TextField,
  Checkbox,
  HelperText,
  PinCodeField,
} from "@finity/design-system";

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

function PasswordRequirement({ met, label }: { met: boolean; label: string }) {
  return (
    <span className={`flex items-center gap-1 text-xs ${met ? "text-[var(--color-grey-700)]" : "text-[var(--color-grey-400)]"}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${met ? "bg-[var(--color-grey-700)]" : "bg-[var(--color-grey-300)]"}`} />
      {label}
    </span>
  );
}

function NeedHelp() {
  return (
    <p className="text-sm text-[var(--color-text-tertiary)]">
      Need help?{" "}
      <a href="#" className="text-[var(--color-grey-900)] underline underline-offset-2">
        Get in touch
      </a>
    </p>
  );
}

export default function CreateAccountPage() {
  const router = useRouter();
  const [useOwnUsername, setUseOwnUsername] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [enable2FA, setEnable2FA] = useState(false);
  const [pinCode, setPinCode] = useState("");

  const has8Chars = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);

  function handleSubmit() {
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="w-[280px] shrink-0 bg-[#111] flex flex-col justify-between p-8">
        <FinityLogo />
        <p className="text-[#555] text-sm font-medium">Worker portal</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-[400px] flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold text-[var(--color-grey-900)]">Create an account</h1>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Create a strong password using letters, numbers, and symbols.
            </p>
          </div>

          {/* Username */}
          <div className="flex flex-col gap-3">
            <TextField
              label="Username"
              value={useOwnUsername ? username : "sebastian@bizcompass.com"}
              onChange={(e) => setUsername(e.target.value)}
              readOnly={!useOwnUsername}
              size="medium"
            />
            <Checkbox
              checked={useOwnUsername}
              onChange={(e) => {
                setUseOwnUsername(e.target.checked);
                setUsername("");
              }}
              label="Set my own username"
            />
            {useOwnUsername && (
              <TextField
                label="Enter your own username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size="medium"
                placeholder="Enter username"
              />
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <TextField
              label="Create password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="medium"
            />
            <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
              <PasswordRequirement met={has8Chars} label="8 characters minimum" />
              <PasswordRequirement met={hasNumber} label="1 number" />
              <PasswordRequirement met={hasUppercase} label="1 uppercase" />
              <PasswordRequirement met={hasSpecial} label="1 special character" />
            </div>
          </div>

          {/* Confirm password */}
          <TextField
            label="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            size="medium"
          />

          {/* 2FA toggle */}
          <div className="flex flex-col gap-3 border border-[var(--color-grey-200)] rounded-xl p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-[var(--color-grey-900)]">
                  Enable two-factor authentication (Optional)
                </p>
                <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
                  Two-factor authentication (2FA) adds an extra layer of security. Once enabled,
                  you'll be required to provide an additional form of security verification when
                  logging into the portal.
                </p>
              </div>
              {/* Toggle */}
              <button
                role="switch"
                aria-checked={enable2FA}
                onClick={() => setEnable2FA(!enable2FA)}
                className={`relative shrink-0 w-10 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                  enable2FA ? "bg-[var(--color-grey-900)]" : "bg-[var(--color-grey-300)]"
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                    enable2FA ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {enable2FA && (
              <div className="flex flex-col gap-5 pt-2 border-t border-[var(--color-grey-100)]">
                {/* Step 1 */}
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-[var(--color-grey-900)]">
                    Step 1: Scan the QR code
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Open your authenticator app and scan the QR code below.
                  </p>
                  {/* Placeholder QR code */}
                  <div className="w-[100px] h-[100px] bg-[var(--color-grey-100)] rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 80 80" width="80" height="80" className="opacity-40">
                      <rect x="5" y="5" width="30" height="30" fill="none" stroke="#000" strokeWidth="4" />
                      <rect x="12" y="12" width="16" height="16" fill="#000" />
                      <rect x="45" y="5" width="30" height="30" fill="none" stroke="#000" strokeWidth="4" />
                      <rect x="52" y="12" width="16" height="16" fill="#000" />
                      <rect x="5" y="45" width="30" height="30" fill="none" stroke="#000" strokeWidth="4" />
                      <rect x="12" y="52" width="16" height="16" fill="#000" />
                      <rect x="45" y="45" width="8" height="8" fill="#000" />
                      <rect x="57" y="45" width="8" height="8" fill="#000" />
                      <rect x="45" y="57" width="8" height="8" fill="#000" />
                      <rect x="57" y="57" width="8" height="8" fill="#000" />
                      <rect x="69" y="57" width="8" height="8" fill="#000" />
                    </svg>
                  </div>
                  <p className="text-xs text-[var(--color-text-tertiary)]">
                    Can&apos;t scan QR code?{" "}
                    <a href="#" className="text-[var(--color-grey-900)] underline underline-offset-2">
                      Enter this secret key instead
                    </a>
                  </p>
                  <button className="text-xs text-left text-[var(--color-grey-900)] underline underline-offset-2">
                    Copy code
                  </button>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-[var(--color-grey-900)]">
                    Step 2: Verify the code
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Enter the 6-digit verification code generated from your app.
                  </p>
                  <PinCodeField
                    length={6}
                    value={pinCode}
                    onChange={setPinCode}
                    size="medium"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-3">
            <Button variant="primary" size="medium" className="w-full" onClick={handleSubmit}>
              Create account
            </Button>
            <p className="text-xs text-center text-[var(--color-text-tertiary)]">
              By proceeding, you agree to the{" "}
              <a href="#" className="underline underline-offset-2 text-[var(--color-grey-700)]">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="underline underline-offset-2 text-[var(--color-grey-700)]">
                Privacy Policy
              </a>
            </p>
          </div>

          <NeedHelp />
        </div>
      </div>
    </div>
  );
}
