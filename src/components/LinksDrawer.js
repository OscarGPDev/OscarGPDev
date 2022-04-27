import {Chip, Link} from "@mui/material";
import {Language} from "@mui/icons-material";

const LinksDrawer = ({links}) => {
    return (<div>{links?.map((link) => {
            return (<Chip
                key={`chip-${link.name}`}
                size="small"
                label={<Link
                    key={`link-${link.name}`}
                    target="_blank"
                    href={link.link}>{link.name}</Link>}
                icon={<Language/>}/>)
        }
    )
    }</div>);
};
export default LinksDrawer;