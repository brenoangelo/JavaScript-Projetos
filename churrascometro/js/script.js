// Variaveis

var quantAdultos = document.querySelector('#adultos')
var quantCriancas = document.querySelector('#criancas')
var quantDuracao = document.querySelector('#duracao')
var resultado = document.querySelector('#resultado')

function calcular(){
    let adultos = quantAdultos.value 
    let criancas = quantCriancas.value 
    let duracao = quantDuracao.value

    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao)) / 2 *criancas;
    let totalCerveja = cervejaPP(duracao) * adultos
    let totalRefrigerante = refrigerantePP(duracao) * adultos + (refrigerantePP(duracao)) / 2 *criancas
    let totalPaoAlho = paoAlhoPP(duracao) * adultos + (paoAlhoPP(duracao)) / 2 * criancas
    console.log(totalCarne)

    resultado.innerHTML = `<p><i class="fas fa-drumstick-bite"></i> ${totalCarne / 1000} Kg de Carne</p>
                            <p><i class="fas fa-beer"></i> ${Math.ceil(totalCerveja/355)} Latas de cerveja </p>
                            <p><i class="fas fa-wine-bottle"></i> ${Math.ceil(totalRefrigerante/2000)} Garrafas de 2L de refrigerante</p>
                            <p><i class="fas fa-bread-slice"></i> ${Math.ceil(totalPaoAlho)} Pães de alho</p>`
}


function carnePP(duracao){
    if(duracao >= 4){
        return 800
    }else{
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >= 4){
        return 2000
    }else{
        return 1000
    }
}

function refrigerantePP(duracao){
    if(duracao >= 4){
        return 2000
    }else{
        return 1000
    }
}

function paoAlhoPP(duracao){
    if(duracao >= 4){
        return 3
    }else{
        return 2
    }
}