/**
 * Navigation Data
 * 
 * Central data source for site navigation links and community resources.
 * 
 * This file contains:
 * - Main navigation links (internal routes)
 * - Community links (external social/chat platforms)
 * - Call-to-action links (docs, GitHub, etc.)
 * 
 * To modify navigation:
 * 1. Add/remove links from the appropriate array
 * 2. Update the Navbar and Footer components if structure changes
 * 
 * External links should always include:
 * - target="_blank" for new tab
 * - rel="noopener noreferrer" for security
 */

export interface NavigationLink {
    label: string;
    href: string;
}

export interface ExternalLink extends NavigationLink {
    external: true;
}

/**
 * Main navigation links
 * Displayed in the navbar and used throughout the site
 */
export const mainNavigation: NavigationLink[] = [
    { label: "Supporters", href: "/supporters" },
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" }
];

/**
 * Community links
 * External links to social platforms and chat communities
 */
export const communityLinks: ExternalLink[] = [
    { 
        label: "Twitter", 
        href: "#", // TODO: Add Twitter link when available
        external: true
    },
    { 
        label: "Nostr", 
        href: "#",  // TODO: Add Nostr link when available
        external: true
    },
    { 
        label: "Discord", 
        href: "#",  // TODO: Add Discord invite link when available
        external: true
    }
];

/**
 * Footer-specific links
 * Additional navigation items shown in the footer
 */
export const footerLinks = {
    license: [
        { label: "PGP Keys", href: "#" },  // TODO: Add PGP Keys link when available
        { label: "Team", href: "/team" },
        { label: "Documentation", href: "#" } // TODO: Add Documentation link when available
    ],
    legal: [
        { label: "Terms & Conditions", href: "#" }, // TODO: Add Terms & Conditions link when available
        { label: "Privacy Policy", href: "#" } // TODO: Add Privacy Policy link when available
    ]
};

/**
 * Social media links
 * Used for social icons in footer
 */
export const socialLinks = {
    twitter: "#",   // TODO: Add Twitter link when available
    dribbble: "#",  // TODO: Add Dribbble link when available
    linkedin: "#"   // TODO: Add LinkedIn link when available
};

/**
 * Call-to-action links
 * Primary action buttons throughout the site
 */
export const ctaLinks = {
    docs: "#",  // TODO: Add documentation URL when available
    github: "#", // TODO: Add GitHub repository URL when available
    contribute: "#" // TODO: Add contribution guide URL when available
};
