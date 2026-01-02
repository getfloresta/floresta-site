/**
 * Custom 404 Not Found Page
 * 
 * Displayed when a user tries to access a non-existent route.
 * 
 * Features:
 * - Custom design matching Floresta's visual identity
 * - Friendly error message
 * - Navigation buttons to help users find their way
 * - Responsive layout
 * - Background gradient consistent with hero sections
 * 
 * This page is automatically shown by Next.js when:
 * - A route doesn't exist
 * - notFound() is called from a page component
 * - A dynamic route parameter doesn't match any content
 */

import Link from "next/link";
import Image from "next/image";
import { Button } from "./components/shared/Button";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to flex items-center justify-center relative overflow-hidden">
            {/* Background decorative SVG */}
            <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-30">
                <Image
                    src="/images/backgrounds/abstract/hero.svg"
                    alt=""
                    fill
                    className="object-cover object-left"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
                {/* 404 Large Number */}
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-bold text-heading opacity-20 leading-none">
                        404
                    </h1>
                </div>

                {/* Error Message */}
                <div className="space-y-6 mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading">
                        Page Not Found
                    </h2>
                    <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
                        Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/">
                        <Button variant="secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                />
                            </svg>
                            Back to Home
                        </Button>
                    </Link>
                    <Link href="/blog">
                        <Button variant="secondary">
                            Read the Blog
                        </Button>
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="mt-16 pt-8 border-t border-foreground/10">
                    <p className="text-sm text-foreground/60 mb-4">
                        You might be looking for:
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link
                            href="/supporters"
                            className="text-foreground/70 hover:text-primary transition-colors underline decoration-transparent hover:decoration-current underline-offset-4"
                        >
                            Supporters
                        </Link>
                        <Link
                            href="/team"
                            className="text-foreground/70 hover:text-primary transition-colors underline decoration-transparent hover:decoration-current underline-offset-4"
                        >
                            Team
                        </Link>
                        <Link
                            href="/blog"
                            className="text-foreground/70 hover:text-primary transition-colors underline decoration-transparent hover:decoration-current underline-offset-4"
                        >
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
