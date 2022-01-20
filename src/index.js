console.log('%c HI', 'color: firebrick')

//original attempt *working!*

/*window.addEventListener('DOMContentLoaded', (e) => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
  .then(res => res.json())
  .then(img => img.message.forEach( dog => {
    const div = document.getElementById("dog_image_container")
    const image = document.createElement('img')
    image.setAttribute('src', `${dog}`)
    div.appendChild(image)
  }))
})*/

/*window.addEventListener('DOMContentLoaded', (e) => {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        for (const breed in breeds.message) {
            const ul = document.getElementById('dog_breeds')
            const li = document.createElement('li')
            li.textContent = breed
            li.addEventListener('click', () => {
                li.style.color = "#d77870"
            })
            ul.appendChild(li)
        }
    })
})*/
 
/*window.addEventListener('DOMContentLoaded', (e) => {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    const newArray = [];
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        for (const breed in breeds.message) {
            newArray.push(breed)
        }
        const filterValue = document.getElementById('breed_dropdown')
        const value = filterValue.options[filterValue.selectedIndex].text
        const ul = document.getElementById('dog_breeds') 
        filterValue.addEventListener('change', () => {
            const currentFilterValue = filterValue.value
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild)
              }
            newArray.filter(dog => {
                if(dog.charAt(0) === currentFilterValue) {
                const ul = document.getElementById('dog_breeds')
                const li = document.createElement('li')
                li.textContent = dog
                li.addEventListener('click', () => {
                    li.style.color = "#d77870"
                })
                ul.appendChild(li)
                }
        })
        
        })

    })
})*/

/*function getBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
    .then(res => res.json())
}


window.addEventListener('DOMContentLoaded', (e) => {
    getBreeds()
    .then(breeds => {
        for (const breed in breeds.message) {
            const ul = document.getElementById('dog_breeds')
            const li = document.createElement('li')
            li.textContent = breed
            li.addEventListener('click', () => {
                li.style.color = "#d77870"
            })
            ul.appendChild(li)
        }
    })
})*/ 

//correct way:

/*
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
.then (res => res.json())
.then(data => {
    const imageArray = data.message
    const imageContainer = document.getElementById('dog_image_container')
    imageArray.forEach(img => {
        const image = document.createElement('img')
        image.setAttribute('src', img)
        imageContainer.appendChild(image)
    })
});

fetch(breedUrl)
.then(res => res.json())
.then(breeds => {
   const breedObj = breeds.message
   const arryOfBreeds = Object.keys(breedObj)
   const ul = document.getElementById('dog_breeds')
   addLi(arryOfBreeds)

   const dropdown = document.getElementById('breed_dropdown')
   dropdown.addEventListener('change', (e) => {
    const selectedBreeds = arryOfBreeds.filter(
        breed => breed.substring(0, 1) === e.target.value);
        console.log(selectedBreeds);
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild)
          }
          addLi(selectedBreeds)
    })
});

function addLi(arry) {
    arry.forEach(breed => {
        const newLi = document.createElement('li')
        const ul = document.getElementById('dog_breeds')
        newLi.innerText = breed;
        ul.appendChild(newLi);
        newLi.addEventListener('click', (e) => {
          e.target.style.color = "#d77870"
        })
    })
} */

//solo attempt: 

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
.then(res => res.json())
.then(img => img.message.forEach(image => {
    const newImg = document.createElement('img')
    const dogContainer = document.getElementById('dog_image_container')
    newImg.setAttribute('src', image)
    dogContainer.appendChild(newImg)
}))

fetch(breedUrl) 
.then(res => res.json())
.then(breeds => {
    const breedsArry = Object.keys(breeds.message)
    const ul = document.getElementById('dog_breeds')
    const li = document.createElement('li')
    addLi(breedsArry)
    
    const dropdown = document.getElementById("breed_dropdown")
    dropdown.addEventListener('change', (e) => {
        const ddvalue = e.target.value
        const selectedBreeds = breedsArry.filter(
        breed => breed.charAt(0) === ddvalue)
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild)
          }
          addLi(selectedBreeds)
    })

})

const addLi = (arry) => {
    arry.forEach(breed => {
        const ul = document.getElementById('dog_breeds')
        const li = document.createElement('li')
        li.textContent = breed
        li.addEventListener('click', (e) => {
            e.target.style.color = '#d77870'
        })
        ul.appendChild(li)
    })
}

