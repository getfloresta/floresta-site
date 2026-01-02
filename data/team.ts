/**
 * Team Members Data
 * 
 * Central data source for all team member information.
 * 
 * To add a new team member:
 * 1. Add a new object to the teamMembers array
 * 2. Include name, description, and optional socialLinks
 * 3. Social links support: linkedin, x (Twitter), youtube
 * 
 * Example:
 * {
 *   name: "John Doe",
 *   description: "Bitcoin developer and Floresta contributor...",
 *   socialLinks: {
 *     linkedin: "https://linkedin.com/in/johndoe",
 *     x: "https://twitter.com/johndoe",
 *     youtube: "https://youtube.com/@johndoe"
 *   }
 * }
 */

export interface SocialLinks {
    linkedin?: string;
    x?: string;
    youtube?: string;
}

export interface TeamMember {
    name: string;
    description: string;
    socialLinks?: SocialLinks;
}

export const teamMembers: TeamMember[] = [
    // {
    //     name: "Name",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius ullamcorper pulvinar. Nullam tincidunt dolor accumsan, tristique turpis a, porta tortor. Ut lacus purus, aliquet nec velit eu, commodo rhoncus enim. Aenean diam erat, iaculis ut semper eu, scelerisque non arcu. Suspendisse quis malesuada libero. Duis quis ipsum mi. Cras finibus dictum odio ac fermentum. Maecenas scelerisque bibendum porta.",
    //     socialLinks: {
    //         linkedin: "https://linkedin.com",
    //         x: "https://twitter.com",
    //         youtube: "https://youtube.com"
    //     }
    // },
];
