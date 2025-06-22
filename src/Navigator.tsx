import { Route, Routes } from "react-router";
import Welcome from "./pages/Welcome";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Studies from "./pages/Studies";

const Navigator = () => (
	<Routes>
		<Route path="/" element={<Welcome />} />
		<Route path="/experience" element={<Experience />} />
		<Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/studies" element={<Studies />} />
	</Routes>
);

export default Navigator;
