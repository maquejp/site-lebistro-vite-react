import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {CarteSection} from "../interfaces/CarteInterfaces.tsx";
import {ExpandMore} from "@mui/icons-material";
import {CreateAccordionDetails} from "./CreateAccordionDetails.tsx";
import {ChangeEvent} from "react";

export function CreateAccordion({accordionKey, data, expanded, handleChange}: {
    accordionKey: string,
    data: CarteSection[],
    expanded: boolean,
    handleChange: (event: ChangeEvent<NonNullable<unknown>>, isExpanded: boolean) => void
}) {
    return (
        <>
            {data.map((item) => (
                <Accordion key={accordionKey} expanded={expanded}
                           onChange={handleChange}>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="`accordionKey`bh-content"
                        id="`accordionKey`bh-header"
                    >
                        <Typography sx={{flexShrink: 0, fontWeight: 'bold'}}>
                            {item.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CreateAccordionDetails data={item.items}/>
                    </AccordionDetails>
                    <AccordionActions>
                        {
                            item.notes.map(
                                (n) => (
                                    <Typography>{n}</Typography>
                                )
                            )
                        }
                    </AccordionActions>
                </Accordion>
            ))}
        </>
    )
}