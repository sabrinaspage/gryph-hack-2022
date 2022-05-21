import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from "../App";
import ClassVideos from "../pages/class-videos";
import Homepage from "../pages/homepage";
import Livestream from "../pages/livestream";
import Login from "../pages/login";
import Registration from "../pages/registration";
import Statistics from "../pages/statistics";


export default function GryphRouter() {
  return (
    <Router>
        <Routes>
          <Route path="/class-videos" element={<ClassVideos />}/>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/livestream" element={<Livestream />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/registration" element={<Registration />}/>
          <Route path="/statistics" element={<Statistics />}/>
        </Routes>
    </Router>
  );
}