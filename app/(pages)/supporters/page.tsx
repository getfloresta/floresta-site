/**
 * Supporters Page Component
 * 
 * Displays organizations and individuals who support the Floresta project.
 * Features:
 * - Hero section with "Supporters" title
 * - Yearly grouped list of supporters with logos
 * - Theme-aware logos (different versions for light/dark mode)
 * 
 * Route: /supporters
 */

import { SupportersHeroSection } from "../../components/supporters/SupportersHeroSection";
import { SupportersListSection } from "../../components/supporters/SupportersListSection";

export default function SupportersPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero section with page title */}
            <SupportersHeroSection />

            {/* Section displaying supporters grouped by year */}
            <SupportersListSection />
        </div>
    );
}
