/**
 * Home Page Component
 * 
 * This is the main landing page of the Floresta website.
 * It composes three main sections:
 * - HeroSection: Main hero with title and CTA buttons
 * - WhyFlorestaSection: Explains the motivation behind Floresta
 * - KeyFeaturesSection: Showcases the main features with cards
 * 
 * Route: / (root)
 */

import { HeroSection } from "../components/home/HeroSection";
import { WhyFlorestaSection } from "../components/home/WhyFlorestaSection";
import { KeyFeaturesSection } from "../components/home/KeyFeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section with main title and call-to-action buttons */}
      <HeroSection />

      {/* Section explaining why Floresta exists and its benefits */}
      <WhyFlorestaSection />

      {/* Section showcasing key features with visual cards */}
      <KeyFeaturesSection />
    </div>
  );
}

