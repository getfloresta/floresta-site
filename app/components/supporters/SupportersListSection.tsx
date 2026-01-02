/**
 * Supporters List Section Component
 * 
 * Displays organizations that support Floresta, grouped by year.
 * 
 * Features:
 * - Theme-aware logos (different versions for light/dark mode)
 * - Yearly sections with large year headings
 * - Clickable logos linking to supporter websites
 * - Hover effects on logos
 * - Uses custom useTheme hook to detect current theme
 * 
 * Data Source:
 * Supporters data is imported from @/data/supporters
 * To add/edit supporters, modify the data/supporters.ts file
 * 
 * Logo Path Convention:
 * /images/icons/supportes/{light|dark}/{logo}.svg
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/hooks/useTheme";
import { supportersData } from "@/data/supporters";
import { EmptyState } from "../shared/EmptyState";

export function SupportersListSection() {
    // Detect current theme (true = dark, false = light)
    const isDark = useTheme();

    return (
        <section className="bg-background py-20 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Show empty state if no supporters exist yet */}
                {supportersData.length === 0 ? (
                    <EmptyState
                        title="No supporters yet"
                        description="Be the first to support Floresta! Check out our"
                        linkText="support information"
                    linkUrl="#"
                    />
                ) : (
                    <div className="space-y-16">
                        {/* Render each year section */}
                        {supportersData.map((yearData) => (
                            <div key={yearData.year} className="space-y-8">
                                {/* Year */}
                                <h2 className="text-5xl md:text-6xl font-bold text-heading">
                                    {yearData.year}
                                </h2>

                                {/* Supporter Logos Grid */}
                                <div className="flex flex-wrap items-center gap-6 md:gap-8">
                                    {yearData.supporters.map((supporter, index) => (
                                        <div key={supporter.name + index} className="flex items-center gap-6 md:gap-8">
                                            <Link
                                                href={supporter.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transition-opacity hover:opacity-70"
                                            >
                                                {/* Theme-aware logo - switches between light/dark versions */}
                                                <Image
                                                    src={`/images/icons/supportes/${isDark ? 'dark' : 'light'}/${supporter.logo}`}
                                                    alt={supporter.name}
                                                    width={200}
                                                    height={60}
                                                    className="h-8 md:h-10 w-auto"
                                                />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
