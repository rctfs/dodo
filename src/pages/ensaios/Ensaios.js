import React from "react";
import DomeGallery from "../../blocks/Components/DomeGallery/DomeGallery"
import "./Ensaios.css";
import FraseEnsaio from "./FraseEnsaio";

export default function Ensaios() {
    return (
        <div>
            <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}}>
                <DomeGallery fit={1} grayscale={false} dragDampening={4}/>
            </div>
            <div className="background">
                <FraseEnsaio frase={"Tu foste a 292 ensaios"}/>
                <FraseEnsaio frase={"Ou seja 584 horas"}/>
                <FraseEnsaio frase={"Ou então 35040 minutos"}/>
                <FraseEnsaio frase={"Daria para ver Friends quase 7 vezes!"}/>
                <FraseEnsaio frase={"E Gato Fedorento? Daria?"}/>
                <FraseEnsaio frase={"Daria para ver a Série Lopes da Silva 111 vezes!"}/>
                <FraseEnsaio frase={"Ou então ver a Série Fonseca 146 vezes!"}/>
                <FraseEnsaio frase={"A Série Meireles poderia ser vista 191 vezes!"}/>
                <FraseEnsaio frase={"E a Série Barbosa 201 vezes!"}/>
                <FraseEnsaio frase={"Poderias ver o Die Hard 1 267 vezes!"}/>
                <FraseEnsaio frase={"Ou até podias ter ficado em casa a ver o Totoro 407 vezes!"}/>
                <FraseEnsaio frase={"Podias ter gasto este tempo a ir a pé até Praga!"}/>
                <FraseEnsaio frase={"Mas não o fizeste"}/>
                <FraseEnsaio frase={"E por isso"}/>
                <FraseEnsaio frase={"Obrigado"}/>

            </div>
        </div>
    );
}
