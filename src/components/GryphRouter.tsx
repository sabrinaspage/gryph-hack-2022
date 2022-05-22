import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Video from "../pages/video";
import Member from "../pages/member-main";
import Homepage from "../pages/homepage";
import Test from "../pages/test";

export default function GryphRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/video/:sessionId" element={<Video />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/member" element={<Member />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}
