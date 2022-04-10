import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useState} from "react";
import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

const compare = (a, b, asc) => {
    if (asc) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
    } else {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        }
    }
    return 0;
};

const DataTable = ({headers, data, filters}) => {
    const [sortingBy, setSortingBy] = useState({id: null, ascending: false, default: true});
    const defaultSortingHeader = headers.find((header) => header.orderBy);
    let tableData = data;
    if (defaultSortingHeader && sortingBy.default) {
        tableData = tableData.sort((a, b) => compare(
            a[defaultSortingHeader.dataSource],
            b[defaultSortingHeader.dataSource],
            defaultSortingHeader.ascending));
    } else if (sortingBy.id !== null) {
        const sortingHeader = headers.find(h => h.id === sortingBy.id);
        tableData = tableData.sort((a, b) => compare(
            a[sortingHeader.dataSource],
            b[sortingHeader.dataSource],
            sortingBy.ascending));
    }
    const onClickSorting = (header) => {
        if (header.id !== sortingBy.id) {
            setSortingBy({id: header.id, ascending: sortingBy.ascending, default: false});
        } else {
            setSortingBy({id: header.id, ascending: !sortingBy.ascending, default: false});
        }
    }
    return (<TableContainer component={Paper}>
        {filters?.map(filter => <filter/>)}
        <Table aria-label="Portfolio table">
            <TableHead>
                <TableRow>
                    {headers?.map((header) => {
                        return (<TableCell key={`header-${header.id}`}
                                           onClick={() => onClickSorting(header)}>{header.title}
                            {(
                                    (header.id === sortingBy.id) || (sortingBy.default && header.orderBy)
                                ) &&
                                <IconButton>
                                    {sortingBy.default ?
                                        header.ascending ?
                                            <KeyboardArrowUp/> :
                                            <KeyboardArrowDown/>
                                        : sortingBy.ascending ?
                                            <KeyboardArrowUp/> :
                                            <KeyboardArrowDown/>}
                                </IconButton>}</TableCell>)
                    })}

                </TableRow>
            </TableHead>
            <TableBody>
                {tableData?.map((row, rowIndex) => <TableRow key={`data-row-${rowIndex}`}>
                    {headers?.map((header, index) => (
                        <TableCell key={`data-cell-${index}-${header.id}`}>
                            {header.drawFunction !== undefined ?
                                header.drawFunction(row)
                                : row[header.dataSource]}
                        </TableCell>))}
                </TableRow>)}
            </TableBody>
        </Table>
    </TableContainer>);
};
export default DataTable;