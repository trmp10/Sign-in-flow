import Image from "next/image";
import Link from "next/link";
import { Button } from "@finity/design-system";

export default function InvitePage() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] flex items-center justify-center p-8">
      <div className="w-full max-w-[480px] flex flex-col gap-6">
        {/* Email screenshot */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          <Image
            src="/invite-email.png"
            alt="You've been invited to join Finity Worker Portal"
            width={480}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* CTA button */}
        <Link href="/welcome" className="w-full">
          <Button variant="primary" size="medium" className="w-full">
            Activate my account
          </Button>
        </Link>
      </div>
    </div>
  );
}
