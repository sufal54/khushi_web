import { macLink } from "@/utill/downloadLink";
import Link from "next/link";

const downloads = [
  {
    name: ".dmg",
    description: "Recommended installer for Apple Silicon Macs.",
    label: "Apple Silicon",
    icon: "◉",
    href: macLink.dmg,
  },
  // {
  //   name: ".app",
  //   description: "Standalone macOS application bundle.",
  //   label: "Apple Silicon",
  //   icon: "⌘",
  //   href: macLink.app,
  // },
];

export default function MacDownloadPage() {
  return (
    <main className="min-h-dvh bg-[#05060a] text-white">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </Link>

        {/* Header */}
        <section className="mt-10 max-w-2xl sm:mt-14">
          <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/60">
            macOS
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Download for Mac
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
            Download the latest version of Khushi for macOS and get started with
            a fast, focused API testing experience.
          </p>
        </section>

        {/* Downloads */}
        <section className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2">
          {downloads.map((download) => (
            <a
              key={download.name}
              href={download.href}
              download
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.055]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-lg text-white/70">
                  {download.icon}
                </div>

                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white/40">
                  {download.label}
                </span>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold">{download.name}</h2>

                <p className="mt-2 min-h-12 text-sm leading-6 text-white/45">
                  {download.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white">
                Download
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </section>

        {/* System requirements */}
        <section className="mt-12 border-t border-white/10 pt-8 sm:mt-16">
          <h2 className="text-sm font-semibold">System requirements</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-sm font-semibold">Architecture</p>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Apple Silicon Macs using the ARM64 / AArch64 architecture.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-sm font-semibold">macOS</p>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Designed for modern versions of macOS.
              </p>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
          <div className="flex gap-4">
            <div className="mt-0.5 text-white/40">ⓘ</div>

            <div>
              <h3 className="text-sm font-semibold">Installing Khushi</h3>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Download the DMG file, open it, and drag Khushi into your
                Applications folder. macOS may ask for permission before opening
                the application.
              </p>
            </div>
          </div>
        </section>

        {/* Security note */}
        <p className="mt-8 text-xs leading-5 text-white/25">
          Only install applications from a source you trust. macOS may display a
          security warning when opening an application downloaded from the
          internet.
        </p>

        {/* Footer */}
        <p className="mt-4 text-xs leading-5 text-white/20">
          Currently available for Apple Silicon Macs.
        </p>
      </div>
    </main>
  );
}
