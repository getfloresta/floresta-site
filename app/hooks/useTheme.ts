/**
 * Theme Detection Hook
 * 
 * Detects and tracks the current theme (light/dark) of the application.
 * 
 * Features:
 * - Automatically detects initial theme on mount
 * - Observes real-time theme changes via MutationObserver
 * - Returns boolean isDark state for conditional rendering
 * - Syncs with document root element's "dark" class
 * 
 * Usage:
 * const isDark = useTheme();
 * // Use isDark to conditionally render theme-specific content
 */

"use client";

import { useState, useEffect } from "react";

export function useTheme() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Verify initial theme
        const checkTheme = () => {
            const isDarkMode = document.documentElement.classList.contains("dark");
            setIsDark(isDarkMode);
        };

        checkTheme();

        // Observe changes to the theme by watching class changes on the root element
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"]
        });

        return () => observer.disconnect();
    }, []);

    return isDark;
}
