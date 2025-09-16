import Timeline from '@mui/lab/Timeline';
import './Cronologia.css';
import TimelineItemWithPopper from "./TimelineItemWithPopper";
import Slide from '@mui/material/Slide';
import React, {useState, useEffect} from 'react';
import Theme from "../../Theme";

function Cronologia() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setChecked(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="cronologia-container">
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit
                   easing={{enter: Theme.transitions.easing.easeOut}}
                   timeout={1500}>
                <div>
                    <h1 className="ano">2015</h1>
                    <Timeline position="left">
                        <TimelineItemWithPopper
                            oppositeText="Outubro"
                            contentText="Primeiro Ensaio"
                            // popperText="Breakfast time"
                        />
                        <TimelineItemWithPopper
                            oppositeText="7 de Dezembro 205"
                            contentText="Primeiro Aniversário da TAISCTE"
                            // popperText="Breakfast time"
                        />
                    </Timeline>
                    <h1 className="ano">2016</h1>
                    <Timeline position="left">
                    <TimelineItemWithPopper
                        oppositeText="19 Fevereiro "
                        contentText="Primeiro Retiro"
                        popperText="Retiro de Estremoz"
                    />
                    <TimelineItemWithPopper
                        oppositeText="4 Novembro"
                        contentText="Primeiro Festival"
                        popperText="II Vielas Vadias"
                    />
                    </Timeline>
                    <h1 className="ano">2017</h1>
                    <Timeline position="left">
                    <TimelineItemWithPopper
                        oppositeText="Março"
                        contentText="Pedido de Apradinhamento"
                        // popperText="Nap time"
                    />
                    <TimelineItemWithPopper
                        oppositeText="1 Abril"
                        contentText="Subida a Palco"
                        popperText="VIII Lisboa Eterna"
                    />
                    <TimelineItemWithPopper
                        oppositeText="8 Dezembro"
                        contentText="Primeira eleição para a direção"
                        popperText="Vice-Maestrina"
                    />
                    </Timeline>
                    <h1 className="ano">2018</h1>
                    <Timeline position="left">
                    <TimelineItemWithPopper
                        oppositeText="3/1/2020"
                        contentText="Sleep"
                        popperText="Nap time"
                    />
                </Timeline>
        </div>
</Slide>
</div>
)
    ;
}

export default Cronologia;
