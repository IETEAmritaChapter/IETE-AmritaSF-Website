import { promises as fs } from 'fs';
import path from 'path';
import BlogContent from './Blogcontent';
import blog_content from "../order.json";

export async function generateStaticParams() {
  try {
    const orderData = blog_content;
    
    return Object.values(orderData).map(dir => ({
      id: dir
    })).filter(param => param.id); // Ensure id is not empty
  } catch (error) {
    
    throw error;
  }
}

async function getBlogContent(blogDir) {
  try {
    const contentPath = path.join(process.cwd(), 'public', 'Blogs', blogDir, 'content.md');
    const content = await fs.readFile(contentPath, 'utf8');
    
    return {
      blogDir,
      content
    };
  } catch (error) {
    return null;
  }
}

export default async function BlogPage(props) {
  const { params } = props; // Destructure params from props
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