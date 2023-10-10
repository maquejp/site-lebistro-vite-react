import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

export default function Navigation() {
    const navItems = ['Accueil', 'Accès', 'La carte', 'Hébergement'];
    return (
        <AppBar position="sticky" sx={{background: '#20B2AA'}}>
            <Toolbar>
                <img src="logo.svg" alt="Lighthouse Logo" height="30" style={{marginRight: '20px'}}/>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>Le Bistro</Typography>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    {navItems.map((item) => (
                        <Button key={item} sx={{color: '#fff'}}>
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}