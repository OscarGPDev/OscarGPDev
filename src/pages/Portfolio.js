import {CardContent, Chip, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import DataTable from "../components/DataTable";

const DrawTechnologies = (technologies) => {
    const getRandomColor = () => {
        let result = "";
        switch (Math.floor(Math.random() * (5))) {
            case 0:
                result = "default";
                break;
            case 1:
                result = "primary";
                break;
            case 2:
                result = "secondary";
                break;
            case 3:
                result = "info";
                break;
            case 4:
                result = "success";
                break;
            default:
                result = "warning";
                break;
        }
        return result;
    };
    return (<div>{technologies.map((technology) => {
        return (<Chip key={`chip-${technology}`} color={getRandomColor()} size="small" label={
                technology
            }/>
        )
    })}</div>);
}

const Portfolio = () => {
    const {t: translation} = useTranslation();
    const headers = [{
        id: 'project', title: translation("portfolio_table_project_name"), dataSource: 'projectName',
    }, {
        id: 'technologies', title: translation("portfolio_table_technologies"), dataSource: 'technologies',
        drawFunction: (rowElement) => DrawTechnologies(rowElement.technologies)
    }, {
        id: 'date', title: translation("portfolio_table_date"), dataSource: 'date',
    }, {
        id: 'description', title: translation("portfolio_table_description"), dataSource: 'description',
    }];
    const portfolioData = [
        {
            projectName: '',
            date: '',
            description: '',
            technologies: ['java','python']
        }
    ];
    return (<Paper elevation={0}>
        <CardContent sx={{padding: "2rem"}}>
            <Typography variant="h3" gutterBottom>
                {translation('portfolio_title')}
            </Typography>
            <Typography variant="body1" gutterBottom align="justify">
                {translation('portfolio_body')}
            </Typography>
            <DataTable data={portfolioData} headers={headers}/>
        </CardContent>
    </Paper>);
};
export default Portfolio;