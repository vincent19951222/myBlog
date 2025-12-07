import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  xp: number;
  level: string;
  readTime?: string;
  image?: string;
  gif?: string;
  content: string;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(postsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { frontmatter } = await compileMDX<{ 
    title: string; 
    date: string; 
    excerpt: string; 
    xp: number; 
    level: string; 
    readTime?: string; 
    image?: string; 
    gif?: string; 
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return {
    slug: realSlug,
    title: frontmatter.title,
    date: frontmatter.date,
    excerpt: frontmatter.excerpt,
    xp: frontmatter.xp,
    level: frontmatter.level,
    readTime: frontmatter.readTime,
    image: frontmatter.image,
    gif: frontmatter.gif,
    content: fileContent,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    files.filter(file => file.endsWith('.mdx')).map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      const { frontmatter } = await compileMDX<{ 
        title: string; 
        date: string; 
        excerpt: string; 
        xp: number; 
        level: string; 
        readTime?: string; 
        image?: string; 
        gif?: string; 
      }>({
        source: fileContent,
        options: { parseFrontmatter: true },
      });

      return {
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        excerpt: frontmatter.excerpt,
        xp: frontmatter.xp,
        level: frontmatter.level,
        readTime: frontmatter.readTime,
        image: frontmatter.image,
        gif: frontmatter.gif,
        content: fileContent,
      };
    })
  );

  return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}
