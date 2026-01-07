/**
 * Navbar Component
 * 
 * Global navigation bar displayed on all pages.
 * 
 * Features:
 * - Sticky positioning at the top
 * - Glassmorphism effect on scroll (backdrop blur + transparency)
 * - Floresta logo linking to homepage
 * - Desktop navigation with hover effects and animated underlines
 * - Community dropdown menu
 * - Mobile hamburger menu
 * - Theme toggle button
 * - Call-to-action buttons (Read Docs, View on GitHub)
 * 
 * Responsive behavior:
 * - Desktop (≥768px): Full horizontal navigation with dropdowns
 * - Mobile (<768px): Hamburger menu with slide-down navigation
 * 
 * State management:
 * - isMenuOpen: Controls mobile menu visibility
 * - isScrolled: Triggers glassmorphism effect when user scrolls
 */

"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../shared/Button";
import { ThemeToggle } from "../shared/ThemeToggle";
import { ctaLinks, communityLinks } from "@/data/navigation";
import { useState, useEffect } from "react";

export function Navbar() {
    // Mobile menu toggle state
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Scroll state for glassmorphism effect
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll position to apply backdrop blur effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-50 border-b border-foreground/5 transition-all duration-300 ${isScrolled
            ? "bg-navbar-bg/80 backdrop-blur-md"  // Glassmorphism when scrolled
            : "bg-navbar-bg"                       // Solid background at top
            }`}>
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Left Section: Logo and Desktop Navigation */}
                    <div className="flex items-center gap-8">
                        {/* Floresta Logo - Links to homepage */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.svg"
                                alt="Floresta"
                                width={120}
                                height={32}
                                className="h-8 w-auto logo-filter"
                            />
                        </Link>

                        {/* Desktop Navigation Links - Hidden on mobile */}
                        <div className="hidden md:flex items-center gap-6">
                            <Link
                                href="/supporters"
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors underline decoration-transparent hover:decoration-current underline-offset-4"
                            >
                                Supporters
                            </Link>

                            <Link
                                href="/team"
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors underline decoration-transparent hover:decoration-current underline-offset-4"
                            >
                                Team
                            </Link>

                            <Link
                                href="/blog"
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors underline decoration-transparent hover:decoration-current underline-offset-4"
                            >
                                Blog
                            </Link>

                            {/* Community Dropdown Menu */}
                            <div className="relative group">
                                {/* Dropdown trigger button */}
                                <button className="text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                                    Community
                                    <svg
                                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {/* Dropdown Menu - Shows on hover with smooth transition */}
                                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="bg-background border border-foreground/10 rounded-lg shadow-lg py-2 text-left">
                                        {communityLinks.map((link) => (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block px-4 py-2 text-sm text-foreground hover:bg-footer transition-colors text-left"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Action Buttons and Theme Toggle (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button variant="secondary" className="hidden lg:inline-flex text-sm" href={ctaLinks.docs}>
                            Read the Docs
                        </Button>
                        <Button variant="primary" className="hidden lg:inline-flex text-sm" href={ctaLinks.github}>
                            View on GitHub
                        </Button>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Section: Theme Toggle and Hamburger Menu Button */}
                    <div className="flex md:hidden items-center gap-3">
                        <ThemeToggle />
                        {/* Hamburger menu button - toggles mobile navigation */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-foreground"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu - Slides down when hamburger is clicked */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-foreground/5 py-4">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/supporters"
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Supporters
                            </Link>

                            <Link
                                href="/team"
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Team
                            </Link>

                            <Link
                                href="/blog"
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                            </Link>

                            <div className="border-t border-foreground/5 pt-4">
                                <span className="text-sm font-medium text-foreground/60 block mb-2">Community</span>
                                <div className="flex flex-col gap-3">
                                    {communityLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 pt-4 border-t border-foreground/5">
                                <Button variant="secondary" className="text-sm w-full" href={ctaLinks.docs}>
                                    Read the Docs
                                </Button>
                                <Button variant="primary" className="text-sm w-full" href={ctaLinks.github}>
                                    View on GitHub
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
