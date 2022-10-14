import data from "./data.js"
const container = document.getElementById("container")
const allDogs= data.dogs
console.log(allDogs)

const containerHTML = (allDogs) => {    
    const div = document.createElement("div")
    const breedDog = document.createElement("h3") 
    breedDog.textContent = allDogs.breed
    const imageDog = document.createElement("img") 
    imageDog.setAttribute("src", allDogs.image)
    div.append(breedDog, imageDog)
    return div
}


allDogs.forEach(oneDog => container.appendChild(containerHTML(oneDog)))

const filterBybreed = (breed, allDogs)=> {
    return allDogs.filter(eachBreed => eachBreed.breed === breed)
    console.log(filterBybreed); 
};

  
