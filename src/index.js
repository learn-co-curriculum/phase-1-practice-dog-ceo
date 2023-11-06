function main() {
  console.log("%c HI", "color: firebrick");

  let breeds = [];

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.message.forEach(renderImage);
    });

  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let breed in data.message) {
        breeds.push(breed);
        renderBreeds(breed);
      }
    });

  let select = document.querySelector("#breed-dropdown");

  select.addEventListener("change", function (e) {
    console.log(e.target.value);

    const filteredBreeds = breeds.filter(
      (breed) => breed[0] === e.target.value
    );

    let ul = document.querySelector("#dog-breeds");

    console.log(ul);
    // ul.remove();
    ul.innerHTML = "";

    console.log(ul);
    filteredBreeds.forEach(renderBreeds);
  });
}

function renderImage(image) {
  let imageContainer = document.querySelector("#dog-image-container");
  let img = document.createElement("img");
  img.src = image;
  imageContainer.append(img);
}

function renderBreeds(breed) {
  let ul = document.querySelector("#dog-breeds");

  let li = document.createElement("li");
  li.textContent = breed;

  li.addEventListener("click", function () {
    li.style.color = "lime";
  });

  ul.append(li);
}

document.addEventListener("DOMContentLoaded", main);
