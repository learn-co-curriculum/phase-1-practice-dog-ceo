console.log('%c HI', 'color: firebrick')

//link variables
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//html variables
let dogImageContainer = document.getElementById('dog-image-container')//add dog images here
let breedDropdownSelector = document.getElementById('breed-dropdown')//add event listener to this
let dogBreedListContainer = document.getElementById('dog-breeds')//add dog breeds here in a list

//creating new variables
let dogImageCard = document.createElement('div')
dogImageCard.id = 'dog-image-card'

let dogBreedList = document.createElement('li')
dogBreedList.id = 'dog-breed-li'

//fetching images from the API
fetch (imgUrl)
.then(response => response.json())
.then(data => console.log(data))

//add images to the dom using forEach method
let renderDogFactory = (dogs) => { 
    dogs.forEach((dog) => { //iterating through to get each dog
        renderDogImage(dog)
    })
}

let renderDogImage = (dog) => { //taking each dog and adding it to its picture and appending to its own div 
    let dogArray = [...dog] //maybe we have to turn it into an array
    console.log(dogArray) //not working still logging object with array inside

    let dogImage = document.createElement('img')
    dogImage.src = 'dogArray.message'
    dogImageCard.append(dogImage)
    dogImageContainer.append(dogImageCard)
}

//LEFT OFF HERE \/\/\/\/
///NEED to figure out how to render images on to page by
//iterating though and grabbing image source from API  
