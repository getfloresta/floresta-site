/**
 * Theme Toggle Component
 * 
 * Allows users to switch between light and dark themes.
 * 
 * Features:
 * - Persists theme preference to localStorage
 * - System theme detection as fallback
 * - Smooth transitions between themes
 * - Accessible with proper ARIA labels
 * - Prevents flash of unstyled content with mounted check
 * - Dynamic icon (sun for light mode, moon for dark mode)
 * 
 * Theme Management:
 * - Reads saved preference from localStorage on mount
 * - Falls back to system preference if no saved theme
 * - Applies theme by toggling 'light' and 'dark' classes on <html>
 * - CSS variables in globals.css respond to these classes
 * 
 * Implementation Notes:
 * - Client component (uses useState and useEffect)
 * - Shows placeholder button until hydration complete to prevent layout shift
 * - Theme icons use Next.js Image component with theme-aware paths
 */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Theme = "light" | "dark" | "system";

export function ThemeToggle() {
    // Current theme state (light, dark, or system)
    const [theme, setTheme] = useState<Theme>("system");
    // Prevents hydration mismatch by only rendering after mount
    const [mounted, setMounted] = useState(false);

    // Initialize theme on component mount
    useEffect(() => {
        setMounted(true);
        // Try to load saved theme from localStorage
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
            applyTheme(savedTheme);
        } else {
            const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            applyTheme(isDark ? "dark" : "light");
        }
    }, []);

    /**
     * Apply theme by manipulating CSS classes on root element
     * The CSS in globals.css responds to these classes with appropriate variables
     */
    const applyTheme = (newTheme: Theme) => {
        const root = document.documentElement;

        if (newTheme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light");
        } else if (newTheme === "light") {
            root.classList.add("light");
            root.classList.remove("dark");
        } else {
            // system
            root.classList.remove("dark", "light");
            const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (isDark) {
                root.classList.add("dark");
            }
        }
    };

    /**
     * Toggle between light and dark themes
     * Saves preference to localStorage for persistence
     */
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    /**
     * Get the actual theme being displayed
     * Resolves 'system' to actual light/dark based on OS preference
     */
    const getCurrentTheme = (): "light" | "dark" => {
        if (theme === "system") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return theme;
    };


    // Show placeholder button during SSR/hydration to prevent layout shift
    if (!mounted) {
        return (
            <button
                className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
                aria-label="Toggle theme"
            >
                <div className="w-5 h-5" />
            </button>
        );
    }

    const currentTheme = getCurrentTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <Image
                src={currentTheme === "light" ? "/images/icons/system/theme/sun.svg" : "/images/icons/system/theme/moon.svg"}
                alt={currentTheme === "light" ? "Light mode" : "Dark mode"}
                width={34}
                height={34}
            />
        </button>
    );
}
