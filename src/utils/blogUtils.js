export const importAll = (r) => {
  let posts = {};
  r.keys().forEach((item) => {
    const slug = item.replace('./', '').replace('.md', '');
    posts[slug] = r(item);
  });
  return posts;
};

export const parseMarkdown = (markdownWithMeta) => {
  // Custom frontmatter parser (browser-compatible)
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdownWithMeta.match(frontmatterRegex);
  
  if (!match) {
    return {
      frontmatter: {},
      content: markdownWithMeta,
    };
  }
  
  const frontmatterText = match[1];
  const content = match[2];
  
  // Parse YAML-like frontmatter
  const frontmatter = {};
  const lines = frontmatterText.split('\n');
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      frontmatter[key] = value;
    }
  });
  
  return {
    frontmatter,
    content,
  };
};

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);
  return `${readTime} min read`;
};

export const sortPostsByDate = (posts) => {
  return posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
};

// Hardcoded posts for now - can be made dynamic later
export const getAllPosts = async () => {
  const posts = [];
  
  try {
    // For now, let's manually import the known blog post
    const spaceElevatorPost = await import('../posts/space-elevator-effect.md?raw');
    const rawContent = spaceElevatorPost.default;
    const { frontmatter, content } = parseMarkdown(rawContent);
    
    posts.push({
      slug: 'space-elevator-effect',
      frontmatter,
      content,
    });
  } catch (error) {
    console.error('Error loading posts:', error);
  }
  
  return sortPostsByDate(posts);
};

export const getPostBySlug = async (slug) => {
  try {
    const postModule = await import(`../posts/${slug}.md?raw`);
    const rawContent = postModule.default;
    const { frontmatter, content } = parseMarkdown(rawContent);
    
    return {
      slug,
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
};