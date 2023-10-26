import {
    Box,
    Card,
    CardContent,
    CardHeader,
    List,
    ListItem,
    ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from "@mui/material";

export default function Accommodation() {
    return (
        <Card id="accommodation" sx={{
            marginTop: 2,
        }}>
            <CardHeader
                title="Hébergement"
            />
            <CardContent>
                <Box sx={{
                    paddingLeft: 2,
                    paddingBottom: 2
                }}>
                    <Typography sx={{ fontSize: 20 }}>Tarif 2023</Typography>
                </Box>
                <Box sx={{
                    paddingLeft: 2,
                    paddingBottom: 2
                }}>
                    <Typography sx={{ fontSize: 18, color: 'blue' }}>En demi-pension uniquement</Typography>
                </Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>1 Pers.</TableCell>
                                <TableCell>68€</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>3 Pers.</TableCell>
                                <TableCell>142€</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell sx={{ fontWeight: 'bold' }}>2 Pers.</TableCell>
                                <TableCell>107€</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>4 Pers.</TableCell>
                                <TableCell>174€</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={{ paddingLeft: 2, paddingTop: 2 }}>
                    <Typography sx={{ fontSize: 20, color: 'red' }}>Le prix ne comprends pas les boissons.</Typography>
                </Box>
                <Box sx={{ paddingLeft: 2, paddingTop: 2 }}>
                    <Typography>Comprend:</Typography>
                    <List>
                        <ListItem><ListItemText>La chambre</ListItemText></ListItem>
                        <ListItem><ListItemText>Le repas du soir (non fixe)</ListItemText></ListItem>
                        <ListItem><ListItemText>Le petit déjeuner du lendemain</ListItemText></ListItem>
                    </List>
                    <Typography sx={{ fontStyle: 'italic' }}>Le WC et la salle de bain sont sur le palier. (La
                        chambre dispose d'un
                        lavabo)</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}