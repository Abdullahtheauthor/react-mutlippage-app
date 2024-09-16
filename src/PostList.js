import { Link } from "react-router-dom";
import { useContext } from "react";
import { postContext } from "./contexts/PostContexts";

export default function PostLists() {
  const posts = useContext(postContext);
  // Routes
  let postsList = posts.map((post) => {
    return (
      <Link key={post.id} to={`/postDetails/${post.id}`}>
        <div
          style={{ background: "orange", padding: "20px", marginTop: "10px" }}
        >
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });
  return <>{postsList}</>;
}
