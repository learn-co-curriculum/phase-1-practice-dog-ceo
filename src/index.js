console.log('%c HI', 'color: firebrick')

//link variables
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//html variables
// let dogImageContainer = document.getElementById('dog-image-container')//add dog images here
let breedDropdownSelector = document.getElementById('breed-dropdown')//add event listener to this
// let dogBreedListContainer = document.getElementById('dog-breeds')//add dog breeds here in a list
let dropdown = document.getElementsByTagName('select')


//creating new variables
// let dogImageCard = document.createElement('div')
// dogImageCard.id = 'dog-image-card'

// let dogBreedList = document.createElement('li')
// dogBreedList.id = 'dog-breed-li'



///////////DELIVERABLE 1\\\\\\\\\\\

//fetching images from the API
fetch (imgUrl) //gets info from url
.then(response => response.json()) //changes response into json
.then(dogs => renderDogFactory(dogs)) //sends json through renderDogFactory

//add images to the dom using forEach method
let renderDogFactory = (dogs) => { 
    dogs.message.forEach((dog) => { //iterating through dogs.message to access the array holding get each dog
        // renderDogImage(dog)
    let dogImageContainer = document.getElementById('dog-image-container')//add dog images here
    
    let dogImageCard = document.createElement('div')
    dogImageCard.id = 'dog-image-card'
    
    let dogImage = document.createElement('img')

    dogImage.src = dog //adding dog image url 
    
    dogImageCard.append(dogImage)
    dogImageContainer.append(dogImageCard)
    })
}

// let renderDogImage = (dog) => { //taking each dog and adding it to its picture and appending to its own div 
    
//     let dogImage = document.createElement('img')
//     dogImage.src = dog //adding dog image url 
//     console.log(dogImage)
    // dogImageCard.appendChild(dogImage)//append dog image to dog card
    // dogImage.appendChild(dogImageContainer)//append dog card to dog container
    
    
// }

///////////DELIVERABLE 2\\\\\\\\\\\

//another fetch function that links to breeds
//iterate through and render breeds to li tags in the provided ul

//fetching breed info from API
fetch(breedUrl)
.then(response => response.json())
.then(breeds => renderBreedFactory(breeds))



//iterave over breed object to grab each breed and put in li
let renderBreedFactory = (breeds) => {
    // console.log(Object.keys(breeds.message)) //all of the dog breed names are KEYS so use object.keys to select all of the keys within the larget object
    (Object.keys(breeds.message)).forEach((breed => {
        // console.log(breed) //check to see that all breeds are returned

    //add each breed to li
    let dogBreedLi = document.createElement('li') //creating li
    dogBreedLi.id = `${breed}-li` //naming each li with unique id according to breed name

    dogBreedLi.textContent = breed //changing tetx content to breed name
    dogBreedLi.style.color = 'black'

    //grab ul from DOM 
    let dogBreedListContainer = document.getElementById('dog-breeds')//add dog breeds here in a list

    //add dog breed li to ul
    dogBreedListContainer.appendChild(dogBreedLi)
    
    ///////////DELIVERABLE 3\\\\\\\\\\\
    //add onclick to specific li element 
    dogBreedLi.onclick = changeColor = () => {
        //changes color to red when clicked 
        if (dogBreedLi.style.color === 'black'){
             dogBreedLi.style.color = 'red'
        //changes color back to black if clicked again
        } else if (dogBreedLi.style.color === 'red'){
            dogBreedLi.style.color = 'black'
        }
        
    };

    }))
    
}

let filterBreedBtFirstLetter = (letter) => {
    console.log('i been clicked')

}

    ///////////DELIVERABLE 4\\\\\\\\\\\
//if a onclick - render A
//else b onclick - render B
//else c onclick - render C
//else d onclick - render D

//select each letter in dropdown
//going to use the onclick attribute


// let option = document.querySelectorAll('option.value')
// console.log(option)
// let optionArray = Array.from(option)
//  console.log(optionArray)

//loop over using charat(0) to check the first letter

document.addEventListener("DOMContentLoaded",function(){console.log("The DOM has loaded");});