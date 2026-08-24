import {
    Box,
    Typography,
} from "@mui/material";

export default function SectionHeading({
    eyebrow,
    title,
    description,
}) {
    return (
        <Box
            sx={{
                mb: {
                    xs: 3.5,
                    md: 5,
                },
            }}
        >
            <Typography
                variant="overline"
                color="primary"
                sx={{
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                }}
            >
                {eyebrow}
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    mt: 0.5,
                    mb: 1,

                    fontSize: {
                        xs: "2rem",
                        sm: "2.3rem",
                        md: "2.7rem",
                    },

                    lineHeight: 1.15,
                }}
            >
                {title}
            </Typography>

            {description && (
                <Typography
                    color="text.secondary"
                    sx={{
                        maxWidth: 720,

                        fontSize: {
                            xs: "0.95rem",
                            md: "1.05rem",
                        },

                        lineHeight: 1.7,
                    }}
                >
                    {description}
                </Typography>
            )}
        </Box>
    );
}