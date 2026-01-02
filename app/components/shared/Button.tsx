/**
 * Button Component
 * 
 * Reusable button component with two variants: primary and secondary.
 * Can render as a button or a link depending on the href prop.
 * 
 * Variants:
 * - primary: Solid background with theme colors (default)
 * - secondary: Outlined style with border and transparent background
 * 
 * Features:
 * - Renders as <a> tag when href is provided, <button> otherwise
 * - External links automatically open in new tab
 * - Extends native HTML button/anchor attributes
 * - Smooth transitions on hover
 * - Fully accessible (inherits button/link semantics)
 * - Flexible children (can contain text, icons, or both)
 * - Custom className support for additional styling
 * 
 * Usage:
 *   <Button variant="primary">Click me</Button>
 *   <Button variant="secondary" href="/about">Learn More</Button>
 *   <Button variant="primary" href="https://github.com">GitHub</Button>
 */

import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
};

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

type ButtonProps = {
    variant?: "primary" | "secondary";  // Button style variant
    children: ReactNode;                 // Button content (text, icons, etc.)
} & (ButtonAsButton | ButtonAsLink);

export function Button({
    variant = "primary",  // Default to primary variant
    children,
    className = "",
    ...props              // Spread remaining HTML button/anchor attributes
}: ButtonProps) {
    // Base styles applied to all button variants
    const baseStyles = "px-5 py-2.5 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center gap-2";

    // Variant-specific styles using theme CSS variables
    const variantStyles = {
        primary: "bg-btn-primary-bg text-btn-primary-text hover:opacity-90",
        secondary: "bg-btn-secondary-bg text-btn-secondary-text border border-btn-secondary-border hover:border-foreground/40"
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    // If href is provided, render as anchor tag
    if ('href' in props && props.href) {
        const { href, ...anchorProps } = props;
        const isExternal = href.startsWith('http') || href.startsWith('//');

        return (
            <a
                href={href}
                className={combinedClassName}
                {...(isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer"
                })}
                {...anchorProps}
            >
                {children}
            </a>
        );
    }

    // Otherwise, render as button
    return (
        <button
            className={combinedClassName}
            {...props as ButtonHTMLAttributes<HTMLButtonElement>}
        >
            {children}
        </button>
    );
}
