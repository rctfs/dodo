import React from "react";
import Stepper, {Step} from "../../blocks/Components/Stepper/Stepper";
import "./Direcao.css";

export default function direcao() {

    return (
        <Stepper
            initialStep={1}
            backButtonText="Anterior"
            nextButtonText="Seguinte"
        >
            <Step>
                <h1>Ano 2017/2018</h1>
                <h3>2º Semestre</h3>
                <h2>Vice-Maestrina</h2>
                <h4>Maestrina: Pingu</h4>
            </Step>

            <Step>
                <h1>Ano 2018/2019</h1>
                <h3>1º Semestre</h3>
                <h2>Vice-Maestrina</h2>
                <h4>Maestrina: Pingu</h4>
                <h2>Comissão Organizadora do Lisboa Eterna</h2>
            </Step>
            <Step>
                <h1>Ano 2018/2019</h1>
                <h3>2º Semestre</h3>
                <h2>Vice-Maestrina</h2>
                <h4>Maestrina: Pingu</h4>
                <h2>Comissão Organizadora do Lisboa Eterna</h2>
            </Step>
            <Step>
                <h1>Ano 2019/2020</h1>
                <h3>1º Semestre</h3>
                <h2>Tesoureira</h2>
                <h4>Magíster: Ainanas</h4>
                <h2>Vice-Coordenadora do DCI</h2>
                <h4>Coordenadora: Juba</h4>
            </Step>
            <Step>
                <h1>Ano 2020/2021</h1>
                <h3>1º Semestre</h3>
                <h2>Magíster</h2>
                <h4>Vice-Magíster: Ainanas</h4>
            </Step>
            <Step>
                <h1>Ano 2020/2021</h1>
                <h3>2º Semestre</h3>
                <h2>Magíster</h2>
                <h4>Vice-Magíster: Juba</h4>
            </Step>
            <Step>
                <h1>Ano 2021/2022</h1>
                <h3>1º Semestre</h3>
                <h2>Vice-Maestrina</h2>
                <h4>Maestro: Fogaça</h4>
            </Step>
            <Step>
                <h1>Ano 2021/2022</h1>
                <h3>2º Semestre</h3>
                <h2>Vice-Maestrina</h2>
                <h4>Maestro: Fogaça</h4>
            </Step>
            <Step>
                <h1>Ano 2022/2023</h1>
                <h3>1º Semestre</h3>
                <h2>Vice-Maestrina</h2>
                <h4>Maestro: Fogaça</h4>
            </Step>
            <Step>
                <h1>Ano 2022/2023</h1>
                <h3>2º Semestre</h3>
                <h2>Vice-Magíster</h2>
                <h4>Magíster: Damásio</h4>
            </Step>
            <Step>
                <h1>Ano 2023/2024</h1>
                <h3>1º Semestre</h3>
                <h2>Vice-Magíster</h2>
                <h4>Magíster: Guacamoles</h4>
            </Step>
            <Step>
                <h1>Ano 2023/2024</h1>
                <h3>2º Semestre</h3>
                <h2>Coordenadora da Direcção de Eventos</h2>
                <h4>Vice-Coordenadores: Fanã, Janice, Sabrina, Eletrões</h4>
            </Step>
            <Step>
                <h1>Ano 2024/2025</h1>
                <h3>1º Semestre</h3>
                <h2>Vice-Magíster</h2>
                <h4>Magíster: Gadget</h4>
            </Step>
            <Step>
                <h1>Ano 2024/2025</h1>
                <h3>2º Semestre</h3>
                <h2>Vice-Coordenadora da Direcção de Eventos</h2>
                <h4>Coordenadora: Janice</h4>
            </Step>
        </Stepper>
    )

}