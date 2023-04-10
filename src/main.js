import data from "./data.js"
import { alphaOrd, reverOrd } from "./functions.js"
const container = document.getElementById("container")

const allDogs= data.dogs




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

// const filterBreed = document.getElementById("filterBreed")
// filterBreed.addEventListener("change", function (breed){
// container.innerHTML = ""
// })

  


const orderSelect=document.getElementById("order");
orderSelect.addEventListener ("change", (e) => {
  let orderBox= alphaOrd(allDogs);
  
  if(e.target.value === "A-Z"){
    container.innerHTML="";
    alphaOrd(orderBox, allDogs).forEach(oneDog => container.appendChild(containerHTML(oneDog)))
  }

  if(e.target.value === "Z-A"){
    container.innerHTML="";
    reverOrd(orderBox, allDogs).forEach(oneDog => container.appendChild(containerHTML(oneDog)))

  };

});
