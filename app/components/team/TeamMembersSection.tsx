/**
 * Team Members Section Component
 * 
 * Displays all team members in a vertical list.
 * 
 * Features:
 * - Imports team data from centralized data layer
 * - Renders TeamMemberCard for each member
 * - Responsive spacing between cards
 * 
 * Data Source:
 * Team member data is imported from @/data/team
 * To add/edit team members, modify the data/team.ts file
 */

import { TeamMemberCard } from "./TeamMemberCard";
import { EmptyState } from "../shared/EmptyState";
import { teamMembers } from "@/data/team";

export function TeamMembersSection() {
    return (
        <section className="bg-background py-20 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Show empty state if no team members exist yet */}
                {teamMembers.length === 0 ? (
                    <EmptyState
                        title="No team members yet"
                        description="Be the first to join the team! Check out our"
                        linkText="contribution guide"
                        linkUrl="#"
                    />
                ) : (
                    /* Render each team member card */
                    <div className="space-y-16">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard
                                key={index}
                                name={member.name}
                                description={member.description}
                                socialLinks={member.socialLinks}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
