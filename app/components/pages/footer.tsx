"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-300 dark:border-neutral-700 py-10 px-6 text-sm font-['IBM Plex Sans'] text-neutral-600 dark:text-neutral-400">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Copyright */}
        <div className="text-center md:text-left font-medium text-neutral-800 dark:text-neutral-200">
          © {new Date().getFullYear()} SMALL TICKET FUNDING. All rights reserved.
        </div>

        {/* Center - Nav Links */}
        <div className="flex flex-wrap justify-center gap-5 text-neutral-500 dark:text-neutral-400">
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

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-neutral-500 hover:text-blue-400 transition"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-neutral-500 hover:text-blue-400 transition"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-neutral-500 hover:text-blue-400 transition"
          >
            <Instagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
