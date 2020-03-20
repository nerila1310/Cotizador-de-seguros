import React from 'react';

const Header = ({titulo}) => { //recibimos el prop enviado en App para desplegarlo desde aqui
    return ( 
        <h1> {titulo} </h1> //Etiqueta de Encabezado h1
     );
}
 
export default Header;