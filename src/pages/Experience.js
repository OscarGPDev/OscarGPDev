import {Fade, Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import DrawTechnologies from "../components/MainHeader/TagsDrawer";

const Experience = () => {
    const {t: translate} = useTranslation();
    const experienceData = [{
        company: "JD Solutions",
        technologies: [
            ".Net Framework",
            ".Net Core",
            "React",
            "Node.js",
            "HTML"
        ],
        description: translate("experience_table_jd_description"),
        period: "09/2019-09/2021"
    }]
    return (
        <Fade in timeout={2000}>
            <Paper elevation={0}>

                <Grid container direction="column" justifyContent="center"
                      alignItems="center">
                    <Grid item sx={{
                        width: {
                            xs: "100%",
                            md: "40vw",
                            lg: "40vw",
                        },
                    }}
                    >
                        <Typography variant="h3" gutterBottom>
                            {translate('experience_title')}
                        </Typography>
                    </Grid>
                    {experienceData.map(row => <Grid item key={`experience_data_row_${row.company}`}
                                                     sx={{
                                                         width: {
                                                             xs: "100%",
                                                             md: "40vw",
                                                             lg: "40vw",
                                                         }
                                                     }}>
                        <Typography variant="h6">
                            {row.company}
                            <Typography variant="overline" sx={{marginLeft: "20px"}}>{row.period}</Typography>
                        </Typography>
                        <DrawTechnologies data={row.technologies} randomColors/>
                        <Typography variant="body1" align="justify">{row.description}</Typography>
                    </Grid>)}
                </Grid>
                <Typography variant="h3" sx={{marginY: "50px"}}>
                    {translate('experience_others')}
                </Typography>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Grid container direction="column" sx={{
                        borderLeft: "5px solid #00b0f0",
                        width: {
                            xs: "100%",
                            md: "40vw",
                            lg: "40vw",
                        },
                    }}>
                        <Grid item sx={{marginLeft: "20px"}}>
                            <Typography variant="h6">
                                {translate("experience_certifications")}
                            </Typography>
                            <Typography variant="body1" align="justify">
                                <Typography variant="overline" sx={{marginRight: "20px"}}>06/2022</Typography>
                                {translate("experience_certifications_azure")}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{
                        borderRight: "5px solid #00b0f0", width: {
                            xs: "100%",
                            md: "40vw",
                            lg: "40vw",
                        },
                        marginY: "50px"

                    }}>
                        <Grid item sx={{marginRight: "20px"}}>
                            <Typography variant="h6">
                                <Typography variant="overline" sx={{marginRight: "20px"}}>2022</Typography>
                                {translate("experience_hack_the_ocean_title")}
                            </Typography>
                            <Typography variant="body1"
                                        align="justify">{translate("experience_hack_the_ocean_body")}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{
                        borderLeft: "5px solid #00b0f0", width: {
                            xs: "100%",
                            md: "40vw",
                            lg: "40vw",
                        },
                        marginY: "50px"
                    }}>
                        <Grid item sx={{marginLeft: "20px"}}>
                            <Typography variant="h6">
                                <Typography variant="overline" sx={{marginRight: "20px"}}>2022</Typography>
                                Launch X
                            </Typography>
                            <Typography variant="body1"
                                        align="justify">{translate("experience_launch_x_body")}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{
                        borderRight: "5px solid #00b0f0", width: {
                            xs: "100%",
                            md: "40vw",
                            lg: "40vw",
                        },
                        marginY: "50px"
                    }}>
                        <Grid item sx={{marginRight: "20px"}}>
                            <Typography variant="h6">
                                <Typography variant="overline" sx={{marginRight: "20px"}}>05/2019</Typography>
                                ACM ICPC
                            </Typography>
                            <Typography variant="h6">
                                <Typography variant="overline" sx={{marginRight: "20px"}}>04/2018</Typography>
                                ACM ICPC
                            </Typography>
                            <Typography variant="body1"
                                        align="justify">{translate("experience_acm_icpc_body")}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{
                        borderLeft: "5px solid #00b0f0", width: {
                            xs: "100%",
                            md: "40vw",
                            lg: "40vw",
                        },
                        marginY: "50px"
                    }}>
                        <Grid item sx={{marginLeft: "20px"}}>
                            <Typography variant="h6">
                                <Typography variant="overline" sx={{marginRight: "20px"}}>2016</Typography>
                                {translate("experience_class_leader_title")}
                            </Typography>
                            <Typography variant="body1"
                                        align="justify">{translate("experience_class_leader_body")}</Typography>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </Fade>
    );
};
export default Experience;