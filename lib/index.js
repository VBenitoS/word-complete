// TODO: Autocomplete the input with AJAX calls.
const results = document.querySelector("#results");
const search = document.querySelector("input");
console.log(results);
const searchWord = (word) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${word}`)
    .then(response => response.json())
    .then((data) => {
      const words = data.words;
      words.forEach((w) => {
        console.log(w);
        results.insertAdjacentHTML("beforeend", `<a href="https://en.wikipedia.org/wiki/${w}" target="_blank" ><li>${w}</li></a>`);
      });
    });
};
search.addEventListener("keyup", () => { // <-- to prevent <form>'s native behaviour
  results.innerHTML = "";
  searchWord(search.value);
});
