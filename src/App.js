import React, { useState } from 'react';
import Header from './components/Header'; //Importamos el componente Header para poder usarlo
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';

const Contenedor = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
	background-color: #FFF;
	padding: 3rem;
`;


function App() {

	const [resumen, guardarResumen] = useState({
		cotizacion: 0,
		datos: {
			marca: '',
			year: '',
			plan: ''
		}
	});

	//Extraer Datos
	const { datos } = resumen;

  	return (
		
		//enviamos un prop titulo con el valor asignado a Header
		<Contenedor>
			<Header titulo='Cotizador de Seguros' /> 
		

			<ContenedorFormulario>
				<Formulario 
					guardarResumen={guardarResumen}
				/>

				<Resumen 
					datos={datos}
				/>
			</ContenedorFormulario>

		</Contenedor>

  	);
}

export default App;
