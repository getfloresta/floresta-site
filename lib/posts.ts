/**
 * Blog Posts Utilities
 * 
 * Server-side utilities for reading and parsing markdown blog posts.
 * 
 * Features:
 * - Reads markdown files from /content/posts/ directory
 * - Parses frontmatter metadata using gray-matter
 * - Filters out example.md template file
 * - Sorts posts by date (most recent first)
 * - Provides type-safe interfaces for post data
 * 
 * Used by:
 * - Blog listing page (/blog)
 * - Individual blog post pages (/blog/[slug])
 * - Static site generation (SSG)
 * 
 * Note: This runs on the server at build time, not in the browser.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Directory where markdown blog posts are stored
const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * Post Metadata Interface
 * Contains all frontmatter fields from markdown posts (excluding content)
 */
export interface PostMetadata {
    slug: string;      // URL-friendly identifier (filename without .md)
    title: string;     // Post title
    author: string;    // Author name
    date: string;      // Publication date (YYYY-MM-DD format)
    tags: string[];    // Array of tags/categories
    image: string;     // Featured image path
    excerpt: string;   // Short description/summary
}

/**
 * Full Post Interface
 * Extends PostMetadata to include markdown content
 */
export interface Post extends PostMetadata {
    content: string;   // Raw markdown content
}

/**
 * Get All Blog Posts
 * 
 * Reads all markdown files from the posts directory and returns their metadata.
 * 
 * Features:
 * - Filters out example.md (template file)
 * - Parses frontmatter from each post
 * - Sorts by date (most recent first)
 * - Returns metadata only (content not included for performance)
 * 
 * Used by:
 * - Blog listing page to display all posts
 * - RSS feed generation
 * - Sitemap generation
 * 
 * @returns Array of post metadata objects, sorted by date descending
 */
export function getAllPosts(): PostMetadata[] {
    // Read all markdown files from the posts directory
    const fileNames = fs.readdirSync(postsDirectory);
    
    const allPosts = fileNames
        // Filter: only .md files, exclude example.md template
        .filter(fileName => fileName.endsWith('.md') && fileName !== 'example.md')
        .map(fileName => {
            // Extract slug from filename (remove .md extension)
            const slug = fileName.replace(/\.md$/, '');
            
            // Read file contents
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            
            // Parse frontmatter (metadata) from markdown
            const { data } = matter(fileContents);

            // Return structured post metadata
            return {
                slug,
                title: data.title,
                author: data.author,
                date: data.date,
                tags: data.tags || [],        // Default to empty array if no tags
                image: data.image,
                excerpt: data.excerpt || ''   // Default to empty string if no excerpt
            };
        });

    // Sort posts by date (most recent first)
    return allPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

/**
 * Get Post by Slug
 * 
 * Retrieves a single blog post with full content and metadata.
 * 
 * Features:
 * - Reads markdown file by slug (URL-friendly identifier)
 * - Parses both frontmatter and content
 * - Returns null if post doesn't exist (for 404 handling)
 * 
 * Used by:
 * - Individual blog post pages (/blog/[slug])
 * - Preview functionality
 * - Related posts logic
 * 
 * @param slug - The post identifier (filename without .md extension)
 * @returns Full post object with content, or null if not found
 * 
 * Example:
 *   const post = getPostBySlug('understanding-utreexo');
 *   // Returns post data from understanding-utreexo.md
 */
export function getPostBySlug(slug: string): Post | null {
    try {
        // Construct full path to markdown file
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        
        // Read file contents
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Parse frontmatter (metadata) and content separately
        const { data, content } = matter(fileContents);

        // Return complete post object
        return {
            slug,
            title: data.title,
            author: data.author,
            date: data.date,
            tags: data.tags || [],
            image: data.image,
            excerpt: data.excerpt || '',
            content  // Full markdown content
        };
    } catch (error) {
        // Return null if file doesn't exist or read fails
        // This allows Next.js to show 404 page via notFound()
        return null;
    }
}

/**
 * Get All Post Slugs
 * 
 * Returns an array of all post slugs (URL identifiers).
 * 
 * Features:
 * - Reads filenames from posts directory
 * - Filters out example.md template
 * - Removes .md extension to get clean slugs
 * 
 * Used by:
 * - Next.js generateStaticParams() for static site generation
 * - Ensures all blog posts are pre-rendered at build time
 * - Enables static path generation for /blog/[slug] routes
 * 
 * @returns Array of post slugs (filenames without .md extension)
 * 
 * Example:
 *   ['understanding-utreexo', 'bitcoin-nodes-guide']
 */
export function getAllPostSlugs(): string[] {
    // Read all filenames from posts directory
    const fileNames = fs.readdirSync(postsDirectory);
    
    return fileNames
        // Filter: only .md files, exclude example.md template
        .filter(fileName => fileName.endsWith('.md') && fileName !== 'example.md')
        // Remove .md extension to get clean slug
        .map(fileName => fileName.replace(/\.md$/, ''));
}
