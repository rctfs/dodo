import React from "react";
import ScrollReveal from '../../blocks/TextAnimations/ScrollReveal/ScrollReveal';
import "./Ensaios.css";

export default function FraseEnsaio({frase}) {
    return (
            <div className="full-screen-section">
                <ScrollReveal baseRotation={0}>
                    {frase}
                </ScrollReveal>
        </div>
    );
}