import {languages} from "../objects/languages";

export const getInitialLanguage = () => {
    const currentLanguage = localStorage.getItem("i18nextLng");
    if (currentLanguage && currentLanguage.includes("es")) {
        return languages.es;
    } else {
        return languages.en;
    }

};
