import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainHeader from "./components/MainHeader/MainHeader.js";
import {Grid} from "@mui/material";
import {ArrowBackIosNew, ArrowForwardIos} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import routes from "./routes"


function App() {
    const location = useLocation();
    const getPrevPage = () => {
        const currentIndex = routes.findIndex(r => r.path === location.pathname)
        return currentIndex === 0 ? routes.length - 1 : currentIndex - 1;
    };
    const getFollowingPage = () => {
        const currentIndex = routes.findIndex(r => r.path === location.pathname)
        return currentIndex === routes.length - 1 ? 0 : currentIndex + 1;
    };
    return (
        <div className="App">
            <MainHeader/>
            <main className="App-body">
                <Grid
                    container
                    justifyContent="space-evenly"
                    alignItems="center">
                    <Grid item xs={1}>
                        <Link to={routes[getPrevPage()].path} style={{"marginLeft":0}}>
                            <IconButton color="primary" sx={{marginLeft:0, marginRight:"auto"}}>
                                <ArrowBackIosNew/>
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item xs={9} md={10}>
                        <Routes>
                            {routes
                                ?.map((route) =>
                                    <Route key={`route${route.path}`} path={route.path} element={<route.component/>}/>)
                            }
                        </Routes>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to={routes[getFollowingPage()].path}>
                            <IconButton color="primary">
                                <ArrowForwardIos/>
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>

            </main>
        </div>
    );
}

export default App;
