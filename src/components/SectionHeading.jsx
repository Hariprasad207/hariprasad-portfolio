import { Box, Typography } from "@mui/material";

export default function SectionHeading({
    eyebrow,
    title,
    description,
}) {
    return (
        <Box sx={{ mb: 5 }}>
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
                        md: "2.7rem",
                    },
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
                            xs: "1rem",
                            md: "1.05rem",
                        },
                    }}
                >
                    {description}
                </Typography>
            )}
        </Box>
    );
}