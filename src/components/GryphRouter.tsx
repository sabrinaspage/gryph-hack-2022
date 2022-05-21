import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
import Video from "../pages/video";
import Login from "../pages/login";
import Member from "../pages/member";
import Livestream from "../pages/livestream";
import Registration from "../pages/registration";
import Statistics from "../pages/statistics";

export default function GryphRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/video/id_here" element={<Video />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/member" element={<Member />} />
        <Route path="/Livestream" element={<Livestream />} />
      </Routes>
    </Router>
  );
}
