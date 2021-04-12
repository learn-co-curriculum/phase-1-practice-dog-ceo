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
            population(dogKeys,data)
        } )

        document.querySelector("#breed-dropdown").onchange = function (letter) {
            dogList.innerText = ""
            let dropDown = document.querySelector("#breed-dropdown").value
            fetch(breedUrl)
                .then(res => res.json())
                .then((data) => {
                    let dogKeys = Object.keys(data.message).filter(function(dog){
                        return dog[0] === dropDown
                    })
                    population(dogKeys,data)
                } )
        }
    
    function population(array, masterObject) {
        array.forEach((breed) => {
            let newItem = document.createElement('li')
            newItem.innerText = breed
            newItem.addEventListener("click",function () {
                newItem.style.color = "blue"
            })
            if (masterObject.message[breed] !== []) {
                let newSubList = document.createElement('ul')
                masterObject.message[breed].forEach((subBreed) => {
                    let newSubItem = document.createElement('li')
                    newSubItem.innerText = subBreed
                    newSubList.append(newSubItem)
                    newItem.append(newSubList)
                    newSubItem.addEventListener("click",function (e) {
                        newSubItem.style.color = "blue"
                        e.stopPropagation()
                    })
                })
            }
            dogList.append(newItem)
        })
    }
})