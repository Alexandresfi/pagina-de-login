import React from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/icon.png"
import { AreaContainer } from "../styled-components/Styled";

export default function Cadastrar(){
    return(
    
        <AreaContainer>

            <h1>Erro
                <br/>
                <span>404</span>
            </h1>
            

            <img src={Icon} alt="icon"/>

            <p>Página não encontrada ou indisponível</p>

            <Link to="/">Ir para a Home</Link>

        </AreaContainer>
        
    )
}