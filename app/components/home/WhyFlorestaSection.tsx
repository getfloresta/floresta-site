/**
 * Why Floresta Section Component
 * 
 * Explains the motivation and benefits of using Floresta.
 * 
 * Features:
 * - Floresta icon with decorative vertical line
 * - "Why Floresta?" heading
 * - Three paragraphs explaining the problem and solution
 * - Clean, readable typography optimized for content
 * 
 * Layout uses CSS Grid with icon in left column (2 cols)
 * and content in right column (10 cols).
 */

import Image from "next/image";

export function WhyFlorestaSection() {
    return (
        <section className="bg-background py-20 md:py-60">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    {/* Left column: Icon with decorative vertical line */}
                    <div className="md:col-span-2 flex flex-col items-center h-full">
                        {/* Floresta icon with theme-aware filter */}
                        <Image
                            src="/images/icon.svg"
                            alt="Floresta Icon"
                            width={48}
                            height={48}
                            className="w-12 h-12 mb-4 logo-filter flex-shrink-0"
                        />
                        {/* Decorative gradient line extending downward */}
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
                    </div>

                    {/* Right column: Main content explaining Floresta's purpose */}
                    <div className="md:col-span-10 space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
                            Why Floresta?
                        </h2>

                        <div className="space-y-6 text-foreground/90 text-base md:text-lg leading-relaxed max-w-4xl">
                            <p>
                                Running your own Bitcoin full node is essential for verifying your own transactions, preserving the network's decentralization, and maintaining financial sovereignty.
                            </p>

                            <p>
                                But traditional nodes require hundreds of gigabytes of disk space and constant uptime — resources not everyone has.
                            </p>

                            <p>
                                Floresta leverages Utreexo, a cryptographic accumulator based on Merkle trees, to compress the Bitcoin state. This allows you to run a fully validating node on modest hardware, without compromising on trust or security.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
