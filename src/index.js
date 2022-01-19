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
    colorChange()
    dropdownFunction()
})

function addBreedToDOM(data) {
    let dogBreed = document.querySelector('#dog-breeds')
    // const dataKeys = Object.keys(data.message)
    // console.log(dataKeys)
    const idArray = []
    for (const breed in data.message) {
   
        if (data.message[breed].length === 0) {
            const breedName = document.createElement('li')
            breedName.textContent = breed
            breedName.id = idArray.length
            idArray.push(breedName)
            dogBreed.append(breedName)
        } else {
            data.message[breed].forEach(extraName => {
                const breedName = document.createElement('li')
                breedName.textContent = `${extraName} ${breed}`
                breedName.id = idArray.length
                idArray.push(breedName)
                dogBreed.append(breedName)
            })
        }
    }
}


function colorChange() {
    const dog = document.querySelector(`ul`)
    dog.addEventListener('click', e => {
        e.target.style.color = "coral"
    })
}

function dropdownFunction() {
    const selectDropdown = document.querySelector('#breed-dropdown')
    selectDropdown.addEventListener('change', e => {
        const letter = e.target.value
        const length = document.querySelector('ul').childElementCount
        console.log(length)
        for(i = 0; i < length; i++) {
            const dogsWithLetter = document.querySelectorAll('li')[i].textContent[0]
            if (dogsWithLetter !== letter) {
                document.querySelectorAll('li')[i].style.display = 'none'
            }
        }
        

    })
}
