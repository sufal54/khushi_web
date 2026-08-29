"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { downloadInfo, getDownloadPlatform } from "@/utill/deviceInfo";

export type DownloadPlatform = "linux" | "windows" | "mac" | "android";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
    filter: "blur(6px)",
  },
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

  if (platform === "mac") {
    return (
      <span aria-hidden className="text-lg">
        ⌘
      </span>
    );
  }

  return (
    <span aria-hidden className="text-lg">
      🤖
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
          <h3 className="truncate text-base font-semibold text-white">
            {title}
          </h3>

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

  if (disabled) {
    return content;
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-white">{question}</span>

        <motion.span
          aria-hidden
          animate={{ rotate: open ? 45 : 0 }}
          transition={{
            duration: 0.18,
            ease: "easeOut",
          }}
          className="inline-flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm leading-6 text-white/70">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function LandingPage() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [downloadPlatform, setDownloadPlatform] =
    useState<DownloadPlatform>("linux");

  useEffect(() => {
    const platform = getDownloadPlatform();
    console.log(platform);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDownloadPlatform(platform);
  }, []);

  return (
    <div className="min-h-dvh bg-[#05060a] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-cyan-400/15 to-fuchsia-500/25 blur-3xl" />

        <div className="absolute bottom-[-240px] left-[-240px] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute bottom-[-280px] right-[-240px] h-[560px] w-[560px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="relative flex h-12 w-32 items-center">
            <Image
              src="/logo.png"
              alt="Khushi API Client"
              width={140}
              height={140}
              priority
              className="absolute left-0 top-1/2 size-28 -translate-y-1/2 object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>

            <a href="#download" className="transition hover:text-white">
              Download
            </a>

            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>

            <a
              href="https://github.com/sufal54/khushi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10"
            >
              GitHub
            </a>
          </nav>

          <div className="md:hidden">
            <a
              href="#download"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              Download
            </a>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero */}
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
                <Badge>API Testing</Badge>
                <Badge>Linux First</Badge>
                <Badge>Postman-Style Workflow</Badge>
              </motion.div>

              <motion.h1
                variants={item}
                className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
              >
                A modern API client built for speed, clarity, and productive
                workflows.
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/70"
              >
                Khushi API Client gives you everything you need to build, test,
                and debug APIs in a fast, focused desktop environment. Create
                requests, manage environments, organize collections, and inspect
                responses with ease. Linux is available today, with Windows and
                macOS support coming soon.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Link
                  href={downloadInfo[downloadPlatform].href}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Download for {downloadPlatform}
                </Link>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Explore Features
                </a>
              </motion.div>

              <motion.div
                variants={item}
                className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/60"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Fast desktop experience
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan-300" />
                  Clean, intuitive interface
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-indigo-300" />
                  Shareable collections
                </span>
              </motion.div>
            </div>

            <motion.div variants={item} className="relative">
              <motion.div
                whileHover={{
                  rotate: 0.25,
                  y: -2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 22,
                }}
                className="relative h-96 w-full overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src="/sample2.png"
                  alt="Khushi API Client interface"
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>

              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-cyan-400/10 to-fuchsia-500/10 blur-2xl" />
            </motion.div>
          </motion.div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={container}
          >
            <motion.div variants={item}>
              <SectionTitle
                eyebrow="BUILT FOR EVERYDAY API DEVELOPMENT"
                title="Everything you need for modern API testing"
                subtitle="A focused toolkit for building requests, managing environments, organizing collections, and analyzing responses—all in one streamlined desktop application."
              />
            </motion.div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Collections & Folders",
                  desc: "Organize endpoints by project with collections, folders, and a clean sidebar that makes everything easy to find.",
                },
                {
                  title: "Environments",
                  desc: "Easily switch between development, staging, and production using variables such as {{baseUrl}} and {{token}}.",
                },
                {
                  title: "Request Builder",
                  desc: "Build requests with support for headers, query parameters, request bodies, and common HTTP configurations.",
                },
                {
                  title: "Response Insights",
                  desc: "Quickly inspect status codes, headers, response bodies, and request timing to identify issues faster.",
                },
                {
                  title: "Keyboard Friendly",
                  desc: "Stay productive with a workflow designed for keyboard users, quick navigation, and minimal distractions.",
                },
                {
                  title: "Desktop Performance",
                  desc: "Enjoy responsive interactions, smooth animations, and a desktop experience designed to stay fast as your projects grow.",
                },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]"
                >
                  <h3 className="text-base font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Downloads */}
        <section id="download" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={container}
          >
            <motion.div variants={item}>
              <SectionTitle
                eyebrow="DOWNLOAD"
                title="Get Khushi API Client"
                subtitle="Download the latest version for your platform. Linux and Android are available now, with Windows and macOS support coming soon."
              />
            </motion.div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <motion.div variants={item}>
                <DownloadCard
                  platform="linux"
                  primary
                  title="Linux"
                  description="Download the latest Linux builds in .deb, .rpm, and other supported formats."
                  href="/download/linux"
                  cta="Download for Linux"
                  meta="Available now"
                />
              </motion.div>

              <motion.div variants={item}>
                <DownloadCard
                  platform="android"
                  primary
                  title="Android"
                  description="Download the APK and install Khushi directly on your Android device."
                  href="/download/android"
                  cta="Download for Android"
                  meta="Available now"
                />
              </motion.div>

              <motion.div variants={item}>
                <DownloadCard
                  platform="windows"
                  title="Windows"
                  description="Windows support is currently in development. A downloadable build will be available soon."
                  href="/download/windows"
                  cta="Download for Windows"
                  meta="In development"
                  primary
                />
              </motion.div>

              <motion.div variants={item}>
                <DownloadCard
                  platform="mac"
                  title="macOS"
                  description="macOS support is currently in development. A signed release will be available soon."
                  href="/download/mac"
                  cta="Coming Soon"
                  meta="In development"
                  disabled
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={container}
          >
            <motion.div variants={item}>
              <SectionTitle
                eyebrow="FAQ"
                title="Frequently asked questions"
                subtitle="Everything you need to know about Khushi API Client."
              />
            </motion.div>

            <div className="mx-auto mt-10 grid max-w-3xl gap-3">
              <motion.div variants={item}>
                <FAQItem
                  question="Is Khushi similar to Postman?"
                  answer="Yes. Khushi follows a familiar API-client workflow for building requests, organizing endpoints into collections, managing environment variables, and inspecting responses. It is designed to provide a clean and focused desktop experience."
                />
              </motion.div>

              <motion.div variants={item}>
                <FAQItem
                  question="Which Linux formats are available?"
                  answer="Linux builds can be distributed in formats such as AppImage, .deb, and .rpm, making it easy to install Khushi across different Linux distributions."
                />
              </motion.div>

              <motion.div variants={item}>
                <FAQItem
                  question="Will Khushi support Windows and macOS?"
                  answer="Yes. Linux is the first supported platform, while Windows and macOS builds are currently planned and will be released as they become ready."
                />
              </motion.div>

              <motion.div variants={item}>
                <FAQItem
                  question="How are new versions distributed?"
                  answer="New releases can be distributed through GitHub Releases or directly from the Khushi download infrastructure. Each release can provide platform-specific installers and packages."
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold">Khushi API Client</p>

              <p className="mt-1 text-xs text-white/60">
                © {year} · Built with{" "}
                <span className="text-xl text-red-600">{"\u2665"}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-white/60">
              <a href="#download" className="transition hover:text-white">
                Download
              </a>

              <a href="#features" className="transition hover:text-white">
                Features
              </a>

              <a href="#faq" className="transition hover:text-white">
                FAQ
              </a>

              <a
                href="https://github.com/sufal54/khushi"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
