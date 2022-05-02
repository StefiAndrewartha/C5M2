function sumaArray (arreglo1){
    var arreglo = arreglo1;
    var suma = 0;

    for (var i = 0; i < arreglo.length; i ++) {
        var suma = suma + arreglo [i];
    }

    console.log(suma);
}

sumaArray([1,2,3])

sumaArray([10,3,10,4])

sumaArray([-5,100])