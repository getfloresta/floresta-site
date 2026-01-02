/**
 * Key Features Data
 * 
 * Central data source for Floresta's key features displayed on the homepage.
 * 
 * Icon Requirements:
 * - Icons should be 3D illustrations in PNG format
 * - Place in /public/images/illustrations/3d/
 * - Recommended size: 300x300px or larger for quality
 * - Use transparent background
 * 
 * To add a new feature:
 * 1. Add 3D icon to /public/images/illustrations/3d/
 * 2. Add feature object to the features array below
 * 3. Include icon path, title, and description
 * 
 * Note: Features are displayed in a grid layout (1 col mobile, 2 tablet, 4 desktop)
 * 
 * Example:
 * {
 *   icon: "/images/illustrations/3d/feature-name.png",
 *   title: "Feature Title",
 *   description: "Brief description of the feature..."
 * }
 */

export interface Feature {
    icon: string;         // Path to 3D icon image
    title: string;        // Feature title
    description: string;  // Feature description
}

export const features: Feature[] = [
    {
        icon: "/images/illustrations/3d/lightweight.png",
        title: "Lightweight and fast",
        description: "Uses Utreexo to eliminate the need for storing the full UTXO set locally"
    },
    {
        icon: "/images/illustrations/3d/modular.png",
        title: "Structure Modular",
        description: "Memory-safe and fast by design"
    },
    {
        icon: "/images/illustrations/3d/settings.png",
        title: "Built in Rust",
        description: "Validates blocks using the same consensus rules"
    },
    {
        icon: "/images/illustrations/3d/bitcoin-check.png",
        title: "Compatible Bitcoin Core",
        description: "Ideal for integration into wallets, explorers, or research projects"
    }
];
