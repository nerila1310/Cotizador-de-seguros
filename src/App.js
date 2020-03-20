import React from 'react';
import Header from './components/Header'; //Importamos el componente Header para poder usarlo
import styled from '@emotion/styled';
import Formulario from './components/Formulario';

const Contenedor = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
	background-color: #FFF;
	padding: 3rem;
`;


function App() {
  	return (
		
		//enviamos un prop titulo con el valor asignado a Header
		<Contenedor>
			<Header titulo='Cotizador de Seguros' /> 
		

			<ContenedorFormulario>
				<Formulario />
			</ContenedorFormulario>

		</Contenedor>

  	);
}

export default App;
