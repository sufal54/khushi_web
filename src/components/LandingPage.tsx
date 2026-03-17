"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";

type DownloadPlatform = "linux" | "windows" | "mac";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function classNames(...values: Array<string | false | undefined | null>) {
  return values.filter(Boolean).join(" ");
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-medium tracking-wide text-white/70">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-pretty text-base leading-7 text-white/70">
        {subtitle}
      </p>
    </div>
  );
}

function PlatformIcon({ platform }: { platform: DownloadPlatform }) {
  if (platform === "linux") {
    return (
      <span aria-hidden className="text-lg">
        🐧
      </span>
    );
  }
  if (platform === "windows") {
    return (
      <span aria-hidden className="text-lg">
        ⊞
      </span>
    );
  }
  return (
    <span aria-hidden className="text-lg">
      ⌘
    </span>
  );
}

function DownloadCard({
  platform,
  primary,
  disabled,
  title,
  description,
  href,
  cta,
  meta,
}: {
  platform: DownloadPlatform;
  primary?: boolean;
  disabled?: boolean;
  title: string;
  description: string;
  href: string;
  cta: string;
  meta: string;
}) {
  const content = (
    <div
      className={classNames(
        "relative h-full rounded-2xl border p-6",
        primary
          ? "border-white/15 bg-white/[0.06]"
          : "border-white/10 bg-white/[0.03]",
        disabled && "opacity-60",
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <PlatformIcon platform={platform} />
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-white">{title}</h3>
          <p className="text-xs text-white/60">{meta}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-white/70">{description}</p>

      <div className="mt-6">
        <motion.span
          whileHover={!disabled ? { y: -1 } : undefined}
          whileTap={!disabled ? { y: 0 } : undefined}
          className={classNames(
            "inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition",
            primary
              ? "bg-white text-black hover:bg-white/90"
              : "bg-white/10 text-white hover:bg-white/15",
            disabled && "cursor-not-allowed hover:bg-white/10",
          )}
        >
          {cta}
        </motion.span>
      </div>
    </div>
  );

  if (disabled) return content;

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-white">{question}</span>
        <motion.span
          aria-hidden
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="inline-flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm leading-6 text-white/70">
              {answer}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function LandingPage() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-dvh bg-[#05060a] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-cyan-400/15 to-fuchsia-500/25 blur-3xl" />
        <div className="absolute bottom-[-240px] left-[-240px] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-280px] right-[-240px] h-[560px] w-[560px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <header className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-2">

            <Image
              src="/logo.png"
              alt="icon"
              className="absolute mt-8"
              width={250}
              height={250}
            />
            {/* <span className=" text-sm font-semibold tracking-tight">
              Khushi API Client
            </span> */}
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#download" className="hover:text-white">
              Download
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a
              href="https://github.com/sufal54/khushi"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10"
              aria-disabled
            >
              GitHub
            </a>
          </nav>

          <div className="md:hidden">
            <a
              href="#download"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              Download
            </a>
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <div>
              <motion.div variants={item} className="flex flex-wrap gap-2">
                <Badge>Desktop</Badge>
                <Badge>API testing</Badge>
                <Badge>Linux first</Badge>
                <Badge>Postman-style workflow</Badge>
              </motion.div>

              <motion.h1
                variants={item}
                className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
              >
                A modern API testing app built for speed, focus, and clean
                workflows.
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/70"
              >
                Khushi API Client helps you send requests, manage environments,
                organize collections, and debug responses with a fast desktop
                experience. Start on Linux today — Windows and macOS coming soon.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Link
                  href="/download/linux"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Download for Linux
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  See features
                </a>
              </motion.div>

              <motion.div
                variants={item}
                className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/60"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Fast desktop UX
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan-300" />
                  Beautiful UI
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-indigo-300" />
                  Shareable collections
                </span>
              </motion.div>
            </div>

            <motion.div variants={item} className="relative">
              <motion.div
                whileHover={{ rotate: 0.25, y: -2 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-5"
              >
                <Image
                  src="/sample.png"
                  alt="spamle"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </motion.div>

              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-cyan-400/10 to-fuchsia-500/10 blur-2xl" />
            </motion.div>
          </motion.div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            <motion.div variants={item}>
              <SectionTitle
                eyebrow="Built for real workflows"
                title="Everything you need for daily API work"
                subtitle="A focused feature set that keeps you fast: requests, environments, collections, and great response visibility."
              />
            </motion.div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Collections & folders",
                  desc: "Keep endpoints organized per project with a clean sidebar and quick search.",
                },
                {
                  title: "Environments",
                  desc: "Switch between dev/stage/prod using variables like {{baseUrl}} and {{token}}.",
                },
                {
                  title: "Request builder",
                  desc: "Headers, query params, body types — with sensible defaults and a polished UI.",
                },
                {
                  title: "Response insights",
                  desc: "See status, headers, body, and timing at a glance for fast debugging.",
                },
                {
                  title: "Keyboard friendly",
                  desc: "Designed for power users: navigate and run requests without breaking focus.",
                },
                {
                  title: "Desktop-first performance",
                  desc: "Snappy interactions and smooth animations for a professional feel.",
                },
              ].map((f) => (
                <motion.div
                  key={f.title}
                  variants={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="text-base font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="download" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            <motion.div variants={item}>
              <SectionTitle
                eyebrow="Download"
                title="Get the desktop app"
                subtitle="Linux is available now. Windows and macOS will be added later — the download cards are already ready."
              />
            </motion.div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <motion.div variants={item}>
                <DownloadCard
                  platform="linux"
                  primary
                  title="Linux"
                  description="You can download .dev or .rpm"
                  href="/download/linux"
                  cta="Download for Linux"
                  meta="Available now"
                />
              </motion.div>
              <motion.div variants={item}>
                <DownloadCard
                  platform="windows"
                  title="Windows"
                  description="Planned. The button will go live when you publish a Windows build."
                  href="/download/windows"
                  cta="Coming soon"
                  meta="In progress"
                  disabled
                />
              </motion.div>
              <motion.div variants={item}>
                <DownloadCard
                  platform="mac"
                  title="macOS"
                  description="Planned. Publish a signed build later and turn this on."
                  href="/download/mac"
                  cta="Coming soon"
                  meta="In progress"
                  disabled
                />
              </motion.div>
            </div>


          </motion.div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            <motion.div variants={item}>
              <SectionTitle
                eyebrow="FAQ"
                title="Common questions"
                subtitle="Top asked Questions"
              />
            </motion.div>

            <div className="mx-auto mt-10 grid max-w-3xl gap-3">
              <motion.div variants={item}>
                <FAQItem
                  question="Is this like Postman?"
                  answer="Yes — it’s a desktop API client with a similar workflow: build requests, organize them in collections, manage environment variables, and inspect responses quickly."
                />
              </motion.div>
              <motion.div variants={item}>
                <FAQItem
                  question="Which Linux formats will you provide?"
                  answer="You can ship AppImage for universal installs, plus .deb for Debian/Ubuntu and .rpm for Fedora/openSUSE. The download page is ready to link all of them."
                />
              </motion.div>
              <motion.div variants={item}>
                <FAQItem
                  question="Will you support Windows and macOS?"
                  answer="Yes. Linux is first, but the site is structured to add Windows and macOS downloads later without redesign."
                />
              </motion.div>
              <motion.div variants={item}>
                <FAQItem
                  question="How do I publish new versions?"
                  answer="Most teams host binaries on GitHub Releases and link them here. Alternatively, put the installers in public/downloads and the site can serve them directly."
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold">Khushi API Client</p>
              <p className="mt-1 text-xs text-white/60">
                © {year} · Built with <span className="text-red-600 text-2xl">{"\u2665"}</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-white/60">
              <a href="#download" className="hover:text-white">
                Download
              </a>
              <a href="#features" className="hover:text-white">
                Features
              </a>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

