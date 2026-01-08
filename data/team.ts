/**
 * Team Members Data
 * 
 * Central data source for all team member information.
 * 
 * To add a new team member:
 * 1. Add a new object to the teamMembers array
 * 2. Include name, description, and optional socialLinks
 * 3. Social links support: linkedin, x (Twitter), youtube, github, email, discord, blog
 * 
 * Example:
 * {
 *   name: "John Doe",
 *   description: "Bitcoin developer and Floresta contributor...",
 *   socialLinks: {
 *     linkedin: "https://linkedin.com/in/johndoe",
 *     x: "https://twitter.com/johndoe",
 *     youtube: "https://youtube.com/@johndoe",
 *     github: "https://github.com/johndoe",
 *     email: "john@example.com",
 *     discord: "johndoe#1234",
 *     blog: "https://johndoe.com"
 *   }
 * }
 */

export interface SocialLinks {
    linkedin?: string;
    x?: string;
    youtube?: string;
    github?: string;
    email?: string;
    discord?: string;
    nostr?: string;
    blog?: string;
}

export interface TeamMember {
    name: string;
    description: string;
    socialLinks?: SocialLinks;
}

export const teamMembers: TeamMember[] = [
    {
        name: "Davidson Souza",
        description: "Creator and maintainer of Floresta. Working on BOSS since 2022.",
        socialLinks: {
            github: "https://github.com/Davidson-Souza",
            x: "https://x.com/Erik17192799",
            email: "mailto:me@dlsouza.dev",
            nostr: "https://njump.me/npub1ur8m24ya8nmakn38xmuwr0yy7cjgdtm6gy54mpnudgcngkgyy55qxc58yl",
            blog: "https://blog.dlsouza.lol",
        }
    },
    {
        name: "Moises Pompilio",
        description: "I'm a software developer since 2022, passionate about Bitcoin and open source projects. Since 2025, I've been working full-time on Bitcoin projects, L2 solutions, and nodes. I really enjoy following technical discussions on the subject and watching new technologies and solutions emerge in the ecosystem. I really enjoy writing code in Rust.",
        socialLinks: {
            github: "https://github.com/moisesPompilio",
            x: "https://x.com/maicomjt",
            email: "mailto:moisesalexandrep.c@gmail.com",
        }
    },
    {
        name: "João Leal",
        description: "BOSS developer mentored by Vinteum.",
        socialLinks: {
            github: "https://github.com/jaoleal",
            x: "https://x.com/jaoleall",
            email: "mailto:jgleal@protonmail.com",
        }
    },
    {
        name: "JoseSK999",
        description: "Rust developer focused on security, performance, and privacy. Works on Bitcoin stuff, explored Witnessless Sync, background in FHE, and likes nerding out about physics.",
        socialLinks: {
            github: "https://github.com/JoseSK999",
            x: "https://x.com/JoseSK999",
        }
    },
    {
        name: "Qlrd",
        description: "",
        socialLinks: {
            github: "https://github.com/qlrd",
            x: "https://x.com/qlrddev",
        }
    },
    {
        name: "Luis Schwab",
        description: "",
        socialLinks: {
            github: "https://github.com/luisschwab",
            blog: "https://luisschwab.net/",
        }
    },
];
