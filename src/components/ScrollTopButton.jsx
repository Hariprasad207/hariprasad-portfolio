import { useEffect, useState } from "react";

import {
    IconButton,
} from "@mui/material";

import {
    KeyboardArrowUp,
} from "@mui/icons-material";

export default function ScrollTopButton() {
    const [visible, setVisible] =
        useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 600);
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <IconButton
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            aria-label="Back to top"
            sx={{
                position: "fixed",
                right: 24,
                bottom: 24,
                zIndex: 1200,
                bgcolor: "primary.main",
                color: "primary.contrastText",

                "&:hover": {
                    bgcolor: "primary.dark",
                },
            }}
        >
            <KeyboardArrowUp />
        </IconButton>
    );
}