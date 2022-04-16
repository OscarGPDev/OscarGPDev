import {Fade, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";

const Experience = () => {
    const {t: translate} = useTranslation();
    const experienceData = [{
        company: "JD Solutions",
        technologies: [],
        period: "09/2019-09/2021"
    }]
    return (
        <Fade in timeout={2000}>
            <Paper elevation={0} sx={{height: {xs: "90vh", md: "auto", lg: "70vh", overflowY: {xs: "scroll"}}}}>
                <Typography variant="h3" gutterBottom>
                    {translate('experience_title')}
                </Typography>
                <Typography variant="body1" gutterBottom align="justify">
                    {translate('experience_body')}
                </Typography>
                <TableContainer component={Paper} sx={{
                    width: {
                        xs: "100%",
                        md: "40vw",
                        lg: "50vw",
                    },
                    margin: "0 auto"
                }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{translate("experience_table_company")}</TableCell>
                                <TableCell>{translate("experience_table_technologies")}</TableCell>
                                <TableCell>{translate("experience_table_period")}</TableCell>
                                <TableCell>{translate("experience_table_description")}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                experienceData.map(row => <TableRow key={`experience_data_row_${row.company}`}>
                                    <TableCell>{row.company}</TableCell>
                                    <TableCell>{row.technologies}</TableCell>
                                    <TableCell>{row.period}</TableCell>
                                    <TableCell>{row.description}</TableCell>
                                </TableRow>)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography variant="h3" sx={{marginY: "50px"}}>
                    {translate('experience_others')}
                </Typography>
                <Grid container direction="column" sx={{
                    borderLeft: "5px solid #1976d2", width: {
                        xs: "100%",
                        md: "40vw",
                        lg: "40vw",
                    }
                }}>
                    <Grid item sx={{marginLeft: "20px"}}>
                        <Typography variant="h6">Launch X
                            <Typography variant="overline" sx={{marginLeft: "20px"}}>2022</Typography>
                        </Typography>
                        <Typography variant="body1" align="justify">{translate("experience_launch_x_body")}</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="column" sx={{
                    borderLeft: "5px solid #1976d2", width: {
                        xs: "100%",
                        md: "40vw",
                        lg: "40vw",
                    },
                    marginY: "50px"
                }}>
                    <Grid item sx={{marginLeft: "20px"}}>
                        <Typography variant="h6">ACM ICPC
                            <Typography variant="overline" sx={{marginLeft: "20px"}}>05/2019</Typography>
                        </Typography>
                        <Typography variant="h6">ACM ICPC
                            <Typography variant="overline" sx={{marginLeft: "20px"}}>04/2018</Typography>
                        </Typography>
                        <Typography variant="body1" align="justify">{translate("experience_acm_icpc_body")}</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="column" sx={{
                    borderLeft: "5px solid #1976d2", width: {
                        xs: "100%",
                        md: "40vw",
                        lg: "40vw",
                    },
                    marginY: "50px"
                }}>
                    <Grid item sx={{marginLeft: "20px"}}>
                        <Typography variant="h6">{translate("experience_class_leader_title")}
                            <Typography variant="overline" sx={{marginLeft: "20px"}}>2016</Typography>
                        </Typography>
                        <Typography variant="body1" align="justify">{translate("experience_class_leader_body")}</Typography>
                    </Grid>
                </Grid>

            </Paper>
        </Fade>
    );
};
export default Experience;