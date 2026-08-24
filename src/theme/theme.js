import { createTheme } from "@mui/material/styles";

export const createAppTheme = (mode) => {
    const dark = mode === "dark";

    return createTheme({
        palette: {
            mode,

            primary: {
                main: dark ? "#64b5f6" : "#1565c0",
            },

            secondary: {
                main: dark ? "#4dd0e1" : "#00838f",
            },

            background: {
                default: dark ? "#08111f" : "#f6f8fb",
                paper: dark ? "#0d1b2a" : "#ffffff",
            },

            text: {
                primary: dark ? "#edf4fb" : "#17202a",
                secondary: dark ? "#a9b8c8" : "#5f6b76",
            },
        },

        typography: {
            fontFamily:
                '"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif',

            h1: {
                fontWeight: 800,
                letterSpacing: "-0.04em",
            },

            h2: {
                fontWeight: 750,
                letterSpacing: "-0.025em",
            },

            h3: {
                fontWeight: 700,
            },

            button: {
                textTransform: "none",
                fontWeight: 650,
            },

            body1: {
                lineHeight: 1.75,
            },

            body2: {
                lineHeight: 1.65,
            },
        },

        shape: {
            borderRadius: 12,
        },

        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    html: {
                        scrollBehavior: "smooth",
                    },

                    body: {
                        margin: 0,
                    },

                    "*": {
                        boxSizing: "border-box",
                    },
                },
            },

            MuiAppBar: {
                defaultProps: {
                    elevation: 0,
                },

                styleOverrides: {
                    root: {
                        backdropFilter: "blur(14px)",

                        backgroundColor: dark
                            ? "rgba(8,17,31,0.86)"
                            : "rgba(255,255,255,0.88)",

                        borderBottom: `1px solid ${dark
                                ? "rgba(255,255,255,0.08)"
                                : "rgba(15,23,42,0.08)"
                            }`,
                    },
                },
            },

            MuiCard: {
                styleOverrides: {
                    root: {
                        border: `1px solid ${dark
                                ? "rgba(255,255,255,0.08)"
                                : "rgba(15,23,42,0.08)"
                            }`,

                        boxShadow: dark
                            ? "0 12px 40px rgba(0,0,0,0.20)"
                            : "0 10px 35px rgba(15,23,42,0.07)",

                        transition:
                            "transform 180ms ease, box-shadow 180ms ease",

                        "&:hover": {
                            transform: "translateY(-4px)",
                        },
                    },
                },
            },

            MuiChip: {
                styleOverrides: {
                    root: {
                        fontWeight: 600,
                    },
                },
            },
        },
    });
};