import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";

const AboutMe = () => {
    const {t: translation} = useTranslation();
    return (
        <Card variant="outlined" sx={{height: "100%"}}>
            <CardContent sx={{padding: "2rem"}}>
                <Typography variant="h3" gutterBottom>
                    {translation('aboutMe_title')}
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                    {translation('aboutMe_body')}
                </Typography>
            </CardContent>
        </Card>
    );
};
export default AboutMe;