import {useState} from "react";
import {Modal} from "@mui/material";
import {useTranslation} from "react-i18next";
import {ProjectCardBase} from "./ProjectCardBase";


const ProjectCard = ({
                         image, title, description, links, tags, date
                     }) => {
    const [open, setOpen] = useState(false);
    const {t: translation} = useTranslation();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return <><ProjectCardBase image={image} date={date} title={title} description={description} data={tags}
                              links={links} onClick={handleOpen} translation={translation("details")}/>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ProjectCardBase image={image} date={date} title={title} description={description} data={tags}
                             links={links} onClick={handleOpen} translation={translation("details")}
                             isModal={true}
                             cardSx={{
                                 position: 'absolute',
                                 top: '50%',
                                 left: '50%',
                                 transform: 'translate(-50%, -50%)',
                                 width: {xs: "100vw", lg: "75vw", xl: "500px"},
                                 boxShadow: 24,
                             }}/>
        </Modal></>
}
export default ProjectCard;
