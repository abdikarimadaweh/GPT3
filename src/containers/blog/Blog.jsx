import React from "react";
import { Article } from "../../components";
import { image1, image2, image3, image4, image5 } from "./imports.js";
import "./blog.css";
function Blog() {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-header">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            image={image1}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            image={image2}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={image3}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={image4}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={image5}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
