//console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    ceo()
})

function ceo() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json))
   
}

function renderImages(images) {
    images.message.forEach(renderImage);
}

function renderImage(urlImg){
    const loc = document.getElementById('dog-image-container')
    //console.log(urlImg)
    const img = document.createElement('img')
    //console.dir(img)
    img.className = "dog-image"
    img.height = 300
    img.src = urlImg
    loc.appendChild(img)
    
}

function breeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => breed(json))
   

}

function breed(dog) {
     dog.message.forEach(breedList());
   
}


function breedList(dogBreeds) {
    const ul = document.getElementById('dog-breeds')
    const li = document.createElement('li')
    li.innerText = dogBreeds
    ul.appendChild(li)
}

 console.log(breed())