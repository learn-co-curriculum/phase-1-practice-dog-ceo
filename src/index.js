console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
  .then((response) => response.json())
  .then((data) => {
    const dogArray = data.message;
    for (const dog of dogArray) {
      const imgContainer = document.querySelector("#dog-image-container");
      const dogImg = document.createElement("img");
      dogImg.src = dog;
      imgContainer.append(dogImg);
    }
  });

const populateBreedList = (startingLetter = "a") => {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const breedInfo = data.message;
      const dogBreeds = document.querySelector("#dog-breeds");
      for (const breed in breedInfo) {
        if (breed.toUpperCase().startsWith(startingLetter.toUpperCase())) {
          const newItem = document.createElement("li");
          const subBreedUl = document.createElement("ul");
          newItem.textContent = breed;
          breedInfo[breed].forEach((subBreed) => {
            const subBreedLi = document.createElement("li");
            subBreedLi.textContent = subBreed;
            subBreedUl.append(subBreedLi);
          });
          newItem.addEventListener("click", (event) => {
            event.target.style.color = "#FF0000";
          });
          newItem.append(subBreedUl);
          dogBreeds.append(newItem);
        }
      }
    });
};

populateBreedList();

document
  .querySelector("#breed-dropdown")
  .addEventListener("change", (event) => {
    removeChildren(document.querySelector("#dog-breeds"));
    populateBreedList(event.target.value);
  });

const removeChildren = (parentNode) => {
  while (parentNode.lastElementChild) {
    parentNode.removeChild(parentNode.lastElementChild);
  }
};
