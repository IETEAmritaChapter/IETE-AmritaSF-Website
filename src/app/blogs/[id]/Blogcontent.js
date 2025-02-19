/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Copy, Check } from "lucide-react";

const BlogContent = ({ blogData }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  useEffect(() => {
    const processBlogData = () => {
      try {
        const content = blogData.content.split("------");

        if (content.length < 3) {
          throw new Error("Invalid content format");
        }

        const metadata = content[1]
            .trim()
            .split("\n")
            .reduce((acc, line) => {
              const [key, value] = line.split(":").map((item) => item.trim());
              console.log(key, value);
              if (key && value) {
                acc[key.toLowerCase()] = value
                  .replace(/["\[\]]/g, "")
                  .split(",")
                  .map((item) => item.trim());
              }
              return acc;
            }, {});

        metadata.preview_image = `/Blogs/${blogData.blogDir}${metadata.preview_image}`;

        setBlog({ metadata, content: content[2].trim() });
        setLoading(false);
      } catch (error) {
        console.error("Error processing blog data:", error);
        setLoading(false);
      }
    };

    if (blogData) {
      processBlogData();
    }
  }, [blogData]);

  const components = {
    h2: ({ children }) => (
      <h2 className="!text-4xl [font-family:var(--font-montserratb)] !font-bold !mt-8 !mb-4 !text-white text-center">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="!text-3xl !font-semibold [font-family:var(--font-montserratb)] !mt-6 !mb-3 !text-white text-center">{children}</h3>
    ),
    img: ({ node, ...props }) => (
      <div className="flex justify-center">
        <img {...props} alt={props.alt || ''} className="!max-w-full !h-auto" />
      </div>
    ),
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      const code = String(children).replace(/\n$/, '');

      if (!inline && match) {
        return (
          <div className="relative group">
            <div className="absolute right-2 top-2">
              <button
                onClick={() => copyToClipboard(code)}
                className="p-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                aria-label="Copy code"
              >
                {copiedCode === code ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-300" />
                )}
              </button>
            </div>
            <pre className="!bg-gray-800 !p-4 !rounded-lg !overflow-x-auto">
              <code className={className} {...props}>
                {code}
              </code>
            </pre>
          </div>
        );
      }

      return (
        <code className="!bg-gray-800 !px-1 !py-0.5 !rounded" {...props}>
          {children}
        </code>
      );
    },
    p: ({ children }) => (
      <p className="!text-lg [font-family:var(--font-montserrat)] text-justify !leading-relaxed !mb-6 !text-gray-300 ">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="!list-disc [font-family:var(--font-montserrat)] !list-inside !space-y-2 !mb-6 ">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="!text-lg [font-family:var(--font-montserrat)] !leading-relaxed !text-gray-300">{children}</li>
    ),
  };

  if (loading) {
    return (
      <div className="min-h-screen text-white flex justify-center items-center">
        <div className="animate-pulse text-2xl">Loading blog...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-white text-center py-16 text-3xl">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="text-white container mx-auto px-4 py-16">
      <div className="mb-6">
        <div className="mx-auto w-full max-w-2xl">
          
          <img
            src={blog.metadata.preview_image}
            alt={blog.metadata.title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl [font-family:var(--font-montserratb)] font-bold text-center mb-8">
        {blog.metadata.title}
      </h1>
      <p className="text-center text-gray-400 mb-6">{blog.metadata.date} </p>
      <p className="text-center text-gray-400 mb-6">- by {blog.metadata.author} </p>

      

      <div className="prose prose-invert prose-headings:!m-0 md:w-[50%] mx-auto ">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={components}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogContent;