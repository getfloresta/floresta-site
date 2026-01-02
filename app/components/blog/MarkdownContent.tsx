/**
 * Markdown Content Component
 * 
 * Client-side component that renders markdown content with full styling.
 * 
 * Features:
 * - GitHub Flavored Markdown support (tables, strikethrough, task lists)
 * - Raw HTML support for custom elements (like CTA sections)
 * - Comprehensive typography styling optimized for readability
 * - Code syntax highlighting with pre/code blocks
 * - Responsive design for all screen sizes
 * 
 * Uses:
 * - react-markdown: Core markdown rendering
 * - remark-gfm: GitHub Flavored Markdown plugin
 * - rehype-raw: Allows HTML in markdown
 * 
 * Styling follows Substack's clean, readable design principles.
 */

'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownContentProps {
    content: string;  // Markdown string to render
}

export function MarkdownContent({ content }: MarkdownContentProps) {
    return (
        <div
            /**
             * Comprehensive Tailwind styling for all markdown elements
             * Uses [&_element] syntax to target child elements
             * 
             * Typography scale:
             * - p: 21px (1.3125rem) with 1.8 line-height for optimal readability
             * - h2: 3xl (1.875rem) for main sections
             * - h3: 2xl (1.5rem) for subsections
             * 
             * Design principles:
             * - Generous whitespace for breathing room
             * - Consistent vertical rhythm with mb-* spacing
             * - Subtle color variations for hierarchy (heading vs body)
             * - Interactive elements (links) with smooth transitions
             */
            className="article-content
                [&_p]:text-foreground/90 [&_p]:text-xl [&_p]:leading-[1.8] [&_p]:mb-7 [&_p]:font-normal
                [&_h2]:text-heading [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-14 [&_h2]:mb-5 [&_h2]:leading-tight
                [&_h3]:text-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-12 [&_h3]:mb-4 [&_h3]:leading-tight
                [&_a]:text-primary [&_a]:font-medium [&_a]:underline [&_a]:decoration-primary/30 [&_a]:underline-offset-2 hover:[&_a]:decoration-primary [&_a]:transition-colors
                [&_strong]:text-heading [&_strong]:font-semibold
                [&_em]:italic [&_em]:text-foreground/80
                [&_ul]:my-6 [&_ul]:space-y-3
                [&_ol]:my-6 [&_ol]:space-y-3
                [&_li]:text-foreground/90 [&_li]:text-xl [&_li]:leading-[1.8]
                [&_blockquote]:border-l-4 [&_blockquote]:border-foreground/20 [&_blockquote]:pl-6 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-foreground/70
                [&_pre]:bg-foreground/[0.03] [&_pre]:border [&_pre]:border-foreground/10 [&_pre]:rounded-lg [&_pre]:p-5 [&_pre]:my-8 [&_pre]:overflow-x-auto
                [&_code]:font-mono [&_code]:text-[0.9em]
                [&_pre_code]:text-foreground/90 [&_pre_code]:text-base [&_pre_code]:leading-relaxed
                [&_p_code]:bg-foreground/[0.06] [&_p_code]:px-2 [&_p_code]:py-0.5 [&_p_code]:rounded [&_p_code]:text-primary [&_p_code]:font-medium
                [&_hr]:border-foreground/10 [&_hr]:my-12
                [&_img]:rounded-lg [&_img]:my-10"
        >
            {/* Render markdown with plugins for enhanced functionality */}
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}   // GitHub Flavored Markdown support
                rehypePlugins={[rehypeRaw]}   // Allow raw HTML in markdown
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
