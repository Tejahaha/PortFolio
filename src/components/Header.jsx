"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])


  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block text-gray-900 dark:text-white">Dev.Teja</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
  to="/about"
  className="text-gray-700 dark:text-gray-200 transition-colors hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
>
  About
</Link>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-200 transition-colors hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-200 transition-colors hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-14 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 md:hidden">
            <nav className="flex flex-col p-4">
              <a
                href="/about"
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#projects"
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="/#contact"
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}

        <div className="flex items-center ml-auto">
          

          <a
            href="/TejaKanchipamu.pdf"
            className="ml-4 inline-flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

