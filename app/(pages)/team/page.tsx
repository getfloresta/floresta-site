/**
 * Team Page Component
 * 
 * Displays the Floresta team members with their information.
 * Features:
 * - Hero section with "Team" title
 * - List of team members with descriptions
 * - Social media links for each member (LinkedIn, X/Twitter, YouTube)
 * 
 * Route: /team
 */

import { TeamHeroSection } from "../../components/team/TeamHeroSection";
import { TeamMembersSection } from "../../components/team/TeamMembersSection";

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero section with page title */}
            <TeamHeroSection />

            {/* Section displaying all team members */}
            <TeamMembersSection />
        </div>
    );
}
