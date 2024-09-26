function calcularIMC(){
    //Obtener los valores de los input
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //Calcualr el IMC
    let IMC= peso / altura **2;

    //Mostrar el resultado en la web

    let resultado = document.getElementById("resultado");
   
    if(!IMC){
        resultado.textContent = `Datos ingresados invalidos`
    } else if(IMC < 19){
        resultado.textContent = `Tu IMC es ${IMC.toFixed(2)} - Bajo peso`;
    } else if (IMC < 25){
        resultado.textContent = `Tu IMC es ${IMC.toFixed(2)} - Peso normal`; 
    } else if(IMC < 30){
        resultado.textContent = `Tu IMC es ${IMC.toFixed(2)} - Sobrepeso`; 
    } else {
        resultado.textContent = `Tu IMC es ${IMC.toFixed(2)} - Obesidad` ;
    }
    
        


}