import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        body1: { fontSize: '2rem', lineHeight: 1.5 },  // TimelineContent
        body2: { fontSize: '1.75rem', lineHeight: 1.43 }, // TimelineOppositeContent
    },
    components: {
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    borderWidth:"4px",
                    padding: "8px"
                },
            },
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    width: "4px",
                    height: "64px",
                },
            },
        },
        MuiTimelineItem: {
            styleOverrides: {
                root: {


                },
            },
        },
        MuiTimelineContent: {
            styleOverrides: {
                root: {
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    textAlign: 'right', // or center if you prefer
                    fontSize: "1.6rem",
                    lineHeight: 1.8,
                    padding: "2px 16 px"
                },
            },
        },
        MuiTimelineOppositeContent: {
            styleOverrides: {
                root: {

                },
            },
        },
    },
});

export default theme;
