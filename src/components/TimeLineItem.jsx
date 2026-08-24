import {
    Box,
    Card,
    CardContent,
    Typography,
} from "@mui/material";

export default function TimelineItem({
    item,
    isLast,
}) {
    const Icon = item.icon;

    return (
        <Box
            sx={{
                display: "flex",
                gap: 2.5,
                position: "relative",
                pb: isLast ? 0 : 4,
            }}
        >
            {!isLast && (
                <Box
                    sx={{
                        position: "absolute",
                        left: 22,
                        top: 48,
                        bottom: 0,
                        width: 1,
                        bgcolor: "divider",
                    }}
                />
            )}

            <Box
                sx={{
                    width: 46,
                    height: 46,
                    flexShrink: 0,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <Icon />
            </Box>

            <Card sx={{ flexGrow: 1 }}>
                <CardContent sx={{ p: 3 }}>
                    <Typography
                        variant="overline"
                        color="primary"
                        sx={{ fontWeight: 800 }}
                    >
                        {item.date}
                    </Typography>

                    <Typography variant="h5">
                        {item.title}
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{ mb: 2 }}
                    >
                        {item.organization}
                    </Typography>

                    {item.points.map((point) => (
                        <Box
                            key={point}
                            sx={{
                                display: "flex",
                                gap: 1,
                                mb: 0.8,
                            }}
                        >
                            <Typography color="primary">
                                •
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                {point}
                            </Typography>
                        </Box>
                    ))}
                </CardContent>
            </Card>
        </Box>
    );
}