import React from 'react';
import Hero from './Hero';

/**
 * Hero Component Usage Examples
 * 
 * This file demonstrates various ways to use the Hero component.
 * Import this component in your pages to display a hero section.
 */

// Example 1: Basic Hero with defaults
export const BasicHero = () => {
  return <Hero />;
};

// Example 2: Custom Hero for Plumbing Service
export const PlumbingHero = () => {
  return (
    <Hero
      title="24/7 Emergency Plumbing Services"
      subtitle="Fast, Reliable, Professional - We're Here When You Need Us"
      ctaText="Request Service"
      ctaLink="#contact"
      secondaryCtaText="Call Now: (555) 123-4567"
      secondaryCtaLink="tel:+15551234567"
      showVideo={true}
      backgroundType="video"
    />
  );
};

// Example 3: Image Background Hero
export const ImageBackgroundHero = () => {
  return (
    <Hero
      title="Expert Drain Cleaning"
      subtitle="Clear Your Drains in Minutes, Not Hours"
      ctaText="Get a Free Quote"
      ctaLink="#quote"
      secondaryCtaText="Learn More"
      secondaryCtaLink="#services"
      backgroundType="image"
      showVideo={false}
    />
  );
};

// Example 4: Simple Hero without Secondary CTA
export const SimpleHero = () => {
  return (
    <Hero
      title="Professional Plumbing Solutions"
      subtitle="Serving Your Community Since 2005"
      ctaText="Contact Us"
      ctaLink="#contact"
      secondaryCtaText=""
      backgroundType="video"
    />
  );
};

// Example 5: Custom Styled Hero
export const CustomStyledHero = () => {
  return (
    <Hero
      title="Emergency Services Available"
      subtitle="No Job Too Big or Too Small"
      ctaText="Schedule Now"
      ctaLink="#schedule"
      secondaryCtaText="View Services"
      secondaryCtaLink="#services"
      className="custom-hero-class"
      backgroundType="video"
    />
  );
};

/**
 * Usage in a Page Component:
 * 
 * import { PlumbingHero } from './components/Hero.example';
 * 
 * function HomePage() {
 *   return (
 *     <main>
 *       <PlumbingHero />
 *       <section>
 *         // ... rest of your page content
 *       </section>
 *     </main>
 *   );
 * }
 */
