import { useState } from "react";

import {
    AppBar,
    Toolbar,
    Container,
    Box,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Tooltip,
} from "@mui/material";

import {
    Menu,
    LightMode,
    DarkMode,
} from "@mui/icons-material";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar({ mode, onToggleTheme }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleNavigation = (href) => {
        setDrawerOpen(false);

        document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <>
            <AppBar position="sticky">
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ minHeight: 70 }}>
                        <Typography
                            component="a"
                            href="#top"
                            sx={{
                                color: "text.primary",
                                textDecoration: "none",
                                fontWeight: 850,
                                fontSize: "1.15rem",
                                mr: 4,
                            }}
                        >
                            HN
                            <Box
                                component="span"
                                sx={{ color: "primary.main" }}
                            >
                                .
                            </Box>
                        </Typography>

                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "flex",
                                },
                                flexGrow: 1,
                            }}
                        >
                            {navItems.map((item) => (
                                <Button
                                    key={item.href}
                                    onClick={() => handleNavigation(item.href)}
                                    sx={{
                                        color: "text.secondary",
                                        mx: 0.25,
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        <Stack direction="row">
                            <Tooltip
                                title={
                                    mode === "dark"
                                        ? "Light mode"
                                        : "Dark mode"
                                }
                            >
                                <IconButton
                                    onClick={onToggleTheme}
                                    color="inherit"
                                    aria-label="Toggle theme"
                                >
                                    {mode === "dark" ? (
                                        <LightMode />
                                    ) : (
                                        <DarkMode />
                                    )}
                                </IconButton>
                            </Tooltip>

                            <IconButton
                                onClick={() => setDrawerOpen(true)}
                                sx={{
                                    display: {
                                        xs: "inline-flex",
                                        md: "none",
                                    },
                                }}
                                color="inherit"
                                aria-label="Open navigation"
                            >
                                <Menu />
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box sx={{ width: 270, pt: 2 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            px: 3,
                            py: 2,
                            fontWeight: 800,
                        }}
                    >
                        Navigation
                    </Typography>

                    <List>
                        {navItems.map((item) => (
                            <ListItem
                                key={item.href}
                                disablePadding
                            >
                                <ListItemButton
                                    onClick={() =>
                                        handleNavigation(item.href)
                                    }
                                >
                                    <ListItemText
                                        primary={item.label}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}