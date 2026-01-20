/**
 * Supporters Data
 * 
 * Central data source for organizations and individuals supporting Floresta.
 * 
 * Data is organized by year, with most recent year first.
 * 
 * Logo Requirements:
 * - Logos must be placed in /public/images/icons/supporters/{light|dark}/
 * - Provide both light and dark versions for theme compatibility
 * - Use SVG format for best quality and scalability
 * - Filename must match the 'logo' field (e.g., "vinteum.svg")
 * 
 * To add a new supporter:
 * 1. Add logo files to the appropriate directories
 * 2. Add supporter object to the relevant year, or create a new year section
 * 3. Include name (for alt text), logo filename, and website URL
 * 
 * Example:
 * {
 *   year: "2025",
 *   supporters: [
 *     {
 *       name: "Example Org",
 *       logo: "example-org.svg",
 *       url: "https://example.org"
 *     }
 *   ]
 * }
 */

export interface Supporter {
    name: string;   // Organization name (used for alt text)
    logo: string;   // Logo filename (e.g., "vinteum.svg")
    url: string;    // Organization website URL
}

export interface YearSupporters {
    year: string;
    supporters: Supporter[];
}

export const supportersData: YearSupporters[] = [
    {
        year: "2026",
        supporters: [
            {
                name: "Vinteum",
                logo: "vinteum.svg",
                url: "https://vinteum.org"
            },
            {
                name: "OpenSats",
                logo: "opensats.svg",
                url: "https://opensats.org"
            },
            {
                name: "BitcoinDevKit",
                logo: "bitcoindevkit.svg",
                url: "https://bitcoindevkit.org"
            }
        ]
    },
    {
        year: "2025",
        supporters: [
            {
                name: "Vinteum",
                logo: "vinteum.svg",
                url: "https://vinteum.org"
            },
            {
                name: "OpenSats",
                logo: "opensats.svg",
                url: "https://opensats.org"
            },
            {
                name: "BitcoinDevKit",
                logo: "bitcoindevkit.svg",
                url: "https://bitcoindevkit.org"
            }
        ]
    },
    {
        year: "2024",
        supporters: [
            {
                name: "Vinteum",
                logo: "vinteum.svg",
                url: "https://vinteum.org"
            },
            {
                name: "OpenSats",
                logo: "opensats.svg",
                url: "https://opensats.org"
            }
        ]
    },
    {
        year: "2023",
        supporters: [
            {
                name: "Vinteum",
                logo: "vinteum.svg",
                url: "https://vinteum.org"
            }
        ]
    },
    {
        year: "2022",
        supporters: [
            {
                name: "Vinteum",
                logo: "vinteum.svg",
                url: "https://vinteum.org"
            }
        ]
    }
];
