import {Chip} from "@mui/material";
import {useMemo, useState} from "react";

const DrawTechnologies = ({data, randomColors}) => {
    const [chipsData, setChipsData] = useState([])
    useMemo(() => {
        const getRandomColor = () => {
            let result;
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

        const tokens = [];
        const getColorFromToken = (element) => {
            let result = tokens.find(t => t.data === element);
            if (!result) {
                result = {data: element, color: getRandomColor()};
                tokens.push(result);
            }
            return result.color;
        };
        const tmpResultArray = [];
        data.forEach(element => tmpResultArray.push({
                label: element,
                color: randomColors ? getRandomColor() : getColorFromToken(element)
            })
        );
        setChipsData(tmpResultArray);
    }, [data, randomColors]);

    return (<div>{chipsData.map((c) => {
        return (<Chip key={`chip-${c.label}`} color={c.color} size="small" label={
                c.label
            }/>
        )
    })}</div>);
};
export default DrawTechnologies;
