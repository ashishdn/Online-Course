"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session, isPending } = authClient.useSession();
  const userData = session?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/signin");
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#130a2b] shadow-md sticky top-0 z-50 font-sans border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold text-white tracking-wide cursor-pointer">
              Online<span className="text-blue-500"> Course</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-slate-300 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-blue-400 transition-colors">Courses</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Auth Section (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {isPending ? (
            <div className="h-9 w-28 bg-slate-800 animate-pulse rounded-lg"></div>
          ) : userData ? (
            <div className="flex items-center gap-4">
              <p className="text-slate-300 text-sm font-medium">
                Hello, <span className="text-blue-400">{userData.name}</span>
              </p>
              <Link
                href="/dashboard"
                className="bg-slate-800 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500/90 hover:bg-red-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/signin"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-300 hover:text-white focus:outline-none transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Absolute Positioning for smooth UI) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#130a2b] border-t border-slate-800 px-6 pt-4 pb-6 shadow-xl absolute w-full left-0">
          <ul className="flex flex-col gap-4 text-slate-300 text-sm font-medium mb-6">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/courses" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Courses</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Contact</Link>
            </li>
          </ul>

          {/* Auth Section (Mobile) */}
          <div className="border-t border-slate-800 pt-6">
            {isPending ? (
              <p className="text-slate-500 text-sm">Loading...</p>
            ) : userData ? (
              <div className="flex flex-col gap-3">
                <p className="text-slate-300 text-sm font-medium mb-3">
                  Hello, <span className="text-blue-400">{userData.name}</span>
                </p>
                <Link
                  href="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-slate-800 hover:bg-blue-600 text-white text-center py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500/90 hover:bg-red-500 text-white text-center py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/signin"
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-500 text-white block text-center py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}