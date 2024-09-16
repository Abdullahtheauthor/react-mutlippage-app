import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import PostLists from "./PostList";
import Home from "./Home";
import Hello from "./Hello";
import PostDetails from "./PostDetails";
import { postContext } from "./contexts/PostContexts";
import NotFound from "./NotFound";

function App() {
  const postsData = [
    {
      id: 1,
      title: "Post 1",
      body: "This is post 1",
    },
    {
      id: 2,
      title: "Post 2",
      body: "This is post 2",
    },
    {
      id: 3,
      title: "Post 3",
      body: "This is post 3 kjaklsjfdk jlasjflajsf",
    },
  ];

  return (
    <postContext.Provider value={postsData}>
      <div className="App">
        {/* Routes */}
        <div>
          <Link to="/home">
            <button style={{ fontSize: "20px" }}>Home</button>
          </Link>
          <Link to="/hello">
            <button style={{ fontSize: "20px" }}>Hello</button>
          </Link>

          <Link to="/posts">
            <button style={{ fontSize: "20px" }}>Posts</button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/posts" element={<PostLists />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </postContext.Provider>
  );
}

export default App;
