/**
 * Dynamic Blog Post Page Component
 * 
 * Renders individual blog posts from markdown files with frontmatter.
 * Features:
 * - Static generation for all posts at build time
 * - Substack-style clean design with focus on readability
 * - Full markdown support including code highlighting, images, and custom CTA sections
 * - Metadata display (author, date, tags)
 * - Featured image support
 * - "Back to Blog" navigation link
 * 
 * Route: /blog/[slug]
 * 
 * The slug is extracted from the markdown filename in /content/posts/
 * Example: /content/posts/understanding-utreexo.md → /blog/understanding-utreexo
 */

import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from "../../../../lib/posts";
import { MarkdownContent } from "../../../components/blog/MarkdownContent";
import { notFound } from "next/navigation";

interface BlogPostPageParams {
    params: Promise<{
        slug: string;
    }>;
}

/**
 * Generate static paths for all blog posts at build time
 * This enables Next.js to pre-render all blog post pages
 */
export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageParams) {
    // Extract slug from route params
    const { slug } = await params;
    const post = getPostBySlug(slug);

    // Show 404 page if post doesn't exist
    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Simple Header with Title - Substack Style */}
            <header className="bg-background pt-24 pb-12 border-b border-foreground/10">
                <div className="mx-auto max-w-2xl px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-8">
                        {post.title}
                    </h1>

                    {/* Meta Information - Subtle */}
                    <div className="flex flex-wrap items-center gap-3 text-base text-foreground/60">
                        <span className="font-medium">{post.author}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm text-foreground/70 bg-foreground/5 hover:bg-foreground/10 transition-colors rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            {/* Featured Image - Full Width */}
            <section className="bg-background">
                <div className="mx-auto max-w-4xl px-6 py-8">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Content - Clean and Readable */}
            <article className="bg-background py-12 pb-24">
                <div className="mx-auto max-w-2xl px-6">
                    <MarkdownContent content={post.content} />
                </div>
            </article>

            {/* Back to Blog - Subtle */}
            <section className="bg-background pb-16">
                <div className="mx-auto max-w-2xl px-6">
                    <div className="border-t border-foreground/10 pt-10">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-base font-medium group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                            View all articles
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
