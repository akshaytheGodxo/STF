"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-300 dark:border-neutral-700 py-10 px-6 text-sm text-neutral-600 dark:text-neutral-400 font-[Inter]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left font-medium text-neutral-800 dark:text-neutral-200">
          © {new Date().getFullYear()} SMALL TICKET FUNDING. All rights reserved.
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#portfolio" className="hover:underline">
            Portfolio
          </Link>
          <Link href="#contacts" className="hover:underline">
            Contact
          </Link>
        </div>

        <div className="flex gap-4">
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <svg className="w-5 h-5 fill-current hover:text-blue-400" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.62 8.62 0 0 1-2.71 1.04 4.25 4.25 0 0 0-7.24 3.88 12.05 12.05 0 0 1-8.75-4.43 4.25 4.25 0 0 0 1.31 5.67 4.21 4.21 0 0 1-1.92-.53v.05a4.26 4.26 0 0 0 3.4 4.17 4.27 4.27 0 0 1-1.92.07 4.26 4.26 0 0 0 3.98 2.96 8.54 8.54 0 0 1-5.29 1.82A8.65 8.65 0 0 1 2 19.54a12.06 12.06 0 0 0 6.52 1.91c7.84 0 12.13-6.5 12.13-12.13l-.01-.55A8.72 8.72 0 0 0 24 5.59a8.56 8.56 0 0 1-2.54.7z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
