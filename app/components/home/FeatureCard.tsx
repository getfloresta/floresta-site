/**
 * Feature Card Component
 * 
 * Displays a single feature card with:
 * - Floating 3D icon above the card
 * - Feature title
 * - Feature description
 * 
 * Used in the KeyFeaturesSection to showcase Floresta's capabilities.
 * Features a gradient background and elevated icon design.
 */

import Image from "next/image";

interface FeatureCardProps {
    icon: string;         // Path to 3D icon image
    title: string;        // Feature title
    description: string;  // Feature description
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="relative pt-20">
            {/* 3D Icon - Floats above the card */}
            <div className="absolute -top-1 left-0 z-10">
                <Image
                    src={icon}
                    alt={title}
                    width={300}
                    height={300}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                    quality={100}
                />
            </div>

            {/* Card body with gradient background */}
            <div className="bg-gradient-to-b from-[#1D1E20]/[0.54] to-card-gradient-to rounded-3xl p-8 pt-25 h-[320px] md:h-[380px] lg:h-[400px] flex flex-col overflow-hidden">
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-bold text-white mb-4 max-h-[4.5em] overflow-hidden">
                    {title}
                </h3>

                <p className="text-white/80 text-sm md:text-[15px] lg:text-[17px] leading-relaxed line-clamp-6 overflow-hidden">
                    {description}
                </p>
            </div>
        </div>
    );
}
