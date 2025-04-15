import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";

const routes = [{
    path: "/", component: AboutMe
}, {
    path: "/experience", component: Experience
}, {
    path: "/portfolio", component: Portfolio
},];
export default routes;