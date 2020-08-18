import React, { useState, Fragment } from 'react';
import { calularTotal, calcularTotal } from '../helpers'

const Formulario = (props) => {

  //////FUNCIONES COMPONENTES ////////////////////////// 
  // definir state Error
  const { cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando } = props;


  const [error, guardarError] = useState(false);

  //Lee y Guarda Cantidad
  const leerCantidad = (e) => {
    guardarCantidad(parseInt(e.target.value))
  }
  //lee y Guarda Plazp
  const guardarSelect = (e) => {
    guardarPlazo(parseInt(e.target.value))
  }
  //Calcular Prestamo
  const calcularPrestamo = (e) => {
    e.preventDefault();
    //Validar
    if (cantidad === 0 || plazo === '' || cantidad < 0) {
      guardarError(true);
      return
    }
    //eliminar error previo
    guardarError(false);

    //Habilitar Loader
    guardarCargando(true);

    setTimeout(() => {

      //Realizar Cotizacion
      const total = calcularTotal(cantidad, plazo);

      //unavez calculao guardar
      guardarTotal(total);

      //desabilitar Loader
      guardarCargando(false);

    }, 1000);



  }


  //////FUNCIONES COMPONENTES ////////////////////////// 


  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={leerCantidad}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={guardarSelect}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>

            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {(error) ? <p className="error"> Todos los campos son Obligratorios</p> : null}
    </Fragment>
  );
}

export default Formulario;