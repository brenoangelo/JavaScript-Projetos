var btnCap = document.querySelector('#btncap')
var btnMai = document.querySelector('#btnmai')
var btnMin = document.querySelector('#btnmin')

var areaTexto = document.querySelector('#areatexto')


transformarTexto();

function transformarTexto(){

    btnCap.addEventListener('click',()=>{
        areaTexto.className = ''
        areaTexto.classList.add('capitalize')
    })

    btnMai.addEventListener('click',()=>{
        areaTexto.className = ''
        areaTexto.classList.add('uppercase')
    })

    btnMin.addEventListener('click',()=>{
        areaTexto.className = ''
        areaTexto.classList.add('lowercase')
    })
}

