import type { DownloadPlatform } from "@/components/LandingPage";

export function getDownloadPlatform(): DownloadPlatform {
  if (typeof window === "undefined") {
    return "linux";
  }

  const ua = navigator.userAgent.toLowerCase();
  const platform = navigator.platform?.toLowerCase() ?? "";

  // Android must be checked before Linux
  if (ua.includes("android")) {
    return "android";
  }

  if (ua.includes("windows")) {
    return "windows";
  }

  if (
    ua.includes("macintosh") ||
    ua.includes("mac os x") ||
    platform.includes("mac")
  ) {
    return "mac";
  }

  return "linux";
}

export const downloadInfo = {
  linux: {
    href: "/download/linux",
    label: "Download for Linux",
  },
  windows: {
    href: "/download/windows",
    label: "Download for Windows",
  },
  mac: {
    href: "/download/mac",
    label: "Download for macOS",
  },
  android: {
    href: "/download/android",
    label: "Download for Android",
  },
} satisfies Record<DownloadPlatform, { href: string; label: string }>;
