import { Routes, Route } from "react-router-dom";
import { Home, Navbar, CreatePost, PostDetail } from "./Index";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
