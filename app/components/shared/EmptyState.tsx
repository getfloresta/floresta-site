/**
 * Empty State Component
 * 
 * Reusable component for displaying empty states across the application.
 * 
 * Features:
 * - Customizable title and description
 * - Optional call-to-action link
 * - Consistent styling and spacing
 * - Responsive design
 * 
 * Used by:
 * - Blog listing page (when no posts exist)
 * - Team page (when no team members exist)
 * - Any section that needs an empty state message
 * 
 * Example usage:
 *   <EmptyState
 *     title="No posts yet"
 *     description="Be the first to contribute!"
 *     linkText="contribution guide"
 *     linkUrl="https://github.com/..."
 *   />
 */

interface EmptyStateProps {
    title: string;              // Main heading text
    description: string;        // Description text (can include placeholder for link)
    linkText?: string;          // Text for the clickable link (optional)
    linkUrl?: string;           // URL for the link (optional)
}

export function EmptyState({ title, description, linkText, linkUrl }: EmptyStateProps) {
    return (
        <div className="text-center py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
                {title}
            </h2>
            <p className="text-lg text-foreground/60">
                {description}
                {linkText && linkUrl && (
                    <>
                        {" "}
                        <a
                            href={linkUrl}
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {linkText}
                        </a>
                    </>
                )}
            </p>
        </div>
    );
}
