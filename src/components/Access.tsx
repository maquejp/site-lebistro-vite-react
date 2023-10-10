import {Box, Card, CardContent, CardHeader, Typography} from "@mui/material";
import "leaflet/dist/leaflet.css";
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function Access() {
    // const position: LatLngExpression = [51.505, -0.09];
    return (
        <Card sx={{
            marginTop: 2,
        }}>
            <CardHeader
                title="Accéder"
            />
            <CardContent>
                <Box sx={{
                    paddingLeft: 2,
                }}>
                    <Typography>Le Bistro</Typography>
                    <Typography>Cap Griz-Nez</Typography>
                    <Typography>869 Route du Cap Hameau de Framezelle</Typography>
                    <Typography>62179 Audinghen</Typography>
                    <Typography>France</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <PhoneInTalkIcon/>&nbsp;+33 (0)6 59 37 66 67
                    </Box>

                </Box>
                <Box sx={{
                    paddingTop: 2,
                    paddingLeft: 2,
                    paddingBottom: 2,
                    paddingRight: 2
                }}>
                    <MapContainer center={[50.863870, 1.592080]} zoom={14}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[50.863870, 1.592080]}/>
                    </MapContainer>
                </Box>
            </CardContent>
        </Card>
    )
}