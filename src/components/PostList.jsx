import { useLoaderData } from "react-router-dom";
import Post from "./Post";
// import NewPost from "../routes/NewPost";
// import Model from "./Model";
import classes from "./PostList.module.css";
// import { useEffect, useState } from "react";

const PostList = () => {
  // does the same thing as useEffect
  const posts = useLoaderData();
  
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     const response = await fetch("http://localhost:8080/posts");
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  // function addPostHandler(postData) {
  //   // merges new post data with the existing post data
  //   // not optimal
  //   // setPosts([postData, ...posts])
  //   // optimal
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // }

  return (
    <>
      {/* {isPosting && (
        <Model onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Model>
      )} */}
      { posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post author={post.name} id={post.id} body={post.text} key={post.id} />
          ))}
        </ul>
      )}
      { posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
        </div>
      )}
      {/* {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>
        </div>
      )} */}
    </>
  );
};

export default PostList;
