import {
    Chip,
    Fade,
    Grid,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import {CameraIndoor, FitnessCenter, MusicNote, VideogameAsset, KeyboardArrowDownRounded} from "@mui/icons-material";
//import Background from "/wallhaven-p822gp.jpg"

const AboutMe = () => {
    const {t: translation} = useTranslation();
    return (
        <Fade in timeout={2000}>
            <Paper elevation={0}>
                <Grid container
                      sx={{maxWidth: {lg: "80%"}, marginX: "auto",}}
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    <Grid item xs={12} lg={10} sx={{height:"95vh", display:"flex", justifyContent:"center",alignItems: "center",flexDirection:"column",}}>
                        <Typography className="fira-text" sx={{fontSize:"1.5vmax",color:"#00b0f0"}}>{"<"}Welcome{"/>"}</Typography>
                        <Typography className="fira-text" sx={{fontSize:"5vmax"}}>Oscar Guzmán</Typography>
                        <Typography className="fira-text" sx={{fontSize:"2.5vmax"}}>Full Stack developer</Typography>
                        <KeyboardArrowDownRounded className="scroll-down" sx={{fontSize:"10vmax"}}/>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <Typography variant="h3" gutterBottom>
                            {translation('aboutMe_title')}
                        </Typography>
                        <Typography variant="body1" gutterBottom align="justify">
                            {translation('aboutMe_body')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <TableContainer component={Paper} sx={{
                            width: {
                                xs: "100%",
                                md: "40vw",
                                lg: "20vw",
                            },
                            marginX: {
                                lg: "20px",
                            }
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
                    </Grid>
                </Grid>


                <Grid
                    container
                    sx={{marginTop: "10vh", maxWidth: {lg: "80%"}, marginX: "auto",}}
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12} lg={5}>
                        <Typography variant="h3" gutterBottom>
                            {translation('aboutMe_stack_title')}
                        </Typography>
                        <Typography variant="body1" gutterBottom align="justify">
                            {translation('aboutMe_stack_body')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <TableContainer component={Paper} sx={{
                            width: {
                                xs: "100%",
                                md: "40vw",
                                lg: "20vw",
                            },
                            marginX: {
                                lg: "20px",
                            }
                        }}>
                            <Table aria-label="simple table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell>{translation("aboutMe_table_programing_languages")}</TableCell>
                                        <TableCell>
                                            <Table aria-label="simple table" sx={{width: "100%"}}>
                                                <TableHead>
                                                    <TableRow>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell sx={{
                                                            color: "black",
                                                            background: "linear-gradient(90deg, rgba(80,44,211,0.7) 0%, rgba(80,44,211,0.7) 80%, rgba(0,0,0,0) 80%) "
                                                        }}>
                                                            .NET Framework/.NET Core -
                                                            2 {translation("years_experience")}.
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{
                                                            color: "black",
                                                            background: "linear-gradient(90deg, rgba(63,191,63,1) 0%, rgba(63,191,63,1) 40%, rgba(0,0,0,0) 40%) "
                                                        }}>
                                                            Python - 1 {translation("year_experience")}.
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{
                                                            color: "black",
                                                            background: "linear-gradient(90deg, rgba(231,111,0,1) 0%, rgba(231,111,0,1) 40%, rgba(0,0,0,0) 40%) "
                                                        }}>
                                                            Java - 1 {translation("year_experience")}.
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{
                                                            color: "black",
                                                            background: "linear-gradient(90deg, rgba(234,212,28,1) 0%, rgba(234,212,28,1) 100%, rgba(0,0,0,0) 100%) "
                                                        }}>
                                                            JavaScript/TypeScript 3 - {translation("years_experience")}.
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{translation("aboutMe_table_frontend_technologies")}</TableCell>
                                        <TableCell>
                                            <Table aria-label="simple table" sx={{width: "100%"}}>
                                                <TableHead>
                                                    <TableRow>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell sx={{
                                                            color: "black",
                                                            background: "linear-gradient(90deg, rgba(94,211,243,1) 0%, rgba(94,211,243,1) 100%, rgba(0,0,0,0) 100%) "
                                                        }}>
                                                            React - 2 {translation("year_experience")}.
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{
                                                            color: "black",
                                                            background: "linear-gradient(90deg, rgba(80,44,211,0.7) 0%, rgba(80,44,211,0.7) 100%, rgba(0,0,0,0) 100%) "
                                                        }}>
                                                            Bootstrap -
                                                            2 {translation("years_experience")}.
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{
                                                            color: "black",
                                                            background: "linear-gradient(90deg, rgba(63,178,127,1) 0%, rgba(63,178,127,1) 25%, rgba(0,0,0,0) 25%) "
                                                        }}>
                                                            Vue.js - 0.5 {translation("years_experience")}.
                                                        </TableCell>
                                                    </TableRow>

                                                </TableBody>
                                            </Table>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{translation("aboutMe_table_backend_technologies")}</TableCell>
                                        <TableCell>
                                            <Chip label="ASP.NET Core Web API"
                                                  sx={{color: "white", backgroundColor: "#502CD3"}}/>
                                            <Chip label="Django/DRF"
                                                  sx={{color: "white", backgroundColor: "#3FBF3F"}}/>
                                            <Chip label="Express" sx={{color: "black", backgroundColor: "#EAD41C"}}/>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{translation("aboutMe_table_cloud_technologies")}</TableCell>
                                        <TableCell>
                                            <Chip label="Firebase" sx={{color: "black", backgroundColor: "#F2C12A"}}/>
                                            <Chip label="Azure" sx={{color: "black", backgroundColor: "rgba(94,211,243,1)"}}/>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Paper>
        </Fade>
    );
};
export default AboutMe;