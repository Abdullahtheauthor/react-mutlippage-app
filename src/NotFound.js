import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <div style={{ background: "orange", padding: "10px" }}>
        <h1>The page is not defined</h1>
        <Link to="/home">
          <button>Return the Home Page</button>
        </Link>
      </div>
    </>
  );
}
