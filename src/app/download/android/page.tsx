import { androidLink } from "@/utill/downloadLink";
import Link from "next/link";
export default function AndroidDownloadPage() {
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
            Android{" "}
          </div>{" "}
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {" "}
            Get the app for Android{" "}
          </h1>{" "}
          <p className="mt-5 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
            {" "}
            Download the latest Android APK and install it directly on your
            device. Fast, simple, and always up to date.{" "}
          </p>{" "}
        </section>{" "}
        {/* Download cards */}{" "}
        <section className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2">
          {" "}
          {/* APK */}{" "}
          <a
            href={androidLink.manual}
            download
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.055]"
          >
            {" "}
            <div className="flex items-start justify-between">
              {" "}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-lg">
                {" "}
                ↓{" "}
              </div>{" "}
              <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/50">
                {" "}
                APK{" "}
              </span>{" "}
            </div>{" "}
            <div className="mt-6">
              {" "}
              <h2 className="text-lg font-semibold"> Download APK </h2>{" "}
              <p className="mt-2 text-sm leading-6 text-white/50">
                {" "}
                Download and install the Android application manually on your
                device.{" "}
              </p>{" "}
            </div>{" "}
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white">
              {" "}
              Download now{" "}
              <span className="transition-transform group-hover:translate-x-1">
                {" "}
                →{" "}
              </span>{" "}
            </div>{" "}
          </a>{" "}
          {/* Google Play */}{" "}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 opacity-60">
            {" "}
            <div className="flex items-start justify-between">
              {" "}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg">
                {" "}
                ▶{" "}
              </div>{" "}
              <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/40">
                {" "}
                SOON{" "}
              </span>{" "}
            </div>{" "}
            <div className="mt-6">
              {" "}
              <h2 className="text-lg font-semibold"> Google Play </h2>{" "}
              <p className="mt-2 text-sm leading-6 text-white/40">
                {" "}
                The app will be available on the Google Play Store soon.{" "}
              </p>{" "}
            </div>{" "}
            <div className="mt-6 text-sm font-medium text-white/30">
              {" "}
              Coming soon{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Installation */}{" "}
        <section className="mt-12 border-t border-white/10 pt-8 sm:mt-16">
          {" "}
          <h2 className="text-sm font-semibold"> Installing the APK </h2>{" "}
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {" "}
            {[
              {
                number: "01",
                title: "Download",
                text: "Download the APK directly to your Android device.",
              },
              {
                number: "02",
                title: "Allow installation",
                text: "If prompted, allow your browser or file manager to install unknown apps.",
              },
              {
                number: "03",
                title: "Install",
                text: "Open the downloaded APK and follow the installation prompts.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
                {" "}
                <span className="text-xs font-medium text-white/30">
                  {" "}
                  {step.number}{" "}
                </span>{" "}
                <h3 className="mt-3 text-sm font-semibold"> {step.title} </h3>{" "}
                <p className="mt-2 text-xs leading-5 text-white/45">
                  {" "}
                  {step.text}{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* Security note */}{" "}
        <p className="mt-8 text-xs leading-5 text-white/30">
          {" "}
          Only install APK files from a source you trust. Android may display a
          security warning when installing apps outside Google Play.{" "}
        </p>{" "}
      </div>{" "}
    </main>
  );
}
