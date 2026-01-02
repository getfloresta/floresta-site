# Contributing to Floresta Blog

## How to Add a New Blog Post

We welcome contributions to our blog! Follow these steps to submit a new post:

### 1. Create Your Post

1. Navigate to the `content/posts/` directory
2. Use `example.md` as a template
3. Create a new file: `your-post-slug.md`

### 2. Post Structure

Your markdown file must include **frontmatter** (metadata) at the top:

```markdown
---
title: "Your Post Title Here"
author: "Your Name"
date: "YYYY-MM-DD"
tags: ["Tag1", "Tag2", "Tag3"]
image: "/images/backgrounds/abstract/hero.svg"
excerpt: "A brief description of your post (shown in cards)"
---

Your content here...
```

### 3. Frontmatter Fields

| Field     | Required | Description                   | Example                      |
| --------- | -------- | ----------------------------- | ---------------------------- |
| `title`   | ✅ Yes   | Post title                    | `"Understanding Utreexo"`    |
| `author`  | ✅ Yes   | Your name                     | `"John Doe"`                 |
| `date`    | ✅ Yes   | Publication date (YYYY-MM-DD) | `"2024-12-25"`               |
| `tags`    | ✅ Yes   | Array of tags                 | `["Bitcoin", "Utreexo"]`     |
| `image`   | ✅ Yes   | Featured image path           | `"/images/blog/my-post.jpg"` |
| `excerpt` | ✅ Yes   | Short description (1-2 lines) | `"Learn how Utreexo..."`     |

### 4. Writing Content

You can use:

- **Markdown** syntax for formatting
- **HTML** for custom elements (like CTA buttons)
- **Code blocks** with syntax highlighting

#### Example Content:

```markdown
---
title: "Understanding Utreexo"
author: "Satoshi Nakamoto"
date: "2024-12-25"
tags: ["Bitcoin", "Utreexo", "Technology"]
image: "/images/blog/utreexo.jpg"
excerpt: "A deep dive into how Utreexo makes Bitcoin nodes more efficient."
---

<div class="cta-section">
  <p class="cta-text">Join our community and learn more:</p>
  <a href="#" class="cta-btn">Join now</a>
</div>

<p class="author-line">By Satoshi Nakamoto and contributors.</p>

## Introduction

Utreexo is a hash-based accumulator with **efficient** proofs...

### Key Features

- Compact state
- Fast validation
- Scalable design

## Code Example

\`\`\`rust
fn verify_proof(proof: &Proof) -> bool {
// Implementation here
true
}
\`\`\`

## Conclusion

Utreexo represents a significant advancement...
```

### 5. Images

- Place images in `/public/images/blog/`
- Reference them as: `/images/blog/your-image.jpg`
- Supported formats: JPG, PNG, SVG, WebP

### 6. Special Elements

#### CTA Button (Call-to-Action)

```html
<div class="cta-section">
  <p class="cta-text">Your message here</p>
  <a href="#" class="cta-btn">Button text</a>
</div>
```

#### Author Line

```html
<p class="author-line">By Your Name and Co-author.</p>
```

### 7. Submit Your Post

1. **Fork** the repository
2. **Create** your post file in `content/posts/`
3. **Test** locally: `pnpm dev` and visit `http://localhost:3000/blog`
4. **Commit** your changes
5. **Open a Pull Request** with:
   - Clear title: `"Add blog post: Your Title"`
   - Description of your post
   - Link to preview (if available)

### 8. Review Process

- Maintainers will review your post
- They may request changes or improvements
- Once approved, your post will be published!

### 9. Content Guidelines

✅ **Do:**

- Write clear, concise content
- Use proper grammar and spelling
- Include code examples when relevant
- Add images to illustrate concepts
- Attribute sources and references

❌ **Don't:**

- Copy content without attribution
- Use offensive language
- Include spam or promotional content
- Submit incomplete posts

### 10. Need Help?

- Check `example.md` for a complete template
- Open an issue if you have questions
- Join our community for support

---

Thank you for contributing to Floresta! 🌱
