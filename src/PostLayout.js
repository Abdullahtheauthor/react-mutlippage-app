import { Outlet } from "react-router-dom";

export default function PostLayout() {
  return (
    <>
      <h1 style={{ background: "green" }}>
        This is the header used in all nested routes of Posts
      </h1>
      <h2>
        notice that you have to use Outlet component from react to tell where
        the nested route componwnt will be in your page
      </h2>
      <div>
        <Outlet></Outlet>
      </div>
      <h1 style={{ background: "green" }}>
        This is the footer used in all nested routes of Posts
      </h1>
    </>
  );
}
