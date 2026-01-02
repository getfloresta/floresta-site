/**
 * Blog Listing Page Component
 * 
 * Displays all published blog posts in a clean, Substack-style layout.
 * Features:
 * - Hero section with "Blog" title
 * - List of all blog posts with preview cards
 * - Empty state with contribution link when no posts exist
 * 
 * Route: /blog
 */

import { teamMembers } from "@/data";
import { BlogHeroSection } from "../../components/blog/BlogHeroSection";
import { BlogPostsSection } from "../../components/blog/BlogPostsSection";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero section with page title */}
            <BlogHeroSection />

            {/* Section listing all blog posts or showing empty state */}
            <BlogPostsSection />
        </div>
    );
}
