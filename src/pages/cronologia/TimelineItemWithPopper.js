import React, { useState, useRef } from "react";
import {
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineDot,
    TimelineContent,
    TimelineOppositeContent,
} from "@mui/lab";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function TimelineItemWithPopper({ oppositeText, contentText, popperText }) {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null); // small span as anchor

    const handleEnter = () => setOpen(true);
    const handleLeave = () => setOpen(false);

    return (
        <>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <span
                        ref={anchorRef}
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                        style={{ cursor: "pointer", display: "inline-block" }}
                    >
            {oppositeText}
          </span>
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>{contentText}</TimelineContent>
            </TimelineItem>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                placement="right"
                disablePortal={false}
                modifiers={[
                    { name: "offset", options: { offset: [0, 8] } },
                ]}
            >
                <Paper sx={{ p: 1, bgcolor: "background.paper", boxShadow: 3 }}>
                    <Typography
                        sx={{ m: 0, color: "text.primary", fontSize: 16 }}
                    >
                        {popperText}
                    </Typography>
                </Paper>
            </Popper>

        </>
    );
}
