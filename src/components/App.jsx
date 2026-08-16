// import React from "react";
import blogData from "../data/blog";
import Header from "./Header.jsx"
import About from "./About.jsx"
import ArticleList from "./ArticleList.jsx";

console.log("Blog: ",blogData);

function App() {
  return (
    <div className="App">
      <Header about = {blogData.about}/>
      <About image = {blogData.image}
        about = {blogData.name}
      />
      <ArticleList posts = {blogData.posts}/>
    </div>
  );
}

export default App;
