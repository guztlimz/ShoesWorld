let positions = document.querySelectorAll(".square")
let image = document.querySelectorAll(".imageShoes")

for(let i=0;i<6;i++){

    positions[i].addEventListener("click", function(){
        //verificando se NÃO contém uma classe
        if(!positions[i].classList.contains("active")){
            //percorrendo todos os elementos e fazendo a troca de classes
            for(let i=0;i<6;i++){
                //verificando qual dos elementos está ativo
                if (positions[i].classList.contains("active")){
                    //removendo a classe do elemento ativo
                    positions[i].classList.remove("active")
                    image[i].classList.remove("activeimg")
                }
            }

            //adicionando a classe ao elemento clicado
            positions[i].classList += " active"
            image[i].classList+= " activeimg"
        }
    })
}

let leftbutton = document.getElementById('leftArrow')
let rightbutton = document.getElementById('rightArrow')
let contScreen = 0

let firtsScreen = document.querySelectorAll('.first')
let secondScreen = document.querySelectorAll('.second')

let imagelogo = document.getElementById("logoimg")

let stepOne = true
let stepTwo = false

leftbutton.addEventListener('click',function(){
    if(contScreen>0){
        firtsScreen[0].style.transform = 'translateX(0%)'
        secondScreen[0].style.transform = 'translateX(200%)'
        contScreen -= 1;

        stepOne = false
        stepTwo = true

        imagelogo.src = "img/nike/Logo_NIKE.svg.png"
        imagelogo.style.height = '19px'

        for(let i=0;i<6;i++){
            //verificando qual dos elementos está ativo
            if (positions[i].classList.contains("active")){
                //removendo a classe do elemento ativo
                positions[i].classList.remove("active")
                image[i].classList.remove("activeimg")
            }
        }

        positions[0].classList += " active"
        image[0].classList+= " activeimg"
    }
    console.log(contScreen)

})

rightbutton.addEventListener('click',function(){
    if(contScreen<2){
        secondScreen[0].style.transform = 'translateX(0%)'
        firtsScreen[0].style.transform = 'translateX(-200%)'
        contScreen += 1;

        stepOne = true
        stepTwo = false

        imagelogo.src = "img/puma/logo.png"
        imagelogo.style.height = '29px'
        

        for(let i=0;i<6;i++){
            //verificando qual dos elementos está ativo
            if (positions[i].classList.contains("active")){
                //removendo a classe do elemento ativo
                positions[i].classList.remove("active")
                image[i].classList.remove("activeimg")
            }
        }

        positions[3].classList += " active"
        image[3].classList+= " activeimg"
    }


    console.log(contScreen)
})