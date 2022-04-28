import {Chip, Fade, Link, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import {CameraIndoor, FitnessCenter, MusicNote, VideogameAsset} from "@mui/icons-material";

const AboutMe = () => {
    const {t: translation} = useTranslation();
    return (
        <Fade in timeout={2000}>
            <Paper elevation={0}>
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
                <Typography variant="h3" gutterBottom>
                    {translation('aboutMe_stack_title')}
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                    {translation('aboutMe_stack_body')}
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
                                <TableCell>{translation("aboutMe_table_programing_languages")}</TableCell>
                                <TableCell>
                                    <Chip label=".NET Framework/.NET Core"
                                          sx={{color: "white", backgroundColor: "#502CD3"}}/>
                                    <Chip label="Python" sx={{color: "white", backgroundColor: "#3FBF3F"}}/>
                                    <Chip label="Java" sx={{color: "white", backgroundColor: "#E76F00"}}/>
                                    <Chip label="JavaScript/TypeScript" sx={{color: "black", backgroundColor: "#EAD41C"}}/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{translation("aboutMe_table_frontend_technologies")}</TableCell>
                                <TableCell>
                                    <Chip label="Bootstrap"
                                          sx={{color: "white", backgroundColor: "#502CD3"}}/>
                                    <Chip label="React" sx={{color: "white", backgroundColor: "#5ED3F3"}}/>
                                    <Chip label="Vue.js" sx={{color: "white", backgroundColor: "#3FB27F"}}/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{translation("aboutMe_table_backend_technologies")}</TableCell>
                                <TableCell>
                                    <Chip label="ASP.NET Core Web API"
                                          sx={{color: "white", backgroundColor: "#502CD3"}}/>
                                    <Chip label="Django/Django-Rest-Framework" sx={{color: "white", backgroundColor: "#3FBF3F"}}/>
                                    <Chip label="Express" sx={{color: "black", backgroundColor: "#EAD41C"}}/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{translation("aboutMe_table_cloud_technologies")}</TableCell>
                                <TableCell>
                                    <Chip label="Firebase" sx={{color: "black", backgroundColor: "#F2C12A"}}/>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
        </Fade>
    );
};
export default AboutMe;