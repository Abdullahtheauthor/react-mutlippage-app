import { Link } from "react-router-dom";
export default function Hello() {
  return (
    <>
      <h1>Hello world</h1>
      <div style={{ background: "orange", padding: "10px" }}>
        <Link to="/home">
          <h1>Go To Home Page</h1>
        </Link>
      </div>
    </>
  );
}
