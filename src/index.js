import React from 'react';
import "./components/internationalize/i18n";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {ThemeContextProvider} from "./components/theme/ThemeContextProvider";

const container = document.getElementById('root');

const root = createRoot(container);


root.render(<React.StrictMode>
    <ThemeContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeContextProvider>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
