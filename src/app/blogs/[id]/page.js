import { promises as fs } from 'fs';
import path from 'path';
import BlogContent from './Blogcontent';
import blog_content from "../order.json";

export async function generateStaticParams() {
  try {
    const orderData = blog_content;
    
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
    const orderData = blog_content;
    const blogDirectories = Object.values(orderData);
    const blogDir = blogDirectories[parseInt(blogId)];

    if (!blogDir) {
      return null;
    }

    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const response = await fetch(new URL(`/blogs/${blogDir}/content.md`, baseUrl));
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const content = await response.text();
    
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