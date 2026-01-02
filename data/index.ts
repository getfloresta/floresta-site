/**
 * Data Layer Index
 * 
 * Central export file for all data modules.
 * This provides a convenient single import point for components.
 * 
 * Usage:
 *   import { teamMembers, supportersData, features } from '@/data';
 * 
 * Instead of:
 *   import { teamMembers } from '@/data/team';
 *   import { supportersData } from '@/data/supporters';
 *   import { features } from '@/data/features';
 */

// Team data exports
export { teamMembers } from './team';
export type { TeamMember, SocialLinks } from './team';

// Supporters data exports
export { supportersData } from './supporters';
export type { Supporter, YearSupporters } from './supporters';

// Features data exports
export { features } from './features';
export type { Feature } from './features';

// Navigation data exports
export { 
    mainNavigation, 
    communityLinks, 
    footerLinks, 
    socialLinks, 
    ctaLinks 
} from './navigation';
export type { NavigationLink, ExternalLink } from './navigation';
