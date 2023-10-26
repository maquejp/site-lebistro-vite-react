import { Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import { CreateAccordion } from "./CreateAccordion.tsx";
import { ChangeEvent, useState } from "react";
import {
    carteDessertsData,
    carteEntreeData,
    carteOmeletteViandesData,
    cartePlatsEnfantsData,
    cartePoissonsFruitDeMerData,
    menuData
} from "../datas";
import { Menu } from "./Menu.tsx";
import { MenuInterface } from "../interfaces/MenuInterface.tsx";


export default function Carte() {
    const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);
    const handleChangeAccordion = (panelId: string) => (_: ChangeEvent<NonNullable<unknown>>, isExpanded: boolean) => {
        setExpandedAccordion(isExpanded ? panelId : null);
    };
    return (
        <Card id="lacarte" sx={{
            marginTop: 2,
        }}>
            <CardHeader
                title="La carte"
            />
            <CardContent>
                {
                    menuData.map(
                        (menu: MenuInterface) => (
                            <Menu key={menu.id} accordionKey={menu.id} title={menu.title} price={menu.price}
                                sections={menu.items}
                                expanded={expandedAccordion === menu.id}
                                handleChange={handleChangeAccordion(menu.id)} />
                        )
                    )
                }
                <CreateAccordion key={'panel1'} accordionKey={'panel1'} data={carteEntreeData}
                    expanded={expandedAccordion === 'panel1'}
                    handleChange={handleChangeAccordion('panel1')} />
                <CreateAccordion key={'panel2'} accordionKey={'panel2'} data={carteOmeletteViandesData}
                    expanded={expandedAccordion === 'panel2'}
                    handleChange={handleChangeAccordion('panel2')} />
                <CreateAccordion key={'panel3'} accordionKey={'panel3'} data={cartePoissonsFruitDeMerData}
                    expanded={expandedAccordion === 'panel3'}
                    handleChange={handleChangeAccordion('panel3')} />
                <CreateAccordion key={'panel4'} accordionKey={'panel4'} data={carteDessertsData}
                    expanded={expandedAccordion === 'panel4'}
                    handleChange={handleChangeAccordion('panel4')} />
                <CreateAccordion key={'panel5'} accordionKey={'panel5'} data={cartePlatsEnfantsData}
                    expanded={expandedAccordion === 'panel5'}
                    handleChange={handleChangeAccordion('panel5')} />
            </CardContent>
            <CardActions>
                <Typography sx={{ fontSize: '12px', color: 'red', fontWeight: 'bold' }}>Tarif 2023</Typography>
            </CardActions>
        </Card>
    )
}