import React from "react";

const articles = [
  {
    title: "The Roswell Incident: What Really Happened?",
    author: "John Doe",
    date: "2023-09-20",
    excerpt: "An in-depth look at the famous Roswell incident and the theories surrounding it.",
  },
  {
    title: "Top 10 UFO Sightings of All Time",
    author: "Jane Smith",
    date: "2023-08-15",
    excerpt: "A countdown of the most compelling UFO sightings ever recorded.",
  },
  // Add more articles as needed
];

const Articles = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">UFO Articles</h1>
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={index} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-sm text-muted-foreground">By {article.author} on {article.date}</p>
            <p className="mt-2">{article.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;