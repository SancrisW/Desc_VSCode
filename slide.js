//criando variável para ser ativa qdo for clicada
var radio = document.querySelector('.manual-btn')//criando a estrutura do código
var cont = 1 //contador começa no 1
document.getElementById('radio1').checked = true//primeiro input está marcado

setInterval(() => { //tempo da chamada
    proximaImg()//chama a função p/ a prôxima
},5000)//determinando intervalo entre as imgs, 5 segundos

//criando a função
function proximaImg(){
    cont++  //contador das rolagens
    
    if(cont > 3){ //não ultrapassa a qtidade de img colocas
        cont = 1    //volta a primeira
    }
    document.getElementById('radio'+cont).checked = true //radio se junte ao valor do cont, ganhe número
}