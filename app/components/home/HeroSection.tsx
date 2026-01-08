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
import { heroLinks } from "@/data/navigation";

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
                    <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-heading leading-tight mb-8 max-w-[90%] lg:max-w-[95%]">
                        <span className="block">
                            A lightweight and embeddable
                        </span>
                        <span className="hero-underline">
                            Bitcoin client, built for sovereignty.
                        </span>
                    </h1>

                    {/* Tagline emphasizing key technologies */}
                    <p className="text-xl md:text-2xl text-foreground/70 mb-10">
                        Full validation without the overhead.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {/* Call-to-action buttons */}
                        <Button variant="secondary" href={heroLinks.readTheDocs}>
                            Read the Docs
                        </Button>
                        <Button variant="secondary" href={heroLinks.contribute}>
                            Contribute
                        </Button>
                    </div>

                </div>
            </div>
        </section >
    );
}
