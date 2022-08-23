import {
    Card,
    CardContent,
    CardHeader,
    Chip,
    Fade,
    Grid,
    LinearProgress,
    linearProgressClasses,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import {CameraIndoor, FitnessCenter, KeyboardArrowDownRounded, MusicNote, VideogameAsset} from "@mui/icons-material";

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
                    <Grid item xs={12} lg={10} sx={{
                        height: "95vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}>
                        <Grid container item direction="row" justifyContent="center">
                            <Typography className="fira-text spaced-text title-text-enter" data-color="#00b0f0" sx={{
                                fontSize: "1.5vmax",
                                color: "#ce93d8",
                            }}>{`<`}</Typography>
                            <Typography className="fira-text spaced-text title-text-enter spacing-text"
                                        data-color="#00b0f0" sx={{
                                fontSize: "1.5vmax",
                                color: "#00b0f0",
                                letterSpacing: "1rem"
                            }}>{`${translation("welcome")}`}</Typography>
                            <Typography className="fira-text spaced-text title-text-enter" data-color="#00b0f0" sx={{
                                fontSize: "1.5vmax",
                                color: "#ce93d8",

                            }}>{`/>`}</Typography>
                        </Grid>
                        <Typography className="fira-text" sx={{fontSize: "5vmax"}}>Oscar Guzmán</Typography>
                        <Typography className="fira-text" sx={{fontSize: "2.5vmax"}}>FullStack developer</Typography>
                        <KeyboardArrowDownRounded className="scroll-down" sx={{fontSize: "10vmax"}}/>
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
                                    <TableRow>
                                        <TableCell>{translation("aboutMe_table_languages")}</TableCell>
                                        <TableCell>
                                            <Grid container direction="column">
                                                <Grid item>
                                                    <Typography variant="subtitle1" component="div">
                                                        {translation("aboutMe_table_languages_spanish")}
                                                    </Typography>
                                                    <Typography variant="body" component="div">
                                                        {translation("aboutMe_table_languages_spanish_description")}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1" component="div">
                                                        {translation("aboutMe_table_languages_english")}
                                                    </Typography>
                                                    <Typography variant="body" component="div">
                                                        {translation("aboutMe_table_languages_english_description")}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1" component="div">
                                                        {translation("aboutMe_table_languages_russian")}
                                                    </Typography>
                                                    <Typography variant="body" component="div">
                                                        {translation("aboutMe_table_languages_russian_description")}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Link
                                                        href="https://www.duolingo.com/profile/OscarWolfm?via=share_profile"
                                                        target="_blank">{translation("aboutMe_table_languages_duolingo")}</Link>
                                                </Grid>
                                            </Grid>
                                        </TableCell>
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
                    <Grid item xs={12} lg={10}>
                        <Typography variant="h3" gutterBottom>
                            {translation('aboutMe_stack_title')}
                        </Typography>
                        <Typography variant="body1" gutterBottom align="justify">
                            {translation('aboutMe_stack_body')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <Card variant="outlined">
                            <CardHeader title={translation("aboutMe_table_programing_languages")}/>
                            <CardContent>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{width: "30%"}}>
                                                .NET Framework/.NET Core -
                                                2 {translation("years_experience")}.
                                            </TableCell>
                                            <TableCell>
                                                <LinearProgress variant="determinate" value={80} sx={{
                                                    height: 20,
                                                    borderRadius: 5,
                                                    [`&.${linearProgressClasses.colorPrimary}`]: {
                                                        backgroundColor: "#eee",
                                                    },
                                                    [`& .${linearProgressClasses.bar}`]: {
                                                        borderRadius: 5,
                                                        backgroundColor: "rgba(80,44,211,0.7)",
                                                    },
                                                }}/>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{width: "30%"}}>
                                                Python - 1 {translation("year_experience")}.
                                            </TableCell>
                                            <TableCell>
                                                <LinearProgress variant="determinate" value={40} sx={{
                                                    height: 20,
                                                    borderRadius: 5,
                                                    [`&.${linearProgressClasses.colorPrimary}`]: {
                                                        backgroundColor: "#eee",
                                                    },
                                                    [`& .${linearProgressClasses.bar}`]: {
                                                        borderRadius: 5,
                                                        backgroundColor: "rgba(63,191,63,1)",
                                                    },
                                                }}/>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Java - 1 {translation("year_experience")}.</TableCell>
                                            <TableCell><LinearProgress variant="determinate" value={40} sx={{
                                                height: 20,
                                                borderRadius: 5,
                                                [`&.${linearProgressClasses.colorPrimary}`]: {
                                                    backgroundColor: "#eee",
                                                },
                                                [`& .${linearProgressClasses.bar}`]: {
                                                    borderRadius: 5,
                                                    backgroundColor: "rgba(231,111,0,1)",
                                                },
                                            }}/></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>JavaScript/TypeScript 3
                                                - {translation("years_experience")}.</TableCell>
                                            <TableCell><LinearProgress variant="determinate" value={100} sx={{
                                                height: 20,
                                                borderRadius: 5,
                                                [`&.${linearProgressClasses.colorPrimary}`]: {
                                                    backgroundColor: "#eee",
                                                },
                                                [`& .${linearProgressClasses.bar}`]: {
                                                    borderRadius: 5,
                                                    backgroundColor: "rgba(234,212,28,1)",
                                                },
                                            }}/></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>


                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <Card variant="outlined">
                            <CardHeader title={translation("aboutMe_table_frontend_technologies")}/>
                            <CardContent>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{width: "30%"}}>
                                                React - 2 {translation("years_experience")}.
                                            </TableCell>
                                            <TableCell>
                                                <LinearProgress variant="determinate" value={100} sx={{
                                                    height: 20,
                                                    borderRadius: 5,
                                                    [`&.${linearProgressClasses.colorPrimary}`]: {
                                                        backgroundColor: "#eee",
                                                    },
                                                    [`& .${linearProgressClasses.bar}`]: {
                                                        borderRadius: 5,
                                                        backgroundColor: "rgba(94,211,243,1)",
                                                    },
                                                }}/>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{width: "30%"}}>
                                                Vue.js - 0.5 {translation("years_experience")}.
                                            </TableCell>
                                            <TableCell>
                                                <LinearProgress variant="determinate" value={25} sx={{
                                                    height: 20,
                                                    borderRadius: 5,
                                                    [`&.${linearProgressClasses.colorPrimary}`]: {
                                                        backgroundColor: "#eee",
                                                    },
                                                    [`& .${linearProgressClasses.bar}`]: {
                                                        borderRadius: 5,
                                                        backgroundColor: "rgba(63,178,127,1)",
                                                    },
                                                }}/>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <Card variant="outlined">
                            <CardHeader title={translation("aboutMe_table_backend_technologies")}/>
                            <CardContent>
                                <Chip label="ASP.NET Core Web API"
                                      sx={{color: "white", backgroundColor: "#502CD3"}}/>
                                <Chip label="Django/DRF"
                                      sx={{color: "white", backgroundColor: "#3FBF3F"}}/>
                                <Chip label="Express" sx={{color: "black", backgroundColor: "#EAD41C"}}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <Card variant="outlined">
                            <CardHeader title={translation("aboutMe_table_cloud_technologies")}/>
                            <CardContent>
                                <Chip label="Firebase" sx={{color: "black", backgroundColor: "#F2C12A"}}/>
                                <Chip label="Azure (AZ-900)"
                                      sx={{color: "black", backgroundColor: "rgba(94,211,243,1)"}}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        </Fade>
    )
        ;
};
export default AboutMe;