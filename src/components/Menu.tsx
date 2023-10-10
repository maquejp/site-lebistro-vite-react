import {MenuSectionInterface, MenuSectionItemInterface} from "../interfaces/MenuInterface.tsx";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import {ChangeEvent} from "react";

export const Menu = ({accordionKey, title, price, sections, expanded, handleChange}: {
    accordionKey: string,
    title: string,
    price: string,
    sections: MenuSectionInterface[],
    expanded: boolean,
    handleChange: (event: ChangeEvent<NonNullable<unknown>>, isExpanded: boolean) => void
}) => {
    return (
        <>
            <Accordion key={accordionKey} expanded={expanded}
                       onChange={handleChange}>
                <AccordionSummary
                    expandIcon={<ExpandMore/>}
                    aria-controls="`item.id`bh-content"
                    id="`item.id`bh-header"
                >
                    <Typography sx={{flexShrink: 0, fontWeight: 'bold'}}>{title} {price}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        sections.map(
                            (section: MenuSectionInterface) => (
                                <>
                                    <Typography sx={{
                                        flexShrink: 0,
                                        fontWeight: 'bold',
                                        paddingLeft: 2
                                    }}>{section.title}</Typography>
                                    {
                                        section.items.map(
                                            (item: MenuSectionItemInterface, index) => (
                                                <Typography sx={{
                                                    flexShrink: 0,
                                                    paddingLeft: 4
                                                }}>
                                                    {index > 0 ? "ou " : ""}
                                                    {item.title}
                                                </Typography>
                                            )
                                        )
                                    }
                                </>
                            )
                        )
                    }
                </AccordionDetails>
            </Accordion>
        </>
    );
};