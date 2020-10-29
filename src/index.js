console.log('%c HI', 'color: firebrick')

const dogList = document.querySelector("#dog-breeds")
const dropdown = document.querySelector("#breed-dropdown")

// Approach 1: Stateful
// store all the breeds in an array
// filter the array
// (also, clear the list)
// use that list to display

// Approach 2: DOM Source Of Truth
// iterate over all the lis
// if they don't start with the letter, hide them with CSS

// State
let breedList = []

// added the event listener to the dropdown
dropdown.addEventListener("change", event => {
  // got the selected value
  const letter = event.target.value

  // filter the array
  const filteredBreeds = breedList.filter(function(breed) {
    return breed.startsWith(letter)
  })
  
  // (also, clear the list)
  dogList.innerHTML = ''

  // use that list to display
  filteredBreeds.forEach(function(breed) {
    renderBreed(breed)
  })

  console.log(filteredBreeds)

  // iterate over all the list items
  // dogList.querySelectorAll("li").forEach(li => {
  //   // check if it starts with the letter
  //   if (!li.textContent.startsWith(letter)) {
  //     // hide it!
  //     li.style.display = "none"
  //   } else {
  //     li.style.display = ""
  //   }
  // })
})

// find the closest parent
dogList.addEventListener("click", event => {
  // use a condition to figure out what element was clicked
  if (event.target.matches("li")) {
    // run our DOM logic
    event.target.style.color = "red"
  }
})

function renderImage(imageUrl) {
  const img = document.createElement("img")
  img.src = imageUrl
  const imageContainer = document.querySelector("#dog-image-container")
  imageContainer.append(img)
}

function renderAllImages(data) {
  // when we have the data
  const images = data.message
    
  // append to the DOM
  images.forEach(imageUrl => {
    renderImage(imageUrl)
  })
}

function loadImages() {
  // when the page loads
  // make a GET request
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(renderAllImages)
}


function renderBreed(breed) {
  const li = document.createElement("li")
  li.textContent = breed
  dogList.append(li)
}

function loadBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
      // Object.keys
      // for..in
      breedList = Object.keys(data.message)

      breedList.forEach(breed => {
        renderBreed(breed)
      })
    })
}

loadBreeds()
loadImages()