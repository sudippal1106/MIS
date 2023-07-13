import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Home from "./components/main/home/Home";
import About from "./components/main/about/About";
import Contact from "./components/main/contact/Contact";
import Track from "./components/main/track/Track";
import Application from "./components/main/Departments/Application/application"

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/track" element={<Track />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/application" element={<Application />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
