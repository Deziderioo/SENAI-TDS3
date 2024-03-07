async function fetchCharacters(){
    const page = document.getElementById("pageInput").value || 1;
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`

    try {
        const response = await fetch(apiUrl)
        const data = await response.json();
        displayCharacters(data.results)
    } catch (error) {
        console.error("Error ao buscar personagens - ", error)
    }

}


function displayCharacters(characters){
    const container = document.getElementById("container");
    container.innerHTML = "";

    characters.forEach(character => {
        const card = document.createElement("div");
        card.className = "card"

        const name = document.createElement("h3");
        name.textContent = character.name;
        name.style.color = "white"

        const species = document.createElement("p");
        species.textContent = `Especie: ${character.species}`;
        species.style.color = "white"

        const image = document.createElement("img")
        image.src = character.image;
        image.alt = character.name;
        image.style.width = "200px"

        const status = document.createElement("p")
        status.textContent = character.status;
        status.style.color = "white"

        const circle = document.createElement("div")
        circle.style.borderRadius = "100%"
        circle.style.width = "15px"
        circle.style.height = "15px"
        

        if(character.status === "Dead"){
            circle.style.background = "red"
        }
        else if(character.status === "Alive"){
            circle.style.background = "green"
        }
        else{
            circle.style.background = "gray"
        }

        card.appendChild(name)
        card.appendChild(species)
        card.appendChild(image)
        card.appendChild(circle)
        card.appendChild(status)

        container.appendChild(card)

    });
    
}


function searchByName(){
    const searchTerm = document.getElementById("nameInput").value.toLowerCase();
    const characters = document.querySelectorAll(".card")

    characters.forEach((character) =>{
        const characterName = character.querySelector("h3").textContent.toLowerCase();
        if(!characterName.includes(searchTerm)){
            character.style.display = "none"
          
        }
        
    })
}