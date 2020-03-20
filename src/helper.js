//Obtiene la diferencia de años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

//Calcula el total a pagar segun la marcar
export function calcularMarca(marca){
    let incremeto;
    switch(marca){
        
        
        case 'europeo':
            incremeto = 1.30;
            break;
        case 'americano':
            incremeto = 1.15;
            break;
        case 'asiatico':
            incremeto = 1.05;
            break;
        default:
            break;
    }
    return incremeto;
}

//Calcular el tipo de seguro
export function obtenerPlan(plan){
    return (plan === 'basico') ? 1.20 : 1.50;
}

//Muestra la primera letra en mayuscula
export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase()+texto.slice(1);
}