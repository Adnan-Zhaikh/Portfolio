"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail (older browsers, non-HTTPS/local contexts).
      // The mailto button next to this still works either way.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-[#2A2D4A] bg-[#1B1E38] px-4 py-2.5 font-mono text-xs text-[#A6A9C4] transition-colors hover:border-[#4FD1B3] hover:text-[#ECEEF5]"
    >
      {copied ? (
        <>
          <Check size={14} strokeWidth={2} className="text-[#4FD1B3]" />
          Copied
        </>
      ) : (
        <>
          <Copy size={14} strokeWidth={1.75} />
          Copy email
        </>
      )}
    </button>
  );
}