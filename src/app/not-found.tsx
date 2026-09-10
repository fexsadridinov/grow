import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F3F1EA] font-sans text-[#132019]">
        <main className="mx-auto flex min-h-[60vh] w-full max-w-[1440px] flex-col justify-center px-5 py-24">
          <p className="text-[11px] tracking-[0.16em] uppercase text-[#64715C]">404</p>
          <h1 className="mt-4 text-4xl tracking-[-0.04em]">Page not found</h1>
          <p className="mt-4 text-[#132019]/70">That route is not part of the GROW site.</p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex h-12 items-center rounded-lg bg-[#173C2B] px-5 text-[15px] font-medium text-[#FAFAF7]"
            >
              Return home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
