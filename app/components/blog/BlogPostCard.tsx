/**
 * Blog Post Card Component
 * 
 * Displays a preview card for a blog post with:
 * - Featured image
 * - Post title
 * - Author, date, and tags metadata
 * 
 * Used in the blog listing page (/blog)
 * Links to the full post at /blog/[slug]
 */

import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
    slug: string;        // URL slug for the post
    image: string;       // Path to featured image
    title: string;       // Post title
    author: string;      // Author name
    date: string;        // Publication date
    tags: string[];      // Array of tag strings
}

export function BlogPostCard({ slug, image, title, author, date, tags }: BlogPostCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="group">
            <article className="border-t border-foreground/10 pt-8 transition-all hover:opacity-80">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Featured Image */}
                    <div className="md:w-80 flex-shrink-0">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Post Content - Title and Metadata */}
                    <div className="flex-1 space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-heading group-hover:text-primary transition-colors">
                            {title}
                        </h3>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/60">
                            <span className="underline">{author}</span>
                            <span>•</span>
                            <span>{date}</span>
                            <span>•</span>
                            <span>{tags.join(", ")}</span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
