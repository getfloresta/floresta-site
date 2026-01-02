/**
 * Key Features Section Component
 * 
 * Showcases Floresta's main features in a grid layout.
 * 
 * Features:
 * - Section title and description
 * - Grid of feature cards (responsive: 1 col mobile, 2 tablet, 4 desktop)
 * - Background gradient specific to this section
     * - Decorative SVG background
 * 
 * Data Source:
 * Features data is imported from @/data/features
 * To add/edit features, modify the data/features.ts file
 * 
 * Each card displays a 3D icon, title, and description.
 */

import Image from "next/image";
import { FeatureCard } from "./FeatureCard";
import { features } from "@/data/features";

export function KeyFeaturesSection() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-key-features-bg">
            {/* Background decorative SVG - right side with opacity */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-40 pointer-events-none">
                <Image
                    src="/images/backgrounds/abstract/key-features.svg"
                    alt=""
                    fill
                    className="object-cover object-left"
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Section header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-key-features-text mb-6">
                        Key Features.
                    </h2>
                    <p className="text-lg md:text-xl text-key-features-text/80 max-w-2xl">
                        And it's all powered by Utreexo - the cryptographic accumulator for teams that want to run Bitcoin nodes efficiently.
                    </p>
                </div>

                {/* Feature cards grid - responsive layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
