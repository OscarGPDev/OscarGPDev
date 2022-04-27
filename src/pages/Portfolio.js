import {Fade, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import DataTable from "../components/DataTable";
import TagsDrawer from "../components/MainHeader/TagsDrawer";
import LinksDrawer from "../components/LinksDrawer";


const Portfolio = () => {
    const {t: translation} = useTranslation();
    const headers = [{
        id: 'project', title: translation("portfolio_table_project_name"), dataSource: 'projectName',
    }, {
        id: 'technologies', title: translation("portfolio_table_technologies"), dataSource: 'technologies',
        drawFunction: (rowElement) => (<TagsDrawer data={rowElement.technologies}/>)
    }, {
        id: 'date', title: translation("portfolio_table_date"), dataSource: 'date', orderBy: true, ascending: false
    }, {
        id: 'links', title: translation("portfolio_table_links"), dataSource: 'link',
        drawFunction: (rowElement) => <LinksDrawer links={rowElement.links}/>
    }, {
        id: 'description', title: translation("portfolio_table_description"), dataSource: 'description',
        sx: {minWidth: "300px"},
        sxBody: {
            textAlign: "justify"
        }
    }];
    const portfolioData = [
        {
            projectName: 'OscarGPDev',
            date: '04/2022',
            description: translation("portfolio_table_oscargpdev_description"),
            technologies: ['React', 'JavaScript'],
            links: []
        },
        {
            projectName: 'DeliDeliCake (Vue)',
            date: '03/2022',
            description: translation("portfolio_table_delidelicake_vue_description"),
            technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
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
            links: [{name: translation('portfolio_table_link_to_site'), link: 'https://delidelicake-3ff7e.web.app/'},
                {
                    name: 'GitHub',
                    link: 'https://github.com/OscarGPDev/LaunchX_exercises/tree/main/FrontendMision/Semana%202%20-%20Primer%20vuelo'
                }]
        },
        {
            projectName: 'MuseumMax',
            date: '01/2022',
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
        <DataTable data={portfolioData} headers={headers} sx={{
            maxHeight: {
                sx: "70vh",
                md: "auto"
            },
            overflowY: {
                sx: "scroll",
                md: "auto"
            }
        }}/>
    </Paper></Fade>);
};
export default Portfolio;