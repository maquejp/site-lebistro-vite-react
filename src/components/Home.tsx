import { Box, Card, CardContent, CardMedia, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function Home() {
    const listVacation: string[] = [
        "Du 01 Octobre 2023 à midi au 17 Octobre 2023 inclus",
        "Du 26 Novembre 2023 à midi au 25 Décembre 2023 inclus",
        "Congé annuel 2024, du 27 Janvier 2024 à midi au 16 Février 2024 inclus",
    ];
    return (
        <Card id="home" sx={{
            marginTop: 2,
        }}>
            <CardMedia
                component="img"
                height="600"
                image="facade.jpg"
                alt="Le Bistro"
            />
            <CardContent>
                <Typography sx={{
                    paddingTop: 2,
                    paddingLeft: 2
                }}>
                    Bar - Hôtel - Restaurant situé au cap gris nez (Boulogne sur Mer) en France.
                </Typography>
                <Typography sx={{
                    paddingTop: 2,
                    paddingLeft: 2
                }}>
                    Tenu par un jeune couple super sympa l'ambiance y est conviviale et la cuisine super délicieuse
                    (on fait la route rien que pour y manger).
                </Typography>
                <Typography sx={{
                    paddingTop: 2,
                    paddingLeft: 2
                }}>
                    Les chambres sont supers confortables et tout cela pour un prix plus que raisonnable...
                </Typography>
                <Typography sx={{
                    paddingTop: 2,
                    paddingLeft: 2,
                    color: 'green'
                }}>
                    On y accepte les animaux
                </Typography>
                <Typography sx={{
                    paddingTop: 2,
                    paddingLeft: 2,
                    color: 'red',
                    fontSize: 24
                }}>
                    Toujours téléphoner pour réserver du mercredi au dimanche.
                </Typography>
                <Typography sx={{
                    paddingTop: 2,
                    paddingLeft: 2,
                    color: '#1ab7ea',
                    fontSize: 24
                }}>
                    Journée de repos: les lundi et mardi (Hors Juillet et Août)
                </Typography>
                <Typography sx={{
                    paddingTop: 2,
                    paddingLeft: 2,
                    color: '#1ab7ea',
                    fontSize: 24
                }}>
                    Jours de fermeture
                </Typography>
                <Box sx={{
                    paddingLeft: 2,
                }}>
                    <List>
                        {
                            listVacation.map(
                                v => (
                                    <ListItem key={v}>
                                        <ListItemText primary={v} />
                                    </ListItem>
                                )
                            )
                        }
                    </List>
                </Box>
            </CardContent>
        </Card>
    )
}