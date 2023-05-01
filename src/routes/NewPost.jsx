// import { useState } from "react";
import classes from "./NewPost.module.css";
import Model from "../components/Model";
import { Form, Link, redirect } from "react-router-dom";

function NewPost() {
  // const [Name, setName] = useState("");
  // const [Text, setText] = useState("");

  // const nameChangeHandler = (e) => {
  //   setName(e.target.value);
  // };

  // const textChangeHandler = (e) => {
  //   setText(e.target.value);
  // };

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     name: Name,
  //     text: Text,
  //   };
  //   onAddPost(formData);
  //   // onCancel();
  // };

  return (
    <Model>
      <Form method="post" className={classes.form} >
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            name="text"
            // value={Text}
            // onChange={textChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            name="name"
            // value={Name}
            // onChange={nameChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="..">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Model>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData()
  const postData = Object.fromEntries(formData)
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect('/');
}
