# 🌱 Floresta Website

Official website for Floresta - A Bitcoin full node implementation with Utreexo support.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 📋 Table of Contents

- [Features](#-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Development Guidelines](#-development-guidelines)
- [Blog System](#-blog-system)
- [Commit Convention](#-commit-convention)
- [Pull Request Process](#-pull-request-process)
- [License](#-license)

## ✨ Features

- 🎨 Modern, responsive design with dark/light theme support
- 📝 Markdown-based blog system for community contributions
- ⚡ Built with Next.js 16 App Router for optimal performance
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS v4 for styling
- 🔄 Dynamic routing for blog posts
- 🌓 Theme persistence with localStorage
- 📱 Mobile-first responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_ORG/floresta-site.git
   cd floresta-site
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
floresta-site/
├── app/                          # Next.js App Router
│   ├── (pages)/                  # Route group for pages
│   │   ├── blog/                 # Blog routes
│   │   │   ├── [slug]/          # Dynamic blog post pages
│   │   │   └── page.tsx         # Blog listing page
│   │   ├── team/                # Team page
│   │   ├── supporters/          # Supporters page
│   │   └── page.tsx             # Home page
│   ├── components/              # React components
│   │   ├── shared/              # Shared components (Button, ThemeToggle)
│   │   ├── layout/              # Layout components (Navbar, Footer)
│   │   ├── home/                # Home page components
│   │   ├── blog/                # Blog components
│   │   ├── team/                # Team components
│   │   └── supporters/          # Supporters components
│   ├── hooks/                   # Custom React hooks
│   │   └── useTheme.ts         # Theme detection hook
│   ├── globals.css             # Global styles and CSS variables
│   ├── layout.tsx              # Root layout
│   └── favicon.ico             # Site favicon
├── content/                     # Content files
│   └── posts/                  # Blog posts (Markdown)
│       ├── examples.md         # Template for contributors
│       └── *.md                # Published posts
├── lib/                        # Utility functions
│   └── posts.ts               # Blog post utilities
├── public/                     # Static assets
│   └── images/                # Image assets
│       ├── icons/             # SVG icons
│       ├── illustrations/     # 3D illustrations
│       └── backgrounds/       # Background images
├── CONTRIBUTING.md            # General contribution guide
├── CONTRIBUTING_BLOG.md       # Blog contribution guide
├── COLORS.md                  # Color palette documentation
└── README.md                  # This file
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Types of Contributions

1. **Blog Posts** - Share knowledge about Bitcoin, Utreexo, or related topics
2. **Bug Fixes** - Found a bug? Submit a fix!
3. **Features** - Implement new features or improve existing ones
4. **Documentation** - Improve documentation or add examples
5. **Design** - Enhance UI/UX or add new visual elements

### Quick Start for Contributors

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test locally**
   ```bash
   pnpm dev
   ```
5. **Commit with conventional format** (see below)
6. **Push and create a Pull Request**

For detailed guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md)

## 🛠️ Development Guidelines

### Component Structure

Components should follow this structure:

```tsx
// app/components/category/ComponentName.tsx
import { ComponentProps } from "./types"; // if needed

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Component logic
  return <div className="...">{/* JSX */}</div>;
}
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `BlogPostCard.tsx`)
- **Utilities**: camelCase (e.g., `posts.ts`)
- **Pages**: lowercase `page.tsx`
- **Styles**: lowercase (e.g., `globals.css`)

### Code Style

- Use TypeScript for all new files
- Use functional components with hooks
- Prefer named exports over default exports for components
- Use Tailwind CSS classes for styling
- Follow the existing code structure and patterns

### Theme System

The site uses CSS custom properties for theming:

```css
/* Light theme */
:root {
  --background: #ffffff;
  --foreground: #262626;
  --primary: #346c60;
  /* ... */
}

/* Dark theme */
:root.dark {
  --background: #14231f;
  --foreground: #dcefeb;
  --primary: #abdcd2;
  /* ... */
}
```

### Adding New Pages

1. Create a folder in `app/(pages)/your-page/`
2. Add `page.tsx` inside
3. Create components in `app/components/your-page/`
4. Update navigation in `Navbar.tsx` if needed

## 📝 Blog System

The blog uses Markdown files with frontmatter metadata.

### Adding a Blog Post

1. Create a new `.md` file in `content/posts/`
2. Use `examples.md` as a template
3. Include required frontmatter:

   ```markdown
   ---
   title: "Your Post Title"
   author: "Your Name"
   date: "YYYY-MM-DD"
   tags: ["Tag1", "Tag2"]
   image: "/images/your-image.jpg"
   excerpt: "Brief description"
   ---

   Your content here...
   ```

For detailed blog contribution guidelines, see [CONTRIBUTING_BLOG.md](CONTRIBUTING_BLOG.md)

## 📦 Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples

```bash
# Feature
git commit -m "feat(blog): add markdown support for blog posts"

# Bug fix
git commit -m "fix(navbar): resolve mobile menu closing issue"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Style
git commit -m "style(footer): adjust spacing and alignment"

# Refactor
git commit -m "refactor(components): extract shared button component"
```

### Scope Examples

- `blog`: Blog-related changes
- `navbar`: Navbar component
- `footer`: Footer component
- `theme`: Theme system
- `home`: Home page
- `team`: Team page
- `supporters`: Supporters page
- `ui`: General UI changes
- `deps`: Dependencies

## 🔄 Pull Request Process

### Before Submitting

1. ✅ Test your changes locally
2. ✅ Ensure no console errors
3. ✅ Check responsive design (mobile/tablet/desktop)
4. ✅ Test dark/light theme if applicable
5. ✅ Update documentation if needed
6. ✅ Follow commit conventions

### PR Title Format

Use the same format as commits:

```
feat(blog): add RSS feed support
fix(navbar): resolve scroll detection on mobile
docs: update contributing guidelines
```

### PR Description Template

```markdown
## Description

Brief description of what this PR does

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made

- Change 1
- Change 2
- Change 3

## Screenshots (if applicable)

Add screenshots for UI changes

## Testing

Describe how to test your changes

## Checklist

- [ ] My code follows the project's style guidelines
- [ ] I have tested my changes locally
- [ ] I have updated the documentation
- [ ] My commits follow the conventional commit format
```

### Review Process

1. **Automated Checks**: CI/CD will run automatically
2. **Code Review**: Maintainers will review your code
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, a maintainer will merge

### After Merge

- Your changes will be deployed automatically
- You'll be credited in the contributors list
- Thank you for contributing! 🎉

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Markdown processing with [gray-matter](https://github.com/jonschlinkert/gray-matter) and [react-markdown](https://github.com/remarkjs/react-markdown)

## 📞 Contact

- **Website**: [floresta.io](https://floresta.io)
- **GitHub**: [github.com/YOUR_ORG/floresta](https://github.com/YOUR_ORG/floresta)
- **Twitter**: [@floresta_btc](https://twitter.com/floresta_btc)

---

Made with ❤️ by the Floresta community
