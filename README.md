# Fetch Dog CEO Challenge

## Challenge 1

This repository includes an `index.html` file that loads an `index.js` file.

```js
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
```

Add JavaScript so that:

- on page load
- fetch the images using the url above ⬆️
- parse the response as `JSON`
- add image elements to the DOM **for each**🤔 image in the array

---

## Challenge 2

```js
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
```

After the first challenge is completed, add JavaScript so that:

- on page load, fetch all the dog breeds using the url above ⬆️
- add the breeds to the page in an `<ul>` (take a look at the included `index.html`)

---

## Challenge 3

Once all of the breeds are rendered in the `<ul>`, add JavaScript so that the
font color of a particular `<li>` changes _on click_. This can be a color of
your choosing.

When the user clicks any of the dog breed list items, the color the text should
change.

---

## Challenge 4

Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
so that the user can filter breeds that start with a particular letter using a
dropdown.

For example, if the user selects 'a' in the dropdown, only show the breeds with
names that start with the letter a. For simplicity, the dropdown only includes
the letters a-d. However, we can imagine expanding this to include the entire
alphabet

---

![dog ceo](https://dog.ceo/img/dog.jpg)
