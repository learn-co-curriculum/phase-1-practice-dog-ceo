# Fetch Dog CEO Challenge

## Challenge 1: 20 mins

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

## Challenge 2: 10 mins

```js
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
```

After the first challenge is completed, add JavaScript so that:

- on page load, fetch all the dog breeds using the url above ⬆️
- add the breeds to the page in an `<ul>` (take a look at the included `index.html`)

> HINT 1: Make sure to inspect the data being returned by the API! Where are the breed names being stored? How is the data structured?
> HINT 2: You'll need a way to iterate over the KEYS of the object being returned (Google/MDN are your friends here)!

---

## Challenge 3: 15 mins

Once all of the breeds are rendered in the `<ul>`, add JavaScript so that the font color of a particular `<li>` changes _on click_. This can be a color of your choosing.

When the user clicks any of the dog breed list items, the color the text should change.

> HINT: Event Delegation or Individual Event Listeners?

---

## Challenge 4: 20 mins

Once we are able to load _all_ of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.

For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet.

- add an event listener for the change
- filter the list of dogs

> HINT 1: How can you find out when a *change* has happened to the select tag and get its *value*? You don't want the click event, you'll want something else. Google/MDN are your friends here!
> HINT 2: Once you've figured out how to handle the event, how can we show or hide certain breeds? Depending on how you solved Challenge #2 you'll have a few options: solving this problem using DOM Manipulation and hiding elements with CSS, or solving this problem with array manipulation.

---

![dog ceo](https://dog.ceo/img/dog.jpg)
