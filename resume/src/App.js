import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainHeader from "./components/MainHeader/MainHeader.js";
import {Grid} from "@mui/material";
import {ArrowBackIosNew, ArrowForwardIos} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {Route, Routes} from "react-router-dom";
import AboutMe from "./pages/AboutMe";

function App() {
    return (
        <div className="App">
            <MainHeader/>
            <main className="App-body">
                <Grid container spacing={1} justifyContent="center"
                      alignItems="center">
                    <Grid item xs={1}>
                        <IconButton color="primary">
                            <ArrowBackIosNew/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={10}>
                        <Routes>
                            <Route path="/" element={<AboutMe/>}/>
                        </Routes>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton color="primary">
                            <ArrowForwardIos/>
                        </IconButton>
                    </Grid>
                </Grid>

            </main>
        </div>
    );
}

export default App;
