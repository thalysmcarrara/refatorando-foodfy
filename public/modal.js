const btnIngredients = document.querySelector('.btn.ingredients')
const listIngredients = document.querySelector('.list.ingredients')
const btnPreparation = document.querySelector('.btn.preparation')
const listPreparation = document.querySelector('.list.preparation')
const btnInfo = document.querySelector('.btn.info')
const listInfo = document.querySelector('.list.info')


btnIngredients.addEventListener("click",function(){
    
    listIngredients.classList.toggle('active')

    for (let i = 0; i < listIngredients.classList.length; i++) {
        if(listIngredients.classList[i] == 'active'){
            btnIngredients.innerHTML = "ESCONDER"
        }
        else{
            btnIngredients.innerHTML = "MOSTRAR"
        }
    }
})

btnPreparation.addEventListener("click",function(){
    
    listPreparation.classList.toggle('active')
    
    for (let i = 0; i < listPreparation.classList.length; i++) {
        if(listPreparation.classList[i] == 'active'){
            btnPreparation.innerHTML = "ESCONDER"
        }
        else{
            btnPreparation.innerHTML = "MOSTRAR"
        }
    }
})


btnInfo.addEventListener("click",function(){
    listInfo.classList.toggle('active')

    for (let i = 0; i < listInfo.classList.length; i++) {
        if(listInfo.classList[i] == 'active'){
            btnInfo.innerHTML = "ESCONDER"
        }
        else{
            btnInfo.innerHTML = "MOSTRAR"
        }
    }
    
})



