var data = {};
// function to display data
var topAiring = document.querySelectorAll(".cardHolders")[0];
var recents = document.querySelectorAll(".cardHolders")[1];
console.log(topAiring);

// function to fetch data from the API
function fetchData() {
  fetch("https://kuro.niteshtudu.com/anime/top-airing")
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((anime) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <img src="${anime.image}" alt="${anime.title}" />
      <h4>${anime.title}</h4>`;
        topAiring.appendChild(card);
      });
    });
  fetch("https://kuro.niteshtudu.com/anime/recent-episodes")
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((anime) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <img src="${anime.image}" alt="${anime.title}" />
      <h4>${anime.title}</h4>`;
        recents.appendChild(card);
      });
    });
}

fetchData();
