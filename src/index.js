console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
document.addEventListener("DOMContentLoaded", function () {
    let dogList = document.querySelector("#dog-breeds")
    // fetch(imgUrl)
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log(data.message)
    //         data.message.forEach(image => {
    //             let listItem = document.createElement("li")
    //             let imageElement = document.createElement("img")
    //             listItem.append(imageElement)
    //             imageElement.src = image
    //             dogList.append(listItem)
    //             console.log(listItem)
    //         })
    //     })
        fetch(breedUrl)
            .then(res => res.json())
            .then((data) => {
                console.log(data.message.african)
            } )
})