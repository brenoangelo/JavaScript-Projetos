// Variaveis
/*O QUE PRECISA SER FEITO?
Tirar o estilo quando o input for focado novamente.
Validar os outros campos.


*/


var inputNome = document.querySelector('[name=nome]')
var inputEmail = document.querySelector('[name=email]')
var inputCpf = document.querySelector('[name=cpf]')

var button = document.querySelector('#button')


button.addEventListener('click', validarCampos)

limparCampos();



/* VALIDA SE OS CAMPOS ESTÃO CORRETOS */
function validarCampos(e){
    
    let nome = inputNome.value
    let email = inputEmail.value
    let cpf = inputCpf.value

    if(nome.length < 3){
        errorEstilo(inputNome)
    }else if(email.match(/^([a-z0-9.-_]{1,})@([a-z.]{1,})$/) == undefined){
        errorEstilo(inputEmail)
    }else if(cpf.match(/^([0-9]{3}).([0-9]{3}).([0-9]{3})-([0-9]{2})$/) == undefined){
        errorEstilo(inputCpf)
    }

    alert('FORMULARIO ENVIADO COM SUCESSO!')
    e.preventDefault()

}



/* ESTILIZAÇÃO */
/* LIMPA O ESTILO DOS CAMPOS QUE ESTAVAM COM ERRO */
function limparCampos(){

    inputNome.addEventListener('focus',limparEstilo)

    inputEmail.addEventListener('focus', limparEstilo)

    inputCpf.addEventListener('focus', limparEstilo)
}

/* ESTILO DE ERRO E LIMPA ESTILO */

function errorEstilo(campo){
    
    if(campo == inputNome){
        campo.value = "Minimo 2 caracteres"
    }else if(campo == inputEmail){
        campo.value = "Formato de e-mail incorreto"
    }else if(campo == inputCpf){
        campo.value = "Escreva ex:000.000.000-00"
    }

    campo.style.color = "red"
    campo.style.border = "3px solid red"
}

function limparEstilo(){
    
    this.value = ""
    this.style.color = ""
    this.style.border = "none"
}
