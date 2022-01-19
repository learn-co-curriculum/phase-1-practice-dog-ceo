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