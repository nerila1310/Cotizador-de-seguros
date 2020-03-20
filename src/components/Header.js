import React from 'react';
import styled from '@emotion/styled'; //importamos style de la libreria emotion que descargamos e instalamos con el comandp  $ npm i @emotion/styled @emotion/core
import PropTypes from 'prop-types';

//creamos styled Components 
const ContenedorHeader = styled.header` 
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const  TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0px;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => { //recibimos el prop enviado en App para desplegarlo desde aqui
    return ( 
        
        //Utilizamos los styled components creados arriba como etiquetas en codigo HTML
        <ContenedorHeader>
            <TextoHeader> {titulo} </TextoHeader>
        </ContenedorHeader>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
} 

export default Header;