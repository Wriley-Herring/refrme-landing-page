"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop navigation links */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link href="/" className="text-gray-800 hover:text-gray-900">
                Product
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="text-gray-800 hover:text-gray-900">
                How it works
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-gray-800 hover:text-gray-900">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="https://blog.refrme.io" className="text-gray-800 hover:text-gray-900">
                Blog
              </Link>
            </li>
            <li>
              <Link href="https://sites.google.com/refrme.io/refrme-help-center/home?authuser=0" className="text-gray-800 hover:text-gray-900">
                Docs
              </Link>
            </li>
            {/* <li>
              <Link href="/extra" className="text-gray-800 hover:text-gray-900">
                Extra
              </Link>
            </li> */}
          </ul>

          {/* Mobile dropdown menu */}
          {dropdownOpen && (
            <ul className="absolute top-16 right-0 w-48 rounded border border-gray-300 bg-white shadow-lg md:hidden">
              <li>
                <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Product
                </Link>
              </li>
              <li>
              <Link href="/how-it-works" className="text-gray-800 hover:text-gray-900">
                How it works
              </Link>
            </li>
              <li>
                <Link href="/pricing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="https://blog.refrme.io/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="https://sites.google.com/refrme.io/refrme-help-center/home?authuser=0" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Docs
                </Link>
              </li>
              {/* <li>
                <Link href="/extra" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Extra
                </Link>
              </li> */}
            </ul>
          )}

          {/* Sign in links for both desktop and mobile */}
          <ul className="flex items-center gap-3">
            <li>
              <Link
                href="https://app.refrme.io/log-in"
                className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="https://app.refrme.io/sign-up"
                className="px-4 py-2 rounded-md border border-gray-800 bg-gray-800 text-white shadow hover:bg-gray-900"
              >
                Sign Up
              </Link>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}



