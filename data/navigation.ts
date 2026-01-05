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
 * Hero navigation links
 * Displayed in the hero and used throughout the site
 */
export const heroLinks = {
    readTheDocs: "https://github.com/vinteumorg/Floresta/tree/master/doc",
    contribute: "https://github.com/vinteumorg/Floresta/blob/master/CONTRIBUTING.md"
};

/**
 * Community links
 * External links to social platforms and chat communities
 */
export const communityLinks: ExternalLink[] = [
    { 
        label: "Nostr", 
        href: "https://njump.me/npub1xf37jpft8s3tk7c84zsrpavz0xvslswcwly03q4fuq32p9rws70sgp8kjh",
        external: true
    },
    { 
        label: "Discord", 
        href: "https://discord.gg/gTurqMNh",
        external: true 
    }
];

/**
 * Footer-specific links
 * Additional navigation items shown in the footer
 */
export const footerLinks = {
    license: [
        { label: "PGP Keys", href: "https://blog.dlsouza.lol/assets/gpg.asc", external: true },
        { label: "Team", href: "/team" },
        { label: "Documentation", href: "https://github.com/vinteumorg/Floresta/tree/master/doc", external: true }
    ],
    legal: [
        { label: "License", href: "https://github.com/vinteumorg/Floresta/blob/master/LICENSE", external: true },
    ]
};

/**
 * Social media links
 * Used for social icons in footer
 */
export const socialLinks = {
    discord: "https://discord.gg/gTurqMNh"
};

/**
 * Call-to-action links
 * Primary action buttons throughout the site
 */
export const ctaLinks = {
    docs: "https://github.com/vinteumorg/Floresta/tree/master/doc",
    github: "https://github.com/getfloresta",
    contribute: "https://github.com/vinteumorg/Floresta/blob/master/CONTRIBUTING.md"
};