import {Card, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import TagsDrawer from "./MainHeader/TagsDrawer";
import LinksDrawer from "./LinksDrawer";
import * as PropTypes from "prop-types";
import React from "react";

export const ProjectCardBase = (props) => {
    return <Card sx={props.cardSx} onClick={props.onClick}>
        <CardMedia
            component="img"
            height="140"
            image={props.image}
        />
        <CardContent>
            <Typography gutterBottom variant="overline" component="div">
                {props.date}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap={true}>
                {props.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Grid container direction="column">
                <Grid item sx={{overflow: "hidden"}}>
                    <TagsDrawer data={props.data}/>
                </Grid>
                <Grid item>
                    <LinksDrawer links={props.links}/>
                </Grid>

            </Grid>
        </CardActions>
    </Card>;
};

ProjectCardBase.propTypes = {
    image: PropTypes.any,
    date: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    data: PropTypes.any,
    links: PropTypes.any,
    onClick: PropTypes.func,
    translation: PropTypes.any,
    sx: PropTypes.object
};

