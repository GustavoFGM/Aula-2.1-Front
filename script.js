//Math.PI exemplo
/*
function calcular(raio){
    return `Perimetro: ${Math.PI * raio} 
     Area: ${Math.PI * raio}`
}
console.log(calcular(10));
*/

//-------------------------------------------------

//Arrow function exemples
/*
//função normal
function exemplo(num){
    return num * num 
}
console.log(exemplo(10));

//função arrow
const exemplo1=(num)=>{
    return num * num
}
console.log(exemplo1(20))

//função arrow simplificada
const exemplo2=(num)=>{return num * num}
console.log(exemplo2(30))
*/

//-------------------------------------------------

//JS para html exemplo competição
/*
function inserir(){
    let numero = document.getElementById('posicao').value -1
    let novo = document.getElementById('novo').value
    document.getElementsByClassName('colocado')[numero].innerHTML=novo
}
*/

//-------------------------------------------------

//Js para HTML escolher o dia da semana
/*
function mostrar(){
    let numero = document.getElementById("numero").value -1
    let mes= document.getElementsByTagName("li")[numero].innerHTML;
    document.getElementById("resultado").innerHTML = mes;
}
*/