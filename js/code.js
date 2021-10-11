function calculo() {
    if (document.getElementById("personas").value == 0 || document.getElementById("personas").value < 0) {
        alert('PON PERSONAS SO FEO');
    } else if (document.getElementById("total").value == 0 || document.getElementById("total").value < 0) {
        alert('PON el total SO FEO');
    } else {
        /*alert("hellow");*/
        let totalCuenta = document.getElementById('total').value;
        let servicio = document.getElementById('servicio').value;
        //traer el valor de nº  personas mediante la clase asociada.
        let personas = document.getElementById('personas').value;

        let resultado = (servicio * totalCuenta) / personas;
        console.log('resultado: ' + resultado);
        document.getElementById("res").innerHTML = "<p>total a pagar</p> <br><h3>" + resultado + " por persona</h3>";
    }
}

function limpiar() {
    document.getElementById('total').value = null;
    //traer el valor de nº  personas mediante la clase asociada.
    document.getElementById('personas').value = null;
    document.getElementById("res").innerHTML = "";
}