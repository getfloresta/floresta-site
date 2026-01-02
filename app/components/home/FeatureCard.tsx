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
            <div className="bg-gradient-to-b from-[#1D1E20]/[0.54] to-card-gradient-to rounded-3xl p-8 pt-25 h-[400px] flex flex-col">
                <h3 className="text-[28px] md:text-[32px] font-bold text-white mb-4">
                    {title}
                </h3>

                <p className="text-white/80 text-[17px] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
