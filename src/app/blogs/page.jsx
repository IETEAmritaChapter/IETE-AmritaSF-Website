"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../styles/Blog.css";
import order from "./order.json";

const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const orderResponse = order;
        const orderData = order;
        const blogDirectories = Object.values(orderData);

        const blogPromises = blogDirectories.map(async (dir) => {
          const response = await fetch(`/Blogs/${dir}/content.md`);
          const text = await response.text();
          const content = text.split("------");

          if (content.length < 3) {
            throw new Error("Invalid content format");
          }

          const metadata = content[1]
            .trim()
            .split("\n")
            .reduce((acc, line) => {
              const [key, value] = line.split(":").map((item) => item.trim());
              console.log(key,value)
              acc[key.toLowerCase()] = value
                .replace(/["\[\]]/g, "")
                .split(",")
                .map((item) => item.trim());
              return acc;
            }, {});

          metadata.preview_image = `/Blogs/${dir}${metadata.preview_image}`;
          return { metadata, dir };
        });

        const blogResults = await Promise.all(blogPromises);

        if (blogResults.length > 0) {
          blogResults[0].metadata.tags.push("Freshly Cooked"); // Mark the latest blog as "New"
        }

        setBlogs(blogResults);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen text-white flex justify-center items-center">
        <div className="animate-pulse text-2xl">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-7xl font-bold text-center mb-10 [font-family:var(--font-montserratb)]">
          BLOGS<span className="text-[#FF5252]">.</span>
        </h1>

        <div
          className={`grid ${
            blogs.length === 1
              ? "grid-cols-1 place-items-center"
              : "md:grid-cols-3 grid-cols-1"
          }`}
        >
          {blogs.map((blog, index) => {
            const isNew = blog.metadata.tags.includes("New");
            const showVerticalLine = blogs.length > 1 && (index + 1) % 3 !== 0;
            console.log(isNew);

            return (
              <div
                key={index}
                className="relative w-full md:ml-4 md:pr-4 py-3 md:w-auto"
              >
                <Link href={`/blogs/${blog.dir}`}>
                  <div
                    className="bg-[#1c1917] overflow-hidden  transform transition-transform duration-300 ease-in-out
                             hover:-translate-y-1 hover:scale-103 m-4 relative"
                  >
                    {isNew && (
                      <span className="absolute top-2 left-2 bg-red text-white text-xs font-bold px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                    <div className="relative">
                      <img
                        src={blog.metadata.preview_image}
                        alt={blog.metadata.title}
                        className="w-full rounded-[20px] h-max object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
                    </div>

                    <div className="mt-3 mb-2">
                      <h2 className="text-3xl [font-family:var(--font-montserratb)] mb-2 text-white">
                        {blog.metadata.title}
                      </h2>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {blog.metadata.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-block [font-family:var(--font-montserrat)] bg-[#FF5252] text-white text-base px-3 py-1 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-300 text-lg mb-4 line-clamp-3 [font-family:var(--font-montserrat)]">
                        {blog.metadata.condense}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-400 text-lg [font-family:var(--font-montserrat)]">
                          {blog.metadata.date}
                        </p>
                        <p className="text-[#FF5252] text-lg [font-family:var(--font-montserrat)]  font-semibold">
                          Cooked By : {blog.metadata.author} 🧑‍🍳
                        </p>
                      </div>
                    </div>
                  </div>

                  {showVerticalLine && (
                    <div className="absolute top-[5%] font-bold right-0 h-[90%] w-[2.5px] bg-white hidden md:block" />
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
