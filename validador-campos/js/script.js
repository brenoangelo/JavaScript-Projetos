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
function validarCampos(){
    
    let nome = inputNome.value
    let email = inputEmail.value
    let cpf = inputCpf.value

    
    if(nome != "" && nome != undefined){ 

        
        validarNome(nome)
        
        
    }
    

}



function validarNome(nome){

    if(nome.length < 3){
        errorEstilo(inputNome)
        
    }
    
    return true
}





/* ESTILIZAÇÃO */
/* LIMPA O ESTILO DOS CAMPOS QUE ESTAVAM COM ERRO */
function limparCampos(){

    inputNome.addEventListener('focus', ()=>{
        inputNome.value = ""
        inputNome.style.color = ""
        inputNome.style.border = "none"
        
    })

    inputEmail.addEventListener('focus', ()=>{
        inputEmail.value = ""
        inputEmail.style.color = ""
        inputEmail.style.border = "none"
        
    })

    inputCpf.addEventListener('focus', ()=>{
        inputCpf.value = ""
        inputCpf.style.color = ""
        inputCpf.style.border = "none"
        
    })
}

/* ESTILO DE ERRO E LIMPA ESTILO */

function errorEstilo(campo){
    campo.value = "Nome invalido"
    campo.style.color = "red"
    campo.style.border = "3px solid red"
}

function limparEstilo(campo){
    
    campo.value = ""
    campo.style.color = ""
    campo.style.border = "none"
}
