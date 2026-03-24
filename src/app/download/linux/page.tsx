import Link from "next/link";

export default function LinuxDownloadPage() {
  return (
    <div className="min-h-dvh bg-[#05060a] text-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link href="/" className="text-sm text-white/70 hover:text-white">
          ← Back to home
        </Link>

        <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Download for Linux
        </h1>


        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <a
            href="https://drive.google.com/file/d/1fAFsFM2ehcj6HKEZT6wvjSj7O9497oJ3/view?usp=drive_link"

            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06]"
          >
            <p className="text-sm font-semibold">AppImage</p>
            <p className="mt-1 text-xs text-white/60">Recommended</p>
          </a>
          <a
            href="https://res.cloudinary.com/dqmui1vt3/raw/upload/v1773671123/tzxwk7raw2lda5sk2tju.deb"

            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06]"
          >
            <p className="text-sm font-semibold">.deb</p>
            <p className="mt-1 text-xs text-white/60">Debian / Ubuntu</p>
          </a>
          <a
            href="https://res.cloudinary.com/dqmui1vt3/raw/upload/v1773671137/jzmhs5tforlttju6p64k.rpm"

            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06]"
          >
            <p className="text-sm font-semibold">.rpm</p>
            <p className="mt-1 text-xs text-white/60">Fedora / openSUSE</p>
          </a>
        </div>


      </div>
    </div>
  );
}

