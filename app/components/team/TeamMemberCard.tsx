/**
 * Team Member Card Component
 * 
 * Displays information about a single team member.
 * 
 * Features:
 * - Indicator icon next to name
 * - Member name with large typography
 * - Description/bio text
 * - Social media links (LinkedIn, X/Twitter, YouTube, GitHub, Email, Discord, Blog)
 * - Theme-aware social icons with hover effects
 * 
 * Social Links:
 * - Only renders icons for provided social links
 * - Supports: LinkedIn, X/Twitter, YouTube, GitHub, Email, Discord, Blog
 * - Uses team-icon-filter CSS class for theme adaptation
 */

import Image from "next/image";
import Link from "next/link";

interface SocialLinks {
    linkedin?: string;  // LinkedIn profile URL (optional)
    x?: string;         // X (Twitter) profile URL (optional)
    youtube?: string;   // YouTube channel URL (optional)
    github?: string;    // GitHub profile URL (optional)
    email?: string;     // Email address (optional)
    discord?: string;   // Discord username (optional)
    blog?: string;      // Blog/website URL (optional)
}

interface TeamMemberProps {
    name: string;              // Member name
    description: string;       // Member bio/description
    socialLinks?: SocialLinks; // Social media links (optional)
}

export function TeamMemberCard({ name, description, socialLinks }: TeamMemberProps) {
    // Social media configuration with icons and URLs
    const socialIcons = [
        { key: 'linkedin', icon: '/images/icons/team/linkedin.svg', url: socialLinks?.linkedin },
        { key: 'x', icon: '/images/icons/team/x.svg', url: socialLinks?.x },
        { key: 'youtube', icon: '/images/icons/team/youtube.svg', url: socialLinks?.youtube },
        { key: 'github', icon: '/images/icons/team/github.svg', url: socialLinks?.github },
        { key: 'email', icon: '/images/icons/team/email.svg', url: socialLinks?.email ? `mailto:${socialLinks.email}` : undefined },
        { key: 'discord', icon: '/images/icons/team/discord.svg', url: socialLinks?.discord },
        { key: 'blog', icon: '/images/icons/team/blog.svg', url: socialLinks?.blog },
    ];

    return (
        <div className="space-y-6">
            {/* Member Name with Indicator Icon */}
            <div className="flex items-start gap-4">
                {/* Indicator icon */}
                <Image
                    src="/images/icons/team/indicator.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 flex-shrink-0 mt-1"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-heading">
                    {name}
                </h3>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed pl-10">
                {description}
            </p>

            {/* Social Media Links - Only render if socialLinks provided */}
            {socialLinks && (
                <div className="flex items-center gap-4 pl-10">
                    {/* Render only the social icons that have URLs */}
                    {socialIcons.map(({ key, icon, url }) => (
                        url && (
                            <Link
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity hover:opacity-70"
                            >
                                <Image
                                    src={icon}
                                    alt={key}
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 team-icon-filter"
                                />
                            </Link>
                        )
                    ))}
                </div>
            )}
        </div>
    );
}
