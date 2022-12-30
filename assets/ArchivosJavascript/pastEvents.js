function pastEvents(events){
    for (let event of events) {
        if (event.date >= data.currentDate){
            console.log(event.name)
            console.log(event.date)
            console.log(event.description)
            console.log(event.category)
            console.log(event.place)
            console.log(event.capacity)
            console.log(event.estimate)
            console.log(event.price)
        }
    }
}

pastEvents(data.events)

let where = document.getElementById("cardsDiv")

function cardsEvents(list,direction) {
    let allCards = ""
    for (let recorrido of list) {
        if(recorrido.date <= data.currentDate){
        let template = 
        `<div class="card bg-dark mt-2 border-primary card-size mb-5">
    <img src="${recorrido.image}" class="card-img-top" alt="${recorrido.name}">
    <div class="card-body d-flex flex-column justify-content-end">
        <h5 class="card-title">${recorrido.name}</h5>
        <p class="card-text">${recorrido.description}</p>
        <p>${recorrido.date}</p>
        <p>Price: ${recorrido.price}</p>
        <a href="./Details.html" class="btn btn-primary text-primary button">View Details</a>
    </div>
    </div>`
        allCards += template
    }
}
    console.log(direction)
    direction.innerHTML = allCards
}

cardsEvents(data.events, where)