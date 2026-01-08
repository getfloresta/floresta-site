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
        title: "Lightweight and efficient",
        description: "Reduces resource requirements for full Bitcoin validation."
    },
    {
        icon: "/images/illustrations/3d/modular.png",
        title: "Modular by design",
        description: "Reusable client components for embedding or standalone deployments."
    },
    {
        icon: "/images/illustrations/3d/settings.png",
        title: "Advanced validation",
        description: "Implements modern and experimental Bitcoin validation techniques like PoW Fraud Proofs, SwiftSync, and Utreexo."
    },
    {
        icon: "/images/illustrations/3d/bitcoin-check.png",
        title: "Bitcoin Core API compatible",
        description: "Exposes APIs compatible with Bitcoin Core for easier integration into existing tools and applications."
    }
];
