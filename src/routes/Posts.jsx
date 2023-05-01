import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";
// import MainHeader from "../components/MainHeader";
// import { useState } from "react";

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);
  // const showModelHandler = () => {
  //   setModalIsVisible(true);
  // };
  // const hideModelHandler = () => {
  //   setModalIsVisible(false);
  // };

  return (
    <>
      {/* <MainHeader onCreatePost={showModelHandler} /> */}
      <main>
        {/* <PostList isPosting={modalIsVisible} onStopPosting={hideModelHandler} /> */}
        <Outlet />
        <PostList />
      </main>
    </>
  );
}

export default Posts;


export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts
}