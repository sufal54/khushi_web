import Link from "next/link";

export default function AndroidDownloadPage() {
    return (
        <div className="min-h-dvh bg-[#05060a] text-white">
            <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
                <Link href="/" className="text-sm text-white/70 hover:text-white">
                    ← Back to home
                </Link>

                <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                    Download for Android
                </h1>

                <p className="mt-4 text-sm text-white/70">
                    Download the APK to install manually. Make sure “Install from unknown sources” is enabled on your device.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                    <a
                        href="https://drive.google.com/file/d/1qWxuTmAZ4DI2ZY_t79JN7eRNwWUOCV-r/view?usp=drive_link"
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06] flex flex-col items-start gap-1"
                    >
                        <p className="text-sm font-semibold">APK</p>
                        <p className="mt-1 text-xs text-white/60">Direct download, install manually</p>
                    </a>

                    <a
                        href="#"
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06] flex flex-col items-start gap-1 opacity-50 cursor-not-allowed"
                    >
                        <p className="text-sm font-semibold">Google Play</p>
                        <p className="mt-1 text-xs text-white/60">Coming soon</p>
                    </a>
                </div>
            </div>
        </div>
    );
}