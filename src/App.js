import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainHeader from "./components/MainHeader/MainHeader.js";
import {Fab, Grid} from "@mui/material";
import {ArrowBackIosNew, ArrowForwardIos} from "@mui/icons-material";
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
                    <Grid item xs={10} md={11} sx={{marginBottom: 10}}>
                        <Routes>
                            {routes
                                ?.map((route) =>
                                    <Route key={`route${route.path}`} path={route.path}
                                           element={<route.component/>}/>)
                            }
                        </Routes>

                    </Grid>
                </Grid>
                <div style={{
                    position: "fixed",
                    bottom: "10px",
                    right: "10px",
                    zIndex: 15
                }}>
                    <Link to={routes[getPrevPage()].path}>
                        <Fab aria-label="Next" sx={{marginRight: "10px", backgroundColor: "#fff"}}>
                            <ArrowBackIosNew/>
                        </Fab>
                    </Link>
                    <Link to={routes[getFollowingPage()].path}>
                        <Fab aria-label="Next" sx={{backgroundColor: "#00b0f0"}}>
                            <ArrowForwardIos sx={{color: "#FFF"}}/>
                        </Fab>
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default App;
