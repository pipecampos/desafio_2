//obtenemos los elementos
//obtenemos los bloques en donde se almacenan los datos
var numGuardado = document.getElementById("numeroguardado");
var operacion = document.getElementById("operacion");
var numActivo = document.getElementById("numeroactivo");
//obtenemos los numeros y los guardamos en un arreglo
var numero = [
    document.getElementById("btn0"),
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn4"),
    document.getElementById("btn5"),
    document.getElementById("btn6"),
    document.getElementById("btn7"),
    document.getElementById("btn8"),
    document.getElementById("btn9")
]

//le damos acción a los botones de numeros recorriendo el arreglo

var x = 0; //varaible que se usara para saber si estamos en el div
//activo o guardado
   
function escribirNumero(indice){
    if(x===0){
        numGuardado.innerHTML = numGuardado.innerHTML+indice;
    }else if(x==1){
        numActivo.innerHTML = numActivo.innerHTML+indice;
    }
}
numero.forEach(function(elemento, indice, array) {
    numero[indice].addEventListener("click",function(){
        escribirNumero(indice);
        });
}   
)
   
   //obtenemos los operadores y los guardamos en un arreglo
var btnoperador = [ //los botones
    document.getElementById("btnsuma"),
    document.getElementById("btnresta"),
    document.getElementById("btndivide"),
    document.getElementById("btnmultiplica"),
]
var operador = ["+",'-','÷','x'] //valores de los botones
//le damos accion a los operadores

    operador.forEach(function(elemento, indice, array) {
        btnoperador[indice].addEventListener("click",function(){ 
            x=1;
            btnpunto.disabled = false; 
            btnmasmenos.disabled = false;     
            operacion.innerHTML = operador[indice]; 
         }
        
        );
     })
//accion de borrar
function funcionborrar(){
    var numero1 = numGuardado.innerHTML;
    var numero2 = numActivo.innerHTML;
    var numero1borrado = numero1.slice(0,-1);
    var numero2borrado = numero2.slice(0,-1);
    if(x==0){
        numGuardado.innerHTML = numero1borrado;
    }else if(x==1){
        numActivo.innerHTML = numero2borrado;
    }
}
var borrar = document.getElementById("btnborrar");
borrar.addEventListener("click",function(){
    funcionborrar();
});

//Funciones de las operaciones
function suma(n1,n2){
    return parseFloat(n1)+parseFloat(n2);
}
function resta(n1,n2){
    return parseFloat(n1)-parseFloat(n2);
}
function multiplica(n1,n2){
    return parseFloat(n1)*parseFloat(n2);
}
function divide(n1,n2){
    return parseFloat(n1)/parseFloat(n2);
}
//funcion boton resultado
var resultado = document.getElementById("btnResultado");
function escribirResultado(){
    var n1 = numGuardado.innerHTML;
    var n2 = numActivo.innerHTML;
    op = operacion.innerHTML;
    if(op == "+"){
        numGuardado.innerHTML = suma(n1,n2);
    }else if(op == "-"){
        numGuardado.innerHTML = resta(n1,n2);
    }else if(op == "x"){
        numGuardado.innerHTML = multiplica(n1,n2);
    }else if(op == "÷"){
        if(n2 == 0){
            alert("No se puede dividir por 0");
            numGuardado.innerHTML = "Error";
        }else{
        numGuardado.innerHTML = divide(n1,n2);
        }
        
    }      
    numActivo.innerHTML = "";
    operacion.innerHTML = "";
}
 resultado.addEventListener("click",function(){
        escribirResultado();
        });
//funcion del boton +/-
var btnmasmenos = document.getElementById("btnmasmenos"); 
function masmenos(){
    if(x===0){
        numGuardado.innerHTML = "-"+numGuardado.innerHTML;
    }else if(x==1){
        numActivo.innerHTML = "-"+numActivo.innerHTML;
    }
}
btnmasmenos.addEventListener("click",function(){
    masmenos();
    btnmasmenos.disabled = true;
},false);
//funcion del boton .
var btnpunto = document.getElementById("btnpunto");
function punto(){
    if(x===0){
        numGuardado.innerHTML = numGuardado.innerHTML+".";  
    }else if(x==1){
        numActivo.innerHTML = numActivo.innerHTML+".";
    }
    
}
btnpunto.addEventListener("click",function(){
         punto();  
         btnpunto.disabled = true;                   
},false);
//funcion boton C
var btnc = document.getElementById("btnc");
function c(){
    
        numGuardado.innerHTML = " ";  
        operacion.innerHTML = " ";
        numActivo.innerHTML = " ";
    
}
btnc.addEventListener("click",function(){
         c();  
         x=0;
},false);