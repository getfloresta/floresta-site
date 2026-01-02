# Contributing to Floresta Website

Thank you for your interest in contributing to Floresta! This document provides guidelines for contributing to the website codebase.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Component Guidelines](#component-guidelines)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)

## Code of Conduct

By participating in this project, you agree to:

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community

## Getting Started

1. **Check existing issues** - Look for open issues or create a new one
2. **Discuss first** - For major changes, discuss your idea in an issue first
3. **Fork & Clone** - Fork the repo and clone it locally
4. **Create a branch** - Use a descriptive branch name

## Development Setup

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm
- Git

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/floresta-site.git
cd floresta-site

# Add upstream remote
git remote add upstream https://github.com/YOUR_ORG/floresta-site.git

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Project Commands

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run linter

# Cleaning
rm -rf .next      # Clear Next.js cache
```

## How to Contribute

### 1. Choose What to Work On

- **Bug Fixes**: Check issues labeled `bug`
- **Features**: Look for `enhancement` or `feature` labels
- **Good First Issues**: Tagged as `good first issue`
- **Documentation**: Labeled as `documentation`

### 2. Create a Branch

```bash
git checkout -b type/description

# Examples:
git checkout -b feat/add-rss-feed
git checkout -b fix/navbar-mobile-menu
git checkout -b docs/update-readme
```

### 3. Make Your Changes

Follow the guidelines in this document and the README.

### 4. Test Your Changes

```bash
# Run the dev server
pnpm dev

# Check in browser
# - Desktop view
# - Mobile view (use DevTools)
# - Dark/Light theme
# - All affected pages
```

### 5. Commit Your Changes

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add .
git commit -m "feat(scope): description"
```

### 6. Push and Create PR

```bash
git push origin your-branch-name
```

Then create a Pull Request on GitHub.

## Component Guidelines

### Component Structure

```tsx
// app/components/category/ComponentName.tsx
interface ComponentNameProps {
  prop1: string;
  prop2?: number; // Optional props
}

export function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // 1. Hooks at the top
  const [state, setState] = useState();

  // 2. Functions
  const handleClick = () => {
    // ...
  };

  // 3. Render
  return <div className="...">{/* JSX */}</div>;
}
```

### Best Practices

- ✅ Use TypeScript interfaces for props
- ✅ Use functional components with hooks
- ✅ Keep components small and focused
- ✅ Extract reusable logic into custom hooks
- ✅ Use semantic HTML
- ✅ Make components accessible (ARIA labels)
- ❌ Don't use `any` type
- ❌ Don't mix logic and presentation

### File Organization

```
app/components/
├── shared/          # Reusable across the site
│   ├── Button.tsx
│   └── ThemeToggle.tsx
├── layout/          # Layout components
│   ├── Navbar.tsx
│   └── Footer.tsx
└── [page-name]/     # Page-specific components
    └── Component.tsx
```

## Styling Guidelines

### Tailwind CSS Classes

```tsx
// ✅ Good - Organized, readable
<div className="flex items-center gap-4 px-6 py-4 bg-background border border-foreground/10 rounded-lg hover:bg-primary/5 transition-colors">

// ❌ Bad - Too long, hard to read
<div className="flex items-center gap-4 px-6 py-4 bg-background border border-foreground/10 rounded-lg hover:bg-primary/5 transition-colors text-lg font-medium text-foreground/90 leading-relaxed">
```

### Use CSS Variables

```tsx
// ✅ Good - Uses theme variables
<div className="bg-background text-foreground">

// ❌ Bad - Hardcoded colors
<div style={{ backgroundColor: '#FFFFFF', color: '#262626' }}>
```

### Responsive Design

```tsx
// Mobile-first approach
<div className="text-base md:text-lg lg:text-xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
```

### Theme-Aware Styling

```tsx
// Use dark: modifier
<div className="bg-background dark:bg-background">
<p className="text-foreground/90 dark:text-foreground/80">
```

## Testing

### Manual Testing Checklist

Before submitting a PR, test:

- [ ] Desktop (1920x1080)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Dark theme
- [ ] Light theme
- [ ] All links work
- [ ] No console errors
- [ ] Images load correctly
- [ ] Responsive menu works

### Browser Testing

Test in at least:

- Chrome/Edge
- Firefox
- Safari (if on Mac)

## Submitting Changes

### Pull Request Checklist

- [ ] Branch is up to date with main
- [ ] Code follows project style
- [ ] No console warnings/errors
- [ ] Tested on multiple screen sizes
- [ ] Tested dark/light themes
- [ ] Commits follow convention
- [ ] PR description is complete

### PR Description Template

```markdown
## What does this PR do?

Brief description

## Type

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation

## Changes

- Change 1
- Change 2

## Screenshots

(if UI changes)

## Testing Steps

1. Step 1
2. Step 2

## Related Issues

Fixes #123
```

### After Submitting

- **Be responsive** - Reply to review comments
- **Make changes** - Address requested changes
- **Be patient** - Reviews take time
- **Learn** - Every review is a learning opportunity

## Questions?

- **General Questions**: Open a discussion on GitHub
- **Bug Reports**: Create an issue with the `bug` label
- **Feature Requests**: Create an issue with the `enhancement` label

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

---

Thank you for contributing to Floresta! 🌱
