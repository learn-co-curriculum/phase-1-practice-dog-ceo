// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl).then(res => res.json()).then(data => addDogToDOM(data))

function addDogToDOM(data){
    let dogSpot = document.querySelector('#dog-image-container')
    data.message.forEach(dog => {
        let newDogElement = document.createElement('img')
        newDogElement.setAttribute('src', dog)
        dogSpot.append(newDogElement)
    })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', () => {
    fetch(breedUrl).then(res => res.json()).then(data => addBreedToDOM(data))
})

function addBreedToDOM(data) {
    let dogBreed = document.querySelector('#dog-breeds')
    console.log(data)
    // const dataKeys = Object.keys(data.message)
    // console.log(dataKeys)

    for (const breed in data.message) {
        
        if (data.message[breed].length === 0) {
            const breedName = document.createElement('li')
            breedName.textContent = breed
            dogBreed.append(breedName)
        } else {
            data.message[breed].forEach(extraName => {
                const breedName = document.createElement('li')
                breedName.textContent = `${extraName} ${breed}`
                dogBreed.append(breedName)
            })
        }
    }
}