/**
 * Supporters Hero Section Component
 * 
 * Hero section for the Supporters page.
 * Features a large "Supporters" title with decorative underline.
 * 
 * Design mirrors other hero sections (Blog, Team) for consistency.
 */

import Image from "next/image";

export function SupportersHeroSection() {
    return (
        <section className="relative overflow-hidden hero-gradient">
            {/* Background SVG */}
            <div className="absolute right-0 top-[100px] w-1/2 h-full pointer-events-none">
                <Image
                    src="/images/backgrounds/abstract/sub-hero.svg"
                    alt=""
                    fill
                    className="object-cover object-left"
                    priority
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-40 lg:py-48">
                <div className="flex flex-col items-center text-center">
                    <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-heading leading-tight">
                        <span className="hero-underline">
                            Supporters
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
}
