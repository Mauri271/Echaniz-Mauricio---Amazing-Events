const barraBusqueda = document.querySelector("#search")
const checkBox = document.getElementsByClassName("check")
const cardsDiv =document.getElementById("cardsDiv")


barraBusqueda.addEventListener(`input`, evento => {
    let filteredCards = dataEvents.filter(filtrarCards)
    let template = generarDivs(filteredCards)
    cardsDiv.innerHTML = template
})


const dataEvents = data.events.filter( event => (event.name, event.category))

function generarDivs(dataEvents){
    let templateCards = ``
    dataEvents.forEach(event => {
        if(event.date > data.currentDate)
        templateCards += `<div class="card bg-dark mt-2 border-primary card-size mb-5">
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p>${event.category}</p>
        <p>${event.date}</p>
        <p>Price:${event.price}</p>
        <a href="./Details.html" class="btn btn-primary text-primary button">View Details</a>
        </div>
        </div>`
    });
    return templateCards
}

cardsDiv.innerHTML = generarDivs(dataEvents)

function filtrarCards(card){
    return card.name.toLowerCase().includes(barraBusqueda.value.toLowerCase()) || card.category.toLowerCase().includes(barraBusqueda.value.toLowerCase())

}
