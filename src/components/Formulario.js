import React, {useState} from 'react';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, calcularMarca } from '../helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;   
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Formulario = () => {

    //creamos el useState para Datos del formulario, pasandole un objeto
    const [datos, guardarDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    //Creamos el useState para el Error
    const [error, guardarError] = useState(false);

    //Extraer los valores del useState
    const {marca, year, plan} = datos;

    //leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e =>{
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el ususario presiona submit (Validacion de formulario)
    const cotizarSeguro =e => {
        e.preventDefault();

        //En caso de que no se haya seleccionado ningun valor
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            guardarError(true); //asignamos al state Error el valor de true
            return;
        }

        guardarError(false);

        //base de seguro de 2000
        let resultado = 2000;

        //Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year);

        //por cada año anterior hay que restar el 3%
        resultado -= ((diferencia*3)*resultado)/100;

        //Aumentamos americano 15% // asiatico 5% //Europeo 30%
        resultado = calcularMarca(marca)* resultado;

        //básico aumenta 20%
        //completo 50%

        //total

    }

    return ( 
        <form
            onSubmit={cotizarSeguro}
        >
            
            {error /*Dependiendo del valor en el state de error se ejecuta */ 
            ?<Error>Todos los campos son obligatorios</Error> :null } 

            <Campo>
                <Label>Marcar</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion} //Mandamos a llamar a la funcion obtener datos cuando hay algun cambio
                >
                    <option value=""> --Seleccione-- </option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion} //Mandamos a llamar a la funcion obtener datos cuando hay algun cambio
                >
                    <option value=""> -- Seleccione -- </option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformacion} //Mandamos a llamar a la funcion obtener datos cuando hay algun cambio
                />Básico

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInformacion} //Mandamos a llamar a la funcion obtener datos cuando hay algun cambio
                />Completo

            </Campo>

            <Boton type="submit"> Cotizar </Boton>

        </form>
     );
}
 
export default Formulario;