"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [top, setTop] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollHandler = () => {
    setTop(window.pageYOffset <= 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header className={`fixed z-30 w-full transition-all duration-300 ${top ? 'top-6' : 'top-2'}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop navigation links */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { href: "/", label: "Product" },
              { href: "/how-it-works", label: "How it Works" },
              { href: "/pricing", label: "Pricing" },
              { href: "https://blog.refrme.io", label: "Blog" },
              { href: "https://sites.google.com/refrme.io/refrme-help-center/home?authuser=0", label: "Docs" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="text-gray-800 hover:text-gray-900">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile dropdown menu */}
          {dropdownOpen && (
            <ul className="absolute top-16 right-0 w-48 rounded border border-gray-300 bg-white shadow-lg md:hidden">
              {[
                { href: "/", label: "Product" },
                { href: "/how-it-works", label: "How it Works" },
                { href: "/pricing", label: "Pricing" },
                { href: "https://blog.refrme.io/", label: "Blog" },
                { href: "https://sites.google.com/refrme.io/refrme-help-center/home?authuser=0", label: "Docs" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Sign in links for both desktop and mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="https://app.refrme.io/log-in"
              className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 shadow hover:bg-gray-50 transition duration-200"
            >
              Login
            </Link>
            <Link
                href="https://app.refrme.io/sign-up"
                className="px-4 py-2 rounded-md border border-blue-600 bg-blue-600 text-white shadow hover:bg-blue-700 transition duration-200"
              >
                Get Started
              </Link>
            {/* Mobile menu button */}
            <button
              className="block md:hidden px-2 py-1 rounded border border-gray-300 bg-white text-gray-800 shadow"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {dropdownOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}



