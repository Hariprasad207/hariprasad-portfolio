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

export default function Navbar({
    mode,
    onToggleTheme,
}) {
    const [drawerOpen, setDrawerOpen] =
        useState(false);

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
                <Container
                    maxWidth="lg"
                    sx={{
                        px: {
                            xs: 2,
                            sm: 3,
                            md: 3,
                        },
                    }}
                >
                    <Toolbar
                        disableGutters
                        sx={{
                            minHeight: 64,
                        }}
                    >
                        {/* Logo */}

                        <Typography
                            component="a"
                            href="#top"
                            sx={{
                                color: "text.primary",
                                textDecoration: "none",
                                fontWeight: 850,
                                fontSize: "1.15rem",
                                mr: {
                                    xs: 1.5,
                                    md: 4,
                                },
                            }}
                        >
                            HN
                            <Box
                                component="span"
                                sx={{
                                    color: "primary.main",
                                }}
                            >
                                .
                            </Box>
                        </Typography>

                        {/* Desktop Navigation */}

                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "flex",
                                },
                                flexGrow: 1,
                                alignItems: "center",
                            }}
                        >
                            {navItems.map((item) => (
                                <Button
                                    key={item.href}
                                    onClick={() =>
                                        handleNavigation(item.href)
                                    }
                                    sx={{
                                        color: "text.secondary",
                                        mx: 0.25,

                                        "&:hover": {
                                            color: "primary.main",
                                            backgroundColor:
                                                "transparent",
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        {/* Actions */}

                        <Stack
                            direction="row"
                            spacing={0.25}
                            sx={{
                                ml: "auto",
                            }}
                        >
                            <Tooltip
                                title={
                                    mode === "dark"
                                        ? "Switch to light mode"
                                        : "Switch to dark mode"
                                }
                            >
                                <IconButton
                                    onClick={onToggleTheme}
                                    aria-label="Toggle theme"
                                    sx={{
                                        color: "text.primary",
                                    }}
                                >
                                    {mode === "dark" ? (
                                        <LightMode />
                                    ) : (
                                        <DarkMode />
                                    )}
                                </IconButton>
                            </Tooltip>

                            {/* Mobile Menu */}

                            <IconButton
                                onClick={() =>
                                    setDrawerOpen(true)
                                }
                                aria-label="Open navigation menu"
                                sx={{
                                    display: {
                                        xs: "inline-flex",
                                        md: "none",
                                    },
                                    color: "text.primary",
                                }}
                            >
                                <Menu />
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box
                    sx={{
                        width: {
                            xs: 280,
                            sm: 320,
                        },
                        pt: 2,
                        bgcolor: "background.paper",
                        minHeight: "100%",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            px: 3,
                            py: 2,
                            fontWeight: 800,
                            color: "text.primary",
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
                                    sx={{
                                        px: 3,
                                        py: 1.5,
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        slotProps={{
                                            primary: {
                                                sx: {
                                                    color: "text.primary",
                                                    fontWeight: 550,
                                                },
                                            },
                                        }}
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