import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Posts.css"
import { useParams } from "react-router-dom";

function Posts() {
  const [filtredPosts, setFiltredPosts] = useState([]);
  const {id} = useParams();
  

  useEffect(function () {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => setFiltredPosts(res.data));
  }, []);
  return (
    <div>
      <h2>Posts de l'utlisateur:{id}</h2>
      <h4>nombres de posts {filtredPosts.length}</h4>
      {filtredPosts.map(function (post, index) {
        return (
          <div key={index} className="mycard">
            <div className="mycontainer">
                <h3>{post.id}</h3>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
