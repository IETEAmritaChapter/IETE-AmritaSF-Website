// page.js
import { promises as fs } from 'fs';
import path from 'path';
import BlogContent from './Blogcontent';

export async function generateStaticParams() {
  try {
    const orderFile = await fs.readFile(path.join(process.cwd(), 'public', 'blogs', 'order.json'), 'utf8');
    const orderData = JSON.parse(orderFile);
    
    return Object.keys(orderData).map(id => ({
      id: id.toString()
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    throw error;
  }
}

async function getBlogContent(blogId) {
  try {
    const orderFile = await fs.readFile(path.join(process.cwd(), 'public', 'blogs', 'order.json'), 'utf8');
    const orderData = JSON.parse(orderFile);
    const blogDirectories = Object.values(orderData);
    const blogDir = blogDirectories[parseInt(blogId)];

    if (!blogDir) {
      return null;
    }

    const contentPath = path.join(process.cwd(), 'public', 'blogs', blogDir, 'content.md');
    const content = await fs.readFile(contentPath, 'utf8');
    
    return {
      blogDir,
      content
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

export default async function BlogPage(props) {
  const params = await props.params; // Await the params
  const blogData = await getBlogContent(params.id);
  
  if (!blogData) {
    return (
      <div className="text-white text-center py-16 text-3xl">
        Blog not found.
      </div>
    );
  }

  return <BlogContent blogData={blogData} />;
}
