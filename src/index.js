console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
document.addEventListener("DOMContentLoaded", function () {
    let imageContainer = document.querySelector("#dog-image-container")
    let dogList = document.querySelector("#dog-breeds")
    fetch(imgUrl)
        .then(res => res.json())
        .then((data) => {
            console.log(data.message)
            data.message.forEach(image => {
                let imageElement = document.createElement("img")
                imageElement.src = image
                imageContainer.append(imageElement)
            })
        })
    fetch(breedUrl)
        .then(res => res.json())
        .then((data) => {
            let dogKeys = Object.keys(data.message)
            dogKeys.forEach((breed) => {
                console.log(data.message[breed])
                let newItem = document.createElement('li')
                newItem.innerText = breed
                if (data.message[breed] !== []) {
                    let newSubList = document.createElement('ul')
                    data.message[breed].forEach((subBreed) => {
                        let newSubItem = document.createElement('li')
                        newSubItem.innerText = subBreed
                        newSubList.append(newSubItem)
                        newItem.append(newSubList)
                    })
                }
                dogList.append(newItem)
            })
        } )
})