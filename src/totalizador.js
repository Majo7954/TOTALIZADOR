function calcularprecio(a, b, c) {
    const cantidad = a;
    const precio = b;
    const estado =c;
    const precio_neto = cantidad*precio;
    var impuesto;
    switch(estado){
      case "CA": 
        impuesto = precio_neto*8.25/100;
        break;
      default:
        impuesto = 0;
    }
    const precio_final = precio_neto+impuesto;
    return precio_final;
  }
  
  export default calcularprecio;
  