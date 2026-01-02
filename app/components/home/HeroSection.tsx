/**
 * Hero Section Component
 * 
 * The main hero section of the homepage featuring:
 * - Large title with custom underline effect
 * - Tagline highlighting Utreexo and Rust
 * - Call-to-action buttons (Docs and Contribute)
 * - Background gradient from theme colors
 * - Decorative SVG on the right side
 * 
 * Typography uses custom Helvetica Neue font for the title.
 */

import Image from "next/image";
import { Button } from "../shared/Button";

export function HeroSection() {
    return (
        <section className="
  relative overflow-hidden
  bg-gradient-to-br
  from-hero-gradient-from from-47%
  via-hero-gradient-from
  to-hero-gradient-to
">

            {/* Background decorative SVG - positioned on right side */}
            <div className="absolute right-0 top-[100px] w-1/2 h-full pointer-events-none">
                <Image
                    src="/images/backgrounds/abstract/hero.svg"
                    alt=""
                    fill
                    className="object-cover object-left"
                    priority
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-40 lg:py-48">
                <div className="flex flex-col items-center text-center">
                    {/* Main hero title with custom font and underline effect */}
                    <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-heading leading-tight mb-8">
                        <span className="block">A lightweight, fast, and</span>
                        {/* The hero-underline class adds the decorative SVG underline */}
                        <span className="hero-underline">
                            sovereign Bitcoin full node.
                        </span>
                    </h1>

                    {/* Tagline emphasizing key technologies */}
                    <p className="text-xl md:text-2xl text-foreground/70 mb-10">
                        Powered by Utreexo. Written in Rust.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {/* Call-to-action buttons */}
                        <Button variant="secondary">
                            Read the Docs
                        </Button>
                        <Button variant="secondary">
                            Contribute
                        </Button>
                    </div>

                </div>
            </div>
        </section >
    );
}
