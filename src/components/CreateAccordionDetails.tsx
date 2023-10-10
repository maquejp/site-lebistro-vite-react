import {CarteSectionItem} from "../interfaces/CarteInterfaces.tsx";
import {Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";

export function CreateAccordionDetails({data}: { data: CarteSectionItem[] }) {
    return (
        <>
            <TableContainer>
                <Table>
                    <TableBody>
                        {data.map(
                            (item: CarteSectionItem, idx: number) => (
                                <TableRow key={idx}>
                                    <TableCell>
                                        <Typography>{item.title}</Typography>
                                        {item.subtitle !== '-' &&
                                            <Typography sx={{fontStyle: 'italic'}}>{item.subtitle}</Typography>}
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{item.price}</Typography>
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}