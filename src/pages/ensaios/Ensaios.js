import React, {useState, useEffect} from 'react';
import "./Ensaios.css";
import CountUp from "../../blocks/TextAnimations/CountUp/CountUp";
import {Fade} from "@mui/material";

export default function Ensaios() {


    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setChecked(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
            <div>
                <Fade in={checked} timeout={1500}>
                    <div>
                        <div className="full-screen-section">
                            <div>
                                <p>Tu foste a{" "}
                                    <CountUp
                                        from={0}
                                        to={304}
                                        delay={1}/>
                                    {" "}ensaios</p>
                            </div>
                        </div>
                        <div className="full-screen-section">
                            <div>
                                <p>Ou seja{" "}
                                    <CountUp
                                        from={0}
                                        to={608}
                                    />
                                    {" "}horas</p>
                            </div>
                            <img src="/bigben.gif" className="bigben-img"/>
                        </div>
                        <div className="full-screen-section"
                             style={{background: "linear-gradient(to bottom, #006699 20%, #453d66 100%)"}}>
                            <div>
                                <p>Ou então{" "}
                                    <CountUp
                                        from={0}
                                        to={36480}
                                    />
                                    {" "}minutos</p>
                            </div>
                        </div>
                        <div className="full-screen-section" style={{backgroundColor: "#453d66", animation: "none"}}>
                            <div>
                                <p>Daria para ver Friends quase 7 vezes!</p>
                                <img src="/rachelFriends.png" className="rachel-img"/>
                                <img src="/joeyFriends.gif" className="joey-img"/>
                            </div>
                        </div>
                        <div className="full-screen-section"
                             style={{background: "linear-gradient(to bottom, #453d66 10%, #006699 75%)"}}>
                            <div>
                                <p>E Gato Fedorento? Daria?</p>
                            </div>
                        </div>
                        <div className="full-screen-section">
                            <div>
                                <p>Daria para ver a Série Lopes da Silva{" "}
                                    <CountUp
                                        from={0}
                                        to={115}
                                    />
                                    {" "}vezes</p>
                                <img src="https://i.imgur.com/emP4FZB.gif" className="fullscreen-gif"/>
                            </div>
                        </div>
                        <div className="full-screen-section">
                            <div>
                                <p>Ou então a Série Fonseca{" "}
                                    <CountUp
                                        from={0}
                                        to={152}
                                    />
                                    {" "}vezes</p>
                                <img src="https://i.imgur.com/COQQsaW.gif" className="fullscreen-gif"/>
                            </div>
                        </div>
                        <div className="full-screen-section">
                            <div>
                                <p>A Série Meireles poderia ser vista{" "}
                                    <CountUp
                                        from={0}
                                        to={198}
                                    />
                                    {" "}vezes</p>
                            </div>
                            <img src="https://i.imgur.com/XoTZVTG.gif" className="fullscreen-gif"/>
                        </div>
                        <div className="full-screen-section">
                            <div>
                                <p>E a série Barbosa{" "}
                                    <CountUp
                                        from={0}
                                        to={209}
                                    />
                                    {" "}vezes</p>
                                <img src="https://i.imgur.com/ImU0Lrz.gif" className="fullscreen-gif"/>

                            </div>
                        </div>
                        <div className="full-screen-section">
                            <div>
                                <p>Ou até podias ter ficado em casa a ver o Totoro{" "}
                                    <CountUp
                                        from={0}
                                        to={424}
                                    />
                                    {" "}vezes</p>
                                <img src="/totoro.gif" className="fullscreen-gif"/>
                            </div>
                        </div>
                        <div className="full-screen-section formacoes">
                            <div>
                                <p>Podias ter gasto este tempo a tirar estas formações:</p>
                                <p>Curso de Soldadura (150 horas)</p>
                                <p>Curso de Barbeiro (225 horas)</p>
                                <p>Curso de Drenagem Linfática (50 horas)</p>
                                <p>Master em Depilação a Laser (50 horas)</p>
                                <p>Atualização Científica e Técnica em Segurança e Higiene do Trabalho  (100 horas)</p>
                                <p>Auricoloterapia para animais  (8 horas)</p>
                                <p>Formação prática de empilhadora  (8 horas)</p>
                                <p>Formação teórica de empilhadora  (8 horas)</p>
                                <p>Curso AFF Queda Livre Acelerada  (8 horas)</p>
                                <p>E sobrava-te uma hora para descansar!</p>
                            </div>
                        </div>
                        <div className="full-screen-section">
                            <div>
                                <p>Mas não o fizeste</p>
                            </div>
                        </div>
                        <div className="full-screen-section">
                            <div>
                                <p>E por isso</p>
                            </div>
                        </div>
                        <div className="full-screen-section">
                            <div>
                                <p>Obrigado</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
