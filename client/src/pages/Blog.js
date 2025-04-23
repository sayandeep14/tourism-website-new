import React from "react";
import "./Blog.css";

const Blog = () => {
  const posts = [
    {
      title: "Top 5 Beach Destinations",
      date: "Apr 1, 2025",
      summary: "Relax and explore stunning coastlines across the globe.",
    },
    {
      title: "Travel Safety Tips",
      date: "Mar 15, 2025",
      summary: "How to stay safe and make the most of your trip.",
    },
    {
      title: "Packing Like a Pro",
      date: "Feb 28, 2025",
      summary: "What to bring and what to leave behind.",
    },
  ];

  return (
    <div className="blog-page">
      <h2>Travel Blog</h2>
      {posts.map((post, i) => (
        <div key={i} className="blog-post">
          <h3>{post.title}</h3>
          <p className="blog-date">{post.date}</p>
          <p>{post.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
