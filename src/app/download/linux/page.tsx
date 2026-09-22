import { linuxLink } from "@/utill/downloadLink";
import Link from "next/link";
const downloads = [
  {
    name: "AppImage",
    description: "Portable application for most Linux distributions.",
    label: "x86_64",
    icon: "▣",
    href: linuxLink.appimage,
  },
  {
    name: ".deb",
    description:
      "For Debian, Ubuntu, Linux Mint, and other Debian-based systems.",
    label: "x86_64 / AMD64",
    icon: "◆",
    href: linuxLink.deb,
  },
  {
    name: ".rpm",
    description: "For Fedora, openSUSE, RHEL, and other RPM-based systems.",
    label: "x86_64",
    icon: "◈",
    href: linuxLink.rpm,
  },
];
export default function LinuxDownloadPage() {
  return (
    <main className="min-h-dvh bg-[#05060a] text-white">
      {" "}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
        {" "}
        {/* Back */}{" "}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          {" "}
          <span aria-hidden="true">←</span> Back to home{" "}
        </Link>{" "}
        {/* Header */}{" "}
        <section className="mt-10 max-w-2xl sm:mt-14">
          {" "}
          <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/60">
            {" "}
            Linux{" "}
          </div>{" "}
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {" "}
            Download for Linux{" "}
          </h1>{" "}
          <p className="mt-5 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
            {" "}
            Choose the package that matches your Linux distribution and get
            started in a few seconds.{" "}
          </p>{" "}
        </section>{" "}
        {/* Downloads */}{" "}
        <section className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3">
          {" "}
          {downloads.map((download) => (
            <a
              key={download.name}
              href={download.href}
              download
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.055]"
            >
              {" "}
              <div className="flex items-start justify-between">
                {" "}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-sm text-white/70">
                  {" "}
                  {download.icon}{" "}
                </div>{" "}
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white/40">
                  {" "}
                  {download.label}{" "}
                </span>{" "}
              </div>{" "}
              <div className="mt-6">
                {" "}
                <h2 className="text-lg font-semibold">{download.name}</h2>{" "}
                <p className="mt-2 min-h-12 text-sm leading-6 text-white/45">
                  {" "}
                  {download.description}{" "}
                </p>{" "}
              </div>{" "}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white">
                {" "}
                Download{" "}
                <span className="transition-transform group-hover:translate-x-1">
                  {" "}
                  →{" "}
                </span>{" "}
              </div>{" "}
            </a>
          ))}{" "}
        </section>{" "}
        {/* Which package? */}{" "}
        <section className="mt-12 border-t border-white/10 pt-8 sm:mt-16">
          {" "}
          <h2 className="text-sm font-semibold">
            Which package should I use?
          </h2>{" "}
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {" "}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              {" "}
              <p className="text-sm font-semibold">AppImage</p>{" "}
              <p className="mt-2 text-xs leading-5 text-white/40">
                {" "}
                The easiest option. Download it, make it executable, and run it
                without a traditional installation.{" "}
              </p>{" "}
            </div>{" "}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              {" "}
              <p className="text-sm font-semibold">.deb</p>{" "}
              <p className="mt-2 text-xs leading-5 text-white/40">
                {" "}
                Choose this if you&apos;re using Ubuntu, Debian, Linux Mint, or
                another Debian-based distribution.{" "}
              </p>{" "}
            </div>{" "}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              {" "}
              <p className="text-sm font-semibold">.rpm</p>{" "}
              <p className="mt-2 text-xs leading-5 text-white/40">
                {" "}
                Choose this for Fedora, openSUSE, RHEL, or another RPM-based
                distribution.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* AppImage note */}{" "}
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
          {" "}
          <div className="flex gap-4">
            {" "}
            <div className="mt-0.5 text-white/40">ⓘ</div>{" "}
            <div>
              {" "}
              <h3 className="text-sm font-semibold">
                {" "}
                Using the AppImage?{" "}
              </h3>{" "}
              <p className="mt-2 text-xs leading-5 text-white/40">
                {" "}
                After downloading, you may need to make the file executable
                before launching it.{" "}
              </p>{" "}
              <code className="mt-4 block overflow-x-auto rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-xs text-white/60">
                {" "}
                chmod +x your-app.AppImage{" "}
              </code>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Footer note */}{" "}
        <p className="mt-8 text-xs leading-5 text-white/25">
          {" "}
          Packages are provided for supported Linux distributions. Make sure you
          download the package appropriate for your system architecture.{" "}
        </p>{" "}
      </div>{" "}
    </main>
  );
}
