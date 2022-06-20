import React from "react";
import CV from '../../assets/Gabriel_OliveiraGomide_Currículo2021.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download>Download CV</a>
            <a href="#contact">Entre em contato</a>
        </div>
    )
}

export default CTA;