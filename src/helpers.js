export function calcularTotal(cantidad, plazo){
    //Cantidaddes
    //0 a 1000 = 25%
    let totalCantidad;
    let totalPlazo = 0;

    if(cantidad <= 100){
        totalCantidad = cantidad * .25;
    } else if(cantidad > 1000 && cantidad <=5000){
        totalCantidad = cantidad * .20;
    } else if(cantidad > 5000 && cantidad <=10000){
        totalCantidad = cantidad * 0.15;
    } else{
        totalCantidad = cantidad *.10;
    }
    
    switch(plazo){
        case 3:
            totalPlazo = cantidad * .05;
            break
        case 6:
            totalPlazo = cantidad * .10;
            break
        case 12:
            totalPlazo = cantidad * .15;
            break
        case 24:
            totalPlazo = cantidad * .20;
            break
    }

    return totalPlazo + totalCantidad + cantidad;

}