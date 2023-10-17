var gastoTotal = 500;

var caja1 = 100;
var jarabe1 = 100;
var expectorante1 = 150;
var iva1 = 0.1;
var colectivo1 = 0;
var nombre1 = "Marzocca";

var caja2 = 90;
var jarabe2 = 140;
var expectorante2 = 100;
var iva2 = 0.15;
var colectivo2 = 0;
var nombre2 = "Florit";

// Función anónima para calcular el gasto de una farmacia
var GastoFarmacia = function (caja, jarabe, expectorante, iva, colectivo, nombre) {
    var gasto = (caja * 2 + jarabe + expectorante) + (caja * 2 + jarabe + expectorante) * iva + colectivo;
    console.log("En la farmacia " + nombre + " gasta: " + gasto);
    return gasto;
}

// Llamada a las funciones anónimas para calcular los gastos de ambas farmacias
var Farmacia1 = GastoFarmacia(caja1, jarabe1, expectorante1, iva1, colectivo1, nombre1);
var Farmacia2 = GastoFarmacia(caja2, jarabe2, expectorante2, iva2, colectivo2, nombre2);


if (Farmacia1 > Farmacia2)
  console.log("Tenes que ir a "+nombre2)
else 
  console.log("Tenes que ir a "+nombre1)



 

