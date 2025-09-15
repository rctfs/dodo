import Timeline from '@mui/lab/Timeline';
import './Cronologia.css';
import TimelineItemWithPopper from "./TimelineItemWithPopper";
import Slide from '@mui/material/Slide';
import React, {useState, useEffect} from 'react';
import Theme from "../../Theme";

function Cronologia() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className="cronologia-container">
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit
                   easing={{enter: Theme.transitions.easing.easeOut}}
                   timeout={1500}>
                <div>
                    <h1 className="ano">2018</h1>
                    <Timeline position="left">
                        <TimelineItemWithPopper
                            oppositeText="1/1/2020"
                            contentText="Eat"
                            popperText="Breakfast time"
                        />
                        <TimelineItemWithPopper
                            oppositeText="2/1/2020"
                            contentText="Code"
                            popperText="Work on project"
                        />
                        <TimelineItemWithPopper
                            oppositeText="3/1/2020"
                            contentText="Sleep"
                            popperText="Nap time"
                        />
                        <TimelineItemWithPopper
                            oppositeText="3/1/2020"
                            contentText="Sleep"
                            popperText="Nap time"
                        />
                        <TimelineItemWithPopper
                            oppositeText="3/1/2020"
                            contentText="Sleep"
                            popperText="Nap time"
                        />
                        <TimelineItemWithPopper
                            oppositeText="3/1/2020"
                            contentText="Sleep"
                            popperText="Nap time"
                        />
                        <TimelineItemWithPopper
                            oppositeText="3/1/2020"
                            contentText="Sleep"
                            popperText="Nap time"
                        />
                    </Timeline>
                </div>
            </Slide>
        </div>
    );
}

export default Cronologia;
