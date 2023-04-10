export const filterByBreed = (typeBreed, data)=> {
      return data.filter(dogs => dogs.breed === typeBreed)
    }

export const alphaOrd = (allDogs) => {
  return allDogs.sort((a, b) => a.breed.localeCompare(b.breed)
  );
 }

 export const reverOrd = (allDogs) => {
  return allDogs.reverse((a, b) => a.breed.localeCompare(b.breed)
  );
 }
 
  