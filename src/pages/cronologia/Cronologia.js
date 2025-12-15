import Timeline from '@mui/lab/Timeline';
import './Cronologia.css';
import TimelineItemWithPopper from "./TimelineItemWithPopper";
import TimelineItemWithoutConnector from "./TimelineItemWithoutConnector";
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
                    <h1 className="ano">Aqui vais ter de me ajudar um bocadinho a completar isto</h1>
                    <h1 className="ano">2015</h1>
                    <Timeline position="left">
                        <TimelineItemWithPopper
                            oppositeText="24 de Outubro"
                            contentText="Primeiro Ensaio"
                        />
                        <TimelineItemWithPopper
                            oppositeText="7 de Dezembro 2015"
                            contentText="Primeiro Aniversário da TAISCTE"
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
                            contentText="Pedido de Apadrinhamento"
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
                            oppositeText="1/1/2018"
                            contentText="Primeira direção"
                            popperText=""
                        />
                    </Timeline>
                    <h1 className="ano">2019</h1>
                    <Timeline position="left">
                        <TimelineItemWithPopper
                            oppositeText="29 de Junho"
                            contentText="Passagem a Tuno"
                            popperText="Jantar com a Fortuna"
                        />
                    </Timeline>
                    <h1 className="ano">2020</h1>
                    <Timeline position="left">
                        <TimelineItemWithPopper
                            oppositeText="Maio 2020"
                            contentText="Primeiro Magistério"
                            popperText=""
                        />
                    </Timeline>
                    <h1 className="ano">2021</h1>
                    <Timeline position="left">
                        <TimelineItemWithPopper
                            oppositeText="29 de Junho"
                            contentText="Passagem a Veterana"
                            popperText="Agora sim!"
                        />
                    </Timeline>
                    <h1 className="ano">2022</h1>
                    <Timeline position="left">
                        <TimelineItemWithPopper
                            oppositeText="19 de Fevereiro"
                            contentText="Pedido de Amadrinhamento do Gadget"
                            popperText="VIII Badaladas"
                        />
                        <TimelineItemWithPopper
                            oppositeText="1 e 2 de Abril"
                            contentText="Jurada no XXI Fortuna"
                            popperText=""
                        />
                        <TimelineItemWithPopper
                            oppositeText="8 de Abril"
                            contentText="Pedido de Amadrinhamento do ÀBrás"
                            popperText="II Centaurus"
                        />
                    </Timeline>
                    <h1 className="ano">2023</h1>
                    <Timeline position="left">
                        <TimelineItemWithPopper
                            oppositeText="10 Junho"
                            contentText="Participação 30 anos Fortuna"
                            popperText=""
                        />
                        <TimelineItemWithPopper
                            oppositeText="16 Dezembro"
                            contentText="Criação em AGO da Direção de Eventos"
                            popperText=""
                        />
                    </Timeline>
                    <h1 className="ano">2024</h1>
                    <Timeline position="left">
                        <TimelineItemWithPopper
                            oppositeText="16 de Fevereiro"
                            contentText="Pedido de Amadrinhamento do Visigodo"
                            popperText="XXII Fortuna"
                        />
                    </Timeline>
                    <h1 className="ano">2025</h1>
                    <Timeline position="left">
                        <TimelineItemWithPopper
                            oppositeText="13 de Fevereiro"
                            contentText="Pedido de Amadrinhamento do Rémy"
                            popperText="VII Noites de Bruma"
                        />
                        <TimelineItemWithPopper
                            oppositeText="12 de Março"
                            contentText="Pedido de Amadrinhamento do Borracha"
                            popperText="II Churasco TAISCTE"
                        />
                        <TimelineItemWithoutConnector
                            oppositeText="7 de Dezembro"
                            contentText="Passagem a Cota-Veterana"
                        />
                    </Timeline>
                </div>
            </Slide>
        </div>
    )
        ;
}

export default Cronologia;
