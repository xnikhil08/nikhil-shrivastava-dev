# Nikhil Shrivastava - Personal Website

A modern, responsive personal website for Nikhil Shrivastava, showcasing technical leadership experience and insights through a professional blog platform.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Blog System**: Markdown-based blog with frontmatter support
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Professional Layout**: Clean, professional design with smooth navigation
- **Fast Loading**: Optimized bundle splitting and lazy loading

## 🛠 Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Blog Engine**: React Markdown, Gray Matter
- **Fonts**: Inter (Google Fonts)
- **Deployment Ready**: Vercel-optimized

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.jsx      # Main layout with navigation
│   ├── BlogCard.jsx    # Blog post preview cards
│   └── BlogPost.jsx    # Individual blog post renderer
├── pages/              # Main application pages
│   ├── Home.jsx        # Homepage with hero and sections
│   ├── About.jsx       # Detailed about page
│   ├── Blog.jsx        # Blog listing page
│   └── Contact.jsx     # Contact form and information
├── posts/              # Markdown blog posts
│   └── space-elevator-effect.md
├── utils/              # Utility functions
│   └── blogUtils.js    # Blog processing utilities
└── index.css           # Global styles and Tailwind imports
```

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run preview
```

## 📝 Adding Blog Posts

1. Create a new markdown file in `src/posts/`
2. Add frontmatter at the top:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2025-01-01"
   category: "Technology"
   readTime: "5 min read"
   excerpt: "Brief description of your post..."
   slug: "your-post-slug"
   ---

   # Your content here
   ```

3. The post will automatically appear in the blog listing

## 🎨 Customization

### Styling
- Update `tailwind.config.js` for custom colors and themes
- Modify `src/index.css` for global styles
- Edit component files for specific styling changes

### Content
- Update personal information in page components
- Modify navigation items in `src/components/Layout.jsx`
- Update SEO meta tags in `index.html`

### Blog System
- Customize blog utilities in `src/utils/blogUtils.js`
- Modify blog card design in `src/components/BlogCard.jsx`
- Update blog post rendering in `src/components/BlogPost.jsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration needed

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your preferred hosting platform

## 📧 Contact

For questions or collaboration opportunities, reach out through the contact form on the website or connect on social media.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and Tailwind CSS