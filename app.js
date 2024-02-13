
 /* let numeroSecreto = 0;
 let intentos = 0;
 let listaNumeroSorteados= [];
 let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML =texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroSecreto);
    console.log(intentos);
     
    if(numeroDeUsuario === numeroSecreto){
       
            asignarTextoElemento('p' , ` acertaste el numero en ${intentos} ${(intentos === 1) ?  'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');

        } else{
        // el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p' , ' el numero secreto es menor');

        }else {
            asignarTextoElemento('p' , 'el numero secreto es mayor');

        }
        intentos++;
        limpiarCaja();

    }
    return;
} function limpiarCaja(){
   //let valorCaja = document.querySelector('#valorUsuario');
   //valorCaja.value = '';
   document.querySelector('#valorUsuario').value ='';


}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
   //si el numero generaado esta incluido en la lista
   console.log(numeroGenerado);
   console.log(listaNumeroSorteados);
    //si ya sorteamos todos los numero
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p',` ya se sortearon todos los numeros posibles`);

    }   else{

                if(listaNumeroSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();

                } else{
                        listaNumeroSorteados.push(numeroGenerado);
                        return numeroGenerado;
                        }
            }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);  
    numeroSecreto = generarNumeroSecreto(); 
    intentos=1;
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
*/
let listaGenerica =[];
let lenguajesDeProgramacion = ['javaSprit', 'C', 'C++', 'Kotlin', 'Python'];
    lenguajesDeProgramacion.push('java', 'Ruby', 'GoLang');
function muestraLenguajes(){
    console.log(lenguajesDeProgramacion);
    console.log(lenguajesDeProgramacion[lenguajesDeProgramacion.length-1]);

}muestraLenguajes();
function ordenInverso(){
    let ordenInverso = lenguajesDeProgramacion.reverse();
    console.log(ordenInverso);
}
    ordenInverso();
function ordenAlRevez(){
    for ( let i = lenguajesDeProgramacion.length - 1 ; i>= 0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
} ordenAlRevez();

    function mostrarLenguajesSeparadamente() {
        for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
          console.log(lenguajesDeProgramacion[i]);
        }
      }
      
      mostrarLenguajesSeparadamente();

let listaDeNumeros = ['1', '2', '3', '4'];

function calculoDePromedio (){
    let contador =0;
    let calculoDePromedio = 0;
    let iterator = listaDeNumeros.values();
    if (contador < (listaDeNumeros.length-1)){
         calculoDePromedio = calculoDePromedio + iterator;
         contador++;
         console.log(iterator);
         
    }else{
        calculoDePromedio = calculoDePromedio/listaDeNumeros.lengt-1;
        console.log(calculoDePromedio);
    }

    
} calculoDePromedio();
let total = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b;
});
    console.log(total);

    
        function calcularMedia(lista){
            let suma = 0;
            for (let i = 0; i<lista.length; i++){
                suma += lista[i];
            }
            return suma/lista.length;
            
        }let numero =[10, 20, 30, 40];
        let media = calcularMedia(numero);
        console.log(`media:`, media);


    function encontrarMayorYMenor(lista){
        let mayor=[0];
        let menor=[0];
        for(let i = 1; i<lista.length; i++){
            if (lista[i] > mayor){
                mayor = lista[i];
            }
            if (lista[i] < menor){
                menor = lista[i];
            }

        }
        console.log(`mayor:`, mayor);
        console.log(`menor:`, menor);

    }let numeros = [10, 20, 2, 5, 6, 3, 9];
    encontrarMayorYMenor(numeros);


    function sumaEnLista(lista){
        let suma = 0;
        for(let i = 0; i < lista.length; i++){
            suma += lista[i];
            //esta es para q vaya sumando una por una y mostrando
            //console.log(suma);
        }   return suma;
    } let valores =[2, 4, 6, 8, 1];
    let suma = sumaEnLista(valores);
    console.log(`suma:`, suma);

    function encontrarIndiceElemento(lista, elemento){
        for (let i= 0; i< lista.length; i++){
            if (lista[i] === elemento){
                return i;   //retorna el indice del elemento encontrado
            }
        }
        return -1; //retorna -1 si el elemento no se encuentra en la lista.
    }
    let numerosEnLista =[1, 2, 3, 4, 0, 6];
    let elemento = 5;
    let indice = encontrarIndiceElemento(numerosEnLista, elemento);
    console.log(indice);    

    function dosListas(lista1, lista2){
        let suma = 0;
        let valorR1 = 0;
        let valorR2 = 0;
        let i1 =0;
        let i2 =0;
        if(lista1.length == lista2.length){
        while( (i1 < lista1.length)&&(i2<lista2.length)){
            suma= lista1[i1]+lista2[i2];
            console.log(`la suma es`,suma);
            i1++;
            i2++;
        }    
        }else
        console.log(`ingrese la misma cantidad de datos`);
    
      
        //return suma= lista1[i1]+lista2[i2];

    }
                         /*   function generarListaDeNumeros(lista) {
                                //let contador= 0;
                                let numeroMaximo =100; //prompt(`eliga el rango entre los numeros a utilizar`);
                                let numeroDatos = 5; //prompt(`ingrese total de numeros en listas`);
                                for(let i=0;i<lista.length;i++){
                                let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
                                lista[i]= numeroGenerado;
                                console.log(lista[i]);
                                
                                }return lista[i];

                            }*/

//let prueba =[0,0 ,0 ,0 ,0];
    let listaUno = [1, 2, 3, 4];
    let listaDos = [1,  2, 3, 4];
    dosListas(listaUno, listaDos);
    //1, 2, 3, 4
    

    
    
        
    






/*
crear un array o lista
    let frutas = ["Manzana", "Uva", "Naranja"];
acceder a valores dentro de un array
    console.log(frutas[0]); // Salida: "Manzana"
    console.log(frutas[2]); // Salida: "Naranja"
a;adir nuevos elementos
    frutas.push("Fresa");
    console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]
eliminar el ultimo elemento
    frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]







function masaCorporal(alturaCm, pesoKg){
    masaCorporal =(pesoKg/(alturaCm/100));
    return;

} masaCorporal(180, 80);
console.log(masaCorporal);

                    function factorial(valor){          //OTRA SOLUCION
                        factorial= 1;                  //let reserva=1
                        while(valor > 1){               //while(valor > 1){
                        factorial= factorial*valor;  // reserva = reserva* valor;
                            valor--;                    //valor--;
                                                        // factorial=reserva;
                        }                               //}
                    } factorial(5);
                    console.log(factorial);

function conversion(dolares){
    let reales = 4.8;
    conversion= reales*dolares;


}conversion(1.5);
console.log(conversion);

                            function areaPerimetro(altura, anchura){
                                let area = altura * anchura;
                                let perimetro = (altura*2) + (anchura*2);
                                alert(`el area es ${area} y el perimetro es ${perimetro}`);  

                            } areaPerimetro(2, 4);

function areaPerimetroCircular(radio){
    let pi= 3.14;
    let areaCirculo = pi*(radio*radio);
    let perimetroCirculo = (2*pi) * radio;
    alert(`el area es ${areaCirculo} y el perimetro es ${perimetroCirculo}`);

}areaPerimetroCircular(5);

                                function tablaDeMultiplicar(valorIngresado){
                                    let tope = 1;
                                    while (tope<=2){
                                        alert(`${tope} * ${valorIngresado} = ${tope* valorIngresado}`);
                                        tope++;
                                    }
                                }tablaDeMultiplicar(5);


                                function calcularFactorial(numero) {
                                    if (numero === 0 || numero === 1) {
                                      return 1;
                                    } else {
                                      return numero * calcularFactorial(numero - 1);
                                    }
                                  }
                                  // Ejemplo de uso
                                  let numero = 5;
                                  let resultado = calcularFactorial(numero);
                                  console.log(`El factorial de ${numero} es ${resultado}`);
                                */  






           /* //tarea2 curso 2
            let nota1 = 7;
            let nota2 = 6;
            let nota3 = 3;
            let nota4 = 5;

            function calcularPromedio(nota1, nota2, nota3, nota4){
                let promedio = (nota1 + nota2 + nota3 +nota4)/4;
                return promedio;
            }
            function verificarAprovacion(promedio){
                return promedio>=5 ?"aprobado" : "reprobado";

            } */




/*   //TAREA 1 CURSO2
function saludo(){
    console.log('!hola mundo');
return;

}
saludo();

            function ingreseNombre(nombre){
                console.log(`!hola, ${nombre}`);

            }
            ingreseNombre('jonna');

                        function recibeNumero(valor1, valor2){
                            if (valor1> valor2){
                                
                                console.log(`este es el numero mayor ${valor1}`);

                            }else {
                                console.log(`el numero mayor es ${valor2}`);
                            }
                        }
                            recibeNumero(0,5);
function numeroDoble(numeroIngresado){
    let numeroX2 = numeroIngresado * 2
    console.log(`el resultado es ${numeroX2}`);

}numeroDoble(8);

                        function promedioDeTres(valor1, valor2, valor3){
                            let resultado =(valor1 + valor2 + valor3)/3;
                            console.log(`el promedio es ${resultado}`);

                        } promedioDeTres(5,4,3);
function encontrarMayor(a,b){
    return a > b ? a : b;
}let numeroMayor = encontrarMayor(5,8);
console.log(numeroMayor);
*/

