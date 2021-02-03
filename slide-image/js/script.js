// Variaveis

showSlide();

function showSlide(){
    var img = document.querySelectorAll('.container img')
    var bullet = document.querySelectorAll('span')
    var indiceAnterior = 0;

    function bullets(){
        for(i = 0; i < img.length; i++){
            
        }
    }

    img.forEach((valor, indice) =>{

        bullet[indice].addEventListener("click", function(){
        
            bullet[indiceAnterior].classList.remove('active')
            let imageAnterior = document.querySelectorAll('.container img')[indiceAnterior]

            let imageAtual = document.querySelectorAll('.container img')[indice]
            

            indiceAnterior = indice
            imageAnterior.style.opacity = 0
            imageAtual.style.opacity = 1
            
            bullet[indice].classList.add('active')
            
        
            
        })



    })

   

}