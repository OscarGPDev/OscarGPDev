import {Fade, Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import ProjectCard from "../components/ProjectCard";


const Portfolio = () => {
    const {t: translation} = useTranslation();

    const portfolioData = [
        {
            projectName: 'Kelp me!',
            date: '05/2022',
            description: translation("portfolio_table_kelpme_description"),
            image: "https://firebasestorage.googleapis.com/v0/b/oscargpdev.appspot.com/o/images%2Fprojects%2Fkelp_me.png?alt=media&token=210e672f-3328-42a0-b87b-918cedf54701",
            technologies: ['Vue.js', 'JavaScript', 'Express', 'Prisma'],
            links: [{name: "GitHub", link: 'https://github.com/OscarGPDev/Kelpme'}]
        },
        {
            projectName: 'OscarGPDev',
            date: '04/2022',
            description: translation("portfolio_table_oscargpdev_description"),
            technologies: ['React', 'JavaScript'],
            image: "https://firebasestorage.googleapis.com/v0/b/oscargpdev.appspot.com/o/images%2Fprojects%2Fportfolio.png?alt=media&token=bc5d5715-5449-40da-ba28-36b1951b583f",
            links: []
        },
        {
            projectName: 'DeliDeliCake (Vue)',
            date: '03/2022',
            description: translation("portfolio_table_delidelicake_vue_description"),
            technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
            image: "https://firebasestorage.googleapis.com/v0/b/oscargpdev.appspot.com/o/images%2Fprojects%2Fdelidelicakevue.png?alt=media&token=e84e1cc0-8741-4c38-9b23-66ce81dd6b39",
            links: [{name: translation('portfolio_table_link_to_site'), link: 'https://delidelicakevue.web.app/'},
                {
                    name: 'GitHub',
                    link: 'https://github.com/OscarGPDev/LaunchX_exercises/tree/main/FrontendMision/Semana%205%20-%20Comparando%20naves'
                }]
        },
        {
            projectName: 'Pokédex',
            date: '03/2022',
            description: translation("portfolio_table_pokedex_description"),
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: "https://firebasestorage.googleapis.com/v0/b/oscargpdev.appspot.com/o/images%2Fprojects%2Fpokedex.png?alt=media&token=c139f7ba-4d0c-4bad-87b6-5d6116468479",
            links: [{name: translation('portfolio_table_link_to_site'), link: 'https://pokedex-83b18.web.app/'},
                {
                    name: 'GitHub',
                    link: 'https://github.com/OscarGPDev/LaunchX_exercises/tree/main/FrontendMision/Semana%204%20-%20Controlando%20el%20vuelo%20con%20JS'
                }]
        },
        {
            projectName: 'Vaccines',
            date: '03/2022',
            description: translation("portfolio_table_vaccines_description"),
            technologies: ['HTML', 'CSS'],
            image: "https://firebasestorage.googleapis.com/v0/b/oscargpdev.appspot.com/o/images%2Fprojects%2Fvaccines.png?alt=media&token=82e90969-7368-4c0f-8930-67af1b585a60",
            links: [{name: translation('portfolio_table_link_to_site'), link: 'https://vaccines-82d85.web.app/'},
                {
                    name: 'GitHub',
                    link: 'https://github.com/OscarGPDev/LaunchX_exercises/tree/main/FrontendMision/Semana%203%20-%20Volando%20con%20estilo'
                }]
        },
        {
            projectName: 'DeliDeliCake',
            date: '03/2022',
            description: translation("portfolio_table_delidelicake_description"),
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            image: "https://firebasestorage.googleapis.com/v0/b/oscargpdev.appspot.com/o/images%2Fprojects%2Fdelidelicakebootstrap.png?alt=media&token=0da16c21-415b-4eee-8a4d-992efcd583ee",
            links: [{name: translation('portfolio_table_link_to_site'), link: 'https://delidelicake-3ff7e.web.app/'},
                {
                    name: 'GitHub',
                    link: 'https://github.com/OscarGPDev/LaunchX_exercises/tree/main/FrontendMision/Semana%202%20-%20Primer%20vuelo'
                }]
        },
        {
            projectName: 'MuseumMax',
            date: '01/2022',
            image: "https://firebasestorage.googleapis.com/v0/b/oscargpdev.appspot.com/o/images%2Fprojects%2Fmuseummax.png?alt=media&token=7c456b6b-b69f-495b-acc4-acf8652077e0",
            description: translation("portfolio_table_museummax_description"),
            technologies: ['React', 'MUI', 'Django-Rest-Framework', 'MariaDB', 'Firebase', 'Python'],
            links: [{name: translation('portfolio_table_link_to_site'), link: 'https://museummax-20c21.web.app/'}]
        },
    ];
    return (<Fade in timeout={2000}><Paper elevation={0}>
        <Typography variant="h3" gutterBottom>
            {translation('portfolio_title')}
        </Typography>
        <Typography variant="body1" gutterBottom align="justify">
            {translation('portfolio_body')}
        </Typography>
        <Grid container spacing={1}>
            {portfolioData.map(portfolioItem => (<Grid item xs={6} md={4} lg={4} xl={2}><ProjectCard
                image={portfolioItem.image}
                title={portfolioItem.projectName}
                links={portfolioItem.links}
                tags={portfolioItem.technologies}
                date={portfolioItem.date}
                description={portfolioItem.description}/></Grid>))}
        </Grid>
    </Paper></Fade>);
};
export default Portfolio;