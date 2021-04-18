//console.log('%c HI', 'color: firebrick')
let dogs;

document.addEventListener('DOMContentLoaded', () => {
    ceo(), 
    breeds(),
    breedList()
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
    const doggo = Object.keys(dog.message);
    dogs = doggo;
    doggo.forEach(element => breedList(element)) ;
    //dog.message.forEach(dog => dog.breedList);
   
}


function breedList(dogBreeds) {
    const ul = document.getElementById('dog-breeds')
    const li = document.createElement('li')
    li.innerText = dogBreeds
    ul.appendChild(li)
    
ul.addEventListener('click', event => {
    if(event.target.matches('li')) {
        event.target.style.color = 'blue'
    }
})

// the source of my pain
const dropdownLetter = document.querySelector("#breed-dropdown");

dropdownLetter.addEventListener("change", event => {
const letter = event.target.value
const dogsList = dogs.filter((dog) => {
    return dog.startsWith(letter)
});
const ul = document.getElementById("dog-breeds");
ul.innerHTML = '';
dogsList.forEach((element) => breedList(element));

})
}




