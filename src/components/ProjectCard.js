import {useState} from "react";
import {Card, CardActions, CardContent, CardMedia, Grid, Modal} from "@mui/material";
import Typography from "@mui/material/Typography";
import TagsDrawer from "./MainHeader/TagsDrawer";
import LinksDrawer from "./LinksDrawer";
import Button from "@mui/material/Button";
import {useTranslation} from "react-i18next";

const ProjectCard = ({
                         image, title, description, links, tags, date
                     }) => {
    const [open, setOpen] = useState(false);
    const {t: translation} = useTranslation();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return <><Card sx={{}}>
        <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="overline" component="div">
                {date}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap={true}>
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Grid container direction="column">
                <Grid item sx={{overflow: 'hidden'}}>
                    <TagsDrawer data={tags}/>
                </Grid>
                <Grid item>
                    <LinksDrawer links={links}/>
                </Grid>
                <Grid item><Button onClick={handleOpen}>{translation("details")}</Button>

                </Grid>
            </Grid>
        </CardActions>
    </Card>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Card sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: {xs: "100vw", lg: "75vw", xl: "500px"},
                boxShadow: 24,
            }}>
                <CardMedia
                    component="img"
                    // height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <Grid item>
                            <TagsDrawer data={tags}/>
                        </Grid>
                        <Grid item>
                            <LinksDrawer links={links}/>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>

        </Modal></>
}
export default ProjectCard;