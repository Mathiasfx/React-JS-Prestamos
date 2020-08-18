import React from 'react';

const Resultado = ({ total,plazo,cantidad}) => (

    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>La Cantidad Solicitada es de : $ {cantidad}</p>
        <p>A pagar en {plazo} Meses</p>
        <p>Su Pago Mensual es de: $ {(total/plazo).toFixed(2)}</p>
        <p>Total a Pagar: ${(total).toFixed(2)}</p>
    </div>

);


   

 
export default Resultado;