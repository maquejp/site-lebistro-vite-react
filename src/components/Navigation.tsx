import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavigationItemInterface } from "../interfaces/NavigationInterface";

export default function Navigation() {
    const navItems: NavigationItemInterface[] = [
        { id: 'home', label: 'Accueil' },
        { id: 'access', label: 'Accès' },
        { id: 'lacarte', label: 'La carte' },
        { id: 'accommodation', label: 'Hébergement' }
    ];

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar position="sticky" sx={{ background: '#20B2AA' }}>
            <Toolbar>
                <img src="logo.svg" alt="Lighthouse Logo" height="30" style={{ marginRight: '20px' }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Le Bistro</Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item.id} sx={{ color: '#fff' }} onClick={() => scrollToSection(item.id)}>
                            {item.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}