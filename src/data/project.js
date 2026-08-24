import {
    Api,
    Speed,
    Storage,
    Security,
    LocationOn,
} from "@mui/icons-material";

export const projects = [
    {
        title: "Workforce Performance Tracker",

        subtitle: "Role-based workforce management platform",

        description:
            "A full-stack platform for employee onboarding, role management, performance evaluation, and attendance workflows.",

        technologies: [
            "FastAPI",
            "PostgreSQL",
            "React.js",
            "Material UI",
            "JWT",
            "RBAC",
        ],

        metrics: [
            {
                icon: Api,
                value: "20+",
                label: "REST endpoints",
            },
            {
                icon: Speed,
                value: "<200ms",
                label: "API response",
            },
            {
                icon: Storage,
                value: "200+",
                label: "employee records",
            },
        ],

        highlights: [
            "Engineered RESTful APIs for onboarding, role management, evaluation, and attendance.",
            "Designed normalized PostgreSQL schemas with composite indexes and optimized JOIN queries.",
            "Built Admin, Manager, and Employee dashboards with role-based access and real-time UI state synchronization.",
        ],

        codeUrl: "https://github.com/Hariprasad207/Workforce-Performance-Tracker",
        liveUrl: null,
    },

    {
        title: "AI-Powered Personal Expense Management",

        subtitle: "Spring Boot finance and analytics platform",

        description:
            "A personal finance platform for expense and income tracking, budgeting, analytics, automated alerts, and contextual AI insights.",

        technologies: [
            "Spring Boot",
            "PostgreSQL",
            "REST APIs",
            "JWT",
            "AI Engine",
        ],

        metrics: [
            {
                icon: Security,
                value: "JWT",
                label: "authentication",
            },
            {
                icon: Api,
                value: "REST",
                label: "API architecture",
            },
            {
                icon: Storage,
                value: "SQL",
                label: "persistent storage",
            },
        ],

        highlights: [
            "Implemented expense and income tracking with category and payment-mode classification.",
            "Secured REST endpoints using JWT authentication and role-based access control.",
            "Integrated automated budget alerts and an AI-driven insights assistant for contextual recommendations.",
        ],

        codeUrl: "https://github.com/Hariprasad207",
        liveUrl: null,
    },

    {
        title: "College Bus Live Tracking",

        subtitle: "Real-time GPS telemetry and ETA system",

        description:
            "A Flutter-based live bus tracking system allowing students and drivers to monitor real-time vehicle locations.",

        technologies: [
            "Flutter",
            "Firebase",
            "Google Maps API",
            "GPS",
            "Real-time Data",
        ],

        metrics: [
            {
                icon: Speed,
                value: "5 sec",
                label: "GPS interval",
            },
            {
                icon: LocationOn,
                value: "500+",
                label: "students",
            },
            {
                icon: Api,
                value: "Live",
                label: "GPS telemetry",
            },
        ],

        highlights: [
            "Built driver and passenger interfaces for live GPS visualization.",
            "Streamed coordinates through Firebase listeners at 5-second intervals for low-latency synchronization.",
            "Implemented ETA prediction using GPS coordinates and route-distance calculations.",
        ],

        codeUrl: "https://github.com/Hariprasad207/College-bus-Live-tracking",
        liveUrl: null,
    },
];