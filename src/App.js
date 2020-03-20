import React from 'react';
import Header from './components/Header'; //Importamos el componente Header para poder usarlo

function App() {
  	return (
		<Header titulo='Cotizador de Seguros' /> //enviamos un prop titulo con el valor asignado a Header
  	);
}

export default App;
