import {Fade, Link, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import {CameraIndoor, FitnessCenter, MusicNote, VideogameAsset} from "@mui/icons-material";

const AboutMe = () => {
    const {t: translation} = useTranslation();
    return (
        <Fade in timeout={2000}>
            <Paper elevation={0} sx={{height: {xs: "90vh", md: "auto", lg: "70vh", overflowY: {xs: "scroll"}}}}>
                <Typography variant="h3" gutterBottom>
                    {translation('aboutMe_title')}
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                    {translation('aboutMe_body')}
                </Typography>
                <TableContainer component={Paper} sx={{
                    width: {
                        xs: "100%",
                        md: "40vw",
                        lg: "20vw",
                    },
                }}>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell>{translation("aboutMe_table_hobbies")}</TableCell>
                                <TableCell><VideogameAsset/><MusicNote/><CameraIndoor/><FitnessCenter/></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{translation("aboutMe_table_github")}</TableCell>
                                <TableCell><Link href="https://github.com/OscarGPDev"
                                                 target="_blank">OscarGPDev</Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{translation("aboutMe_table_hackerrank")}</TableCell>
                                <TableCell><Link href="https://www.hackerrank.com/oscarprograb"
                                                 target="_blank">oscarprograb</Link></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{translation("aboutMe_table_linkedin")}</TableCell>
                                <TableCell><Link href="https://www.linkedin.com/in/oscargpdev"
                                                 target="_blank">OscarGPDev</Link></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>


            </Paper>
        </Fade>
    );
};
export default AboutMe;