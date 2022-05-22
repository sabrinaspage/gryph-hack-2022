import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Video from "../pages/video";
import Login from "../pages/login";
import Main from "../pages/member-main";
import Livestream from "../pages/member-main";
import Registration from "../pages/registration";
import Statistics from "../pages/statistics";
import Homepage from "../pages/homepage";
import Test from "../pages/test";

export default function GryphRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/video/id_here" element={<Video />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/main" element={<Main />} />
        <Route path="/Livestream" element={<Livestream />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}
