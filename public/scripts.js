const cards = document.querySelectorAll('.card');
console.log(cards)

for (let card of cards) {
    card.addEventListener("click",function(){
        const index = card.childNodes[7].getAttribute('id')
        console.log(index)
        window.location.href = `/${index}`
    })
}

