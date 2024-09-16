import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postContext } from "./contexts/PostContexts";

export default function PostDetails() {
  const { postId } = useParams();
  console.log(postId);
  let posts = useContext(postContext);
  console.log("debuuddddddddduuuug", posts);
  let post = posts.find((p) => {
    return p.id == postId;
  });
  console.log("debuuuuuug", post);
  if (post) {
    return (
      <>
        <h1>This is {post.title}</h1>
        <p>{post.body}</p>

        {/* <h1>dwqdw{title}</h1>
        <p>{body}</p> */}
      </>
    );
  } else {
    return (
      <>
        <h2>The post with id: {postId} doesn't exist</h2>
      </>
    );
  }
}
