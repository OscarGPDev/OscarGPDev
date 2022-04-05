import {useState} from "react";
import i18next from "i18next";
import {FormControl, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const languageMap = {
    'en': {label: "EN", active: true},
    'es-MX': {label: "ES", active: false}
};
const getInitialLanguage = () => {
    const currentLanguage = localStorage.getItem("i18nextLng");
    if (currentLanguage && currentLanguage.includes("es")) {
        return "es-MX";
    } else {
        return "en"
    }
};

const LanguageSelect = () => {

    const [selected, setSelected] = useState(getInitialLanguage());
    const handleChange = (event) => {
        i18next.changeLanguage(event.target.value);
        setSelected(event.target.value)

    };

    return (
        <div className="d-flex justify-content-end align-items-center language-select-root">
            <FormControl fullWidth>
                <Select
                    labelId="labelSelectLanguage"
                    id="selectLanguage"
                    value={selected}
                    label="Language"
                    onChange={handleChange}
                    variant="standard"
                >
                    {Object.keys(languageMap)?.map(item => (
                        <MenuItem
                            key={item}
                            value={item}
                        >
                            {languageMap[item].label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default LanguageSelect;