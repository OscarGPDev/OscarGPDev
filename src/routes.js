import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";

const routes = [
        {
            path: "/",
            component: AboutMe
        },
        {
            path: "/portfolio",
            component: Portfolio
        },
        {
            path: "/experience",
            component: Experience
        },
    ]
;
export default routes;