/**
 * Footer Component
 * 
 * Global footer displayed on all pages.
 * 
 * Features:
 * - Floresta logo with theme-aware filter
 * - Community links (Twitter, Nostr, Discord) with external link indicators
 * - License and documentation links
 * - Copyright notice
 * - Terms & Privacy Policy links
 * - Social media icons (theme-aware with dark mode inversion)
 * 
 * Layout is responsive:
 * - Mobile: Stacked vertically
 * - Desktop: Horizontal layout with proper spacing
 */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { communityLinks, footerLinks, socialLinks } from "@/data/navigation";

export function Footer() {
    return (
        <footer className="bg-footer border-t border-foreground/5">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                {/* Main footer content */}
                <div className="flex flex-col gap-8">
                    {/* Floresta Logo */}
                    <div>
                        <Link href="/">
                            <Image
                                src="/images/logo.svg"
                                alt="Floresta"
                                width={120}
                                height={32}
                                className="h-8 w-auto logo-filter"
                            />
                        </Link>
                    </div>

                    {/* Navigation Links Grid */}
                    <div className="flex flex-col gap-8 md:flex-row md:gap-24">
                        {/* Community Links Section */}
                        <div>
                            <h3 className="text-sm font-semibold text-foreground mb-4">
                                Community
                            </h3>
                            <ul className="space-y-3">
                                {communityLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1"
                                        >
                                            {link.label}
                                            <svg
                                                className="h-3 w-3"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* License & Documentation Links Section */}
                        <div>
                            <h3 className="text-sm font-semibold text-foreground mb-4">
                                Project
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.license.map((link) => (
                                    <li key={link.label}>
                                        {'external' in link && link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1"
                                            >
                                                {link.label}
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                            </a>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright, Legal Links, and Social Icons */}
                <div className="mt-12 border-t border-foreground/10 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        {/* Copyright Text */}
                        <p className="text-sm text-foreground/50">
                            &copy; {new Date().getFullYear()} Floresta. All rights reserved.
                        </p>

                        {/* Legal Links and Social Icons */}
                        <div className="flex items-center gap-6">
                            {/* Legal Links */}
                            <div className="flex items-center gap-4 text-sm">
                                {footerLinks.legal.map((link, index) => (
                                    <React.Fragment key={link.label}>
                                        {'external' in link && link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/50 hover:text-foreground transition-colors inline-flex items-center gap-1"
                                            >
                                                {link.label}
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                            </a>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-foreground/50 hover:text-foreground transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                        {index < footerLinks.legal.length - 1 && (
                                            <span className="text-foreground/30">|</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* Social Media Icons - Theme-aware with dark mode inversion */}
                            <div className="flex items-center gap-4">
                                {Object.entries(socialLinks).map(([platform, url]) => (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/50 hover:text-foreground transition-colors"
                                    >
                                        <Image
                                            src={`/images/icons/social/${platform}.svg`}
                                            alt={platform.charAt(0).toUpperCase() + platform.slice(1)}
                                            width={20}
                                            height={20}
                                            className="h-5 w-5 opacity-50 hover:opacity-100 transition-opacity dark:invert"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
