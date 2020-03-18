//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

import dummyData from "../../dummy-data"; 

const PostsPage = () => {

  const [user] = useState(dummyData); 
  console.log(user); 

  return (
    <div className="posts-container-wrapper">
      {user.map(u => (
        <Post post={u}/> 
      ))}
    </div>
  );
};

export default PostsPage;

