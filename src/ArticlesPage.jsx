import axios from "axios";
import { useState, useEffect } from "react";
import { ArticlesIndex } from "./ArticlesIndex";

export function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/articles.json").then((response) => {
      console.log(response);
      setArticles(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      <ArticlesIndex articles={articles} />
    </main>
  );
}
