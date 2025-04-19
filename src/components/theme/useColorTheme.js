import {createTheme} from "@mui/material";
import {theme} from "./globalTheme";
import {useMemo, useState} from "react";

export const useColorTheme = () => {
    const [mode, setMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");

    const toggleColorMode = () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

    const modifiedTheme = useMemo(
        () =>
            createTheme({
                ...theme,
                palette: {
                    ...theme.palette,
                    mode,
                },
                colorSchemes: {
                    dark: mode === "dark",
                },
            }),
        [mode]
    );


    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
};