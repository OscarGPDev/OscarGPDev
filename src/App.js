import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainHeader from "./components/MainHeader/MainHeader.js";
import {Fab, Grid, ThemeProvider} from "@mui/material";
import {ArrowBackIosNew, ArrowForwardIos} from "@mui/icons-material";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import routes from "./routes"
import {useThemeContext} from "./components/theme/ThemeContextProvider";


function App() {
    const location = useLocation();
    const {theme} = useThemeContext();
    const getPrevPage = () => {
        const currentIndex = routes.findIndex(r => r.path === location.pathname)
        return currentIndex === 0 ? routes.length - 1 : currentIndex - 1;
    };
    const getFollowingPage = () => {
        const currentIndex = routes.findIndex(r => r.path === location.pathname)
        return currentIndex === routes.length - 1 ? 0 : currentIndex + 1;
    };
    return (<ThemeProvider theme={theme}>
            <div className="App">

                <MainHeader/>
                <main className="App-body"
                      style={{backgroundColor: theme.palette.background.default}}
                >
                    <Grid
                        container
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        <Grid item xs={10} md={11}
                              sx={{
                                  marginBottom: 10,
                              }}
                        >
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
                            <Fab aria-label="Next"
                                 sx={{marginRight: "10px", backgroundColor: theme.palette.background.default}}>
                                <ArrowBackIosNew sx={{color: theme.palette.text.primary}}/>
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
        </ThemeProvider>
    );
}

export default App;
