'use client'

import { useState} from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
          IslamicWeb
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/quran" className="nav-link">Quran</Link>
          <Link href="/hadith" className="nav-link">Hadith</Link>
          <Link href="/prayer-times" className="nav-link">Prayer Times</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-700 dark:text-gray-300"
          >
            {theme === "dark" ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 text-center py-4 space-y-4">
          <Link href="/" className="block">Home</Link>
          <Link href="/quran" className="block">Quran</Link>
          <Link href="/hadith" className="block">Hadith</Link>
          <Link href="/prayer-times" className="block">Prayer Times</Link>
          <Link href="/blog" className="block">Blog</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
