/**
 * Blog Posts Section Component
 * 
 * Displays all published blog posts or an empty state.
 * 
 * Features:
 * - Fetches all posts from /content/posts/ directory
 * - Shows empty state with contribution link when no posts exist
 * - Renders BlogPostCard for each post
 * 
 * Posts are read from markdown files with frontmatter at build time.
 */

import { BlogPostCard } from "./BlogPostCard";
import { EmptyState } from "../shared/EmptyState";
import { getAllPosts } from "../../../lib/posts";

export function BlogPostsSection() {
    // Fetch all posts from markdown files (examples.md is excluded)
    const posts = getAllPosts();

    return (
        <section className="bg-background py-20 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Show empty state if no posts exist yet */}
                {posts.length === 0 ? (
                    <EmptyState
                        title="No publications yet"
                        description="Be the first to contribute! Check out our"
                        linkText="contribution guide"
                        linkUrl="#"
                    />
                ) : (
                    /* Render all blog posts */
                    <div className="space-y-12">
                        {posts.map((post) => (
                            <BlogPostCard
                                key={post.slug}
                                slug={post.slug}
                                image={post.image}
                                title={post.title}
                                author={post.author}
                                date={post.date}
                                tags={post.tags}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
