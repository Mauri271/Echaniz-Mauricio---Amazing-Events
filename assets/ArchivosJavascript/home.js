// let where = document.getElementById("cardsDiv")

// function cardsEvents(list,direction) {
//     let allCards = ""
//     for (let recorrido of list) {
//         let template = 
//         `<div class="card bg-dark mt-2 border-primary card-size mb-5">
//     <img src="${recorrido.image}" class="card-img-top" alt="${recorrido.name}">
//     <div class="card-body d-flex flex-column justify-content-between">
//         <h5 class="card-title">${recorrido.name}</h5>
//         <p class="card-text">${recorrido.description}</p>
//         <p>${recorrido.date}</p>
//         <p>Price: ${recorrido.price}</p>
//         <a href="./Details.html" class="btn btn-primary text-primary button">View Details</a>
//     </div>
//     </div>`
//         allCards += template
//     }
//     direction.innerHTML = allCards
    
// }

// cardsEvents(data.events, where)

//task3

const barraBusqueda = document.querySelector("#search")
const checkBox = document.querySelectorAll("input[type=checkbox][name=settings]")
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