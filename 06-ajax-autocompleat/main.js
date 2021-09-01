/**
 * JP BEHRENS - (jpbehrens.de@gmail.com)
 * Javascript Ajax Autocompleat
 */
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
// Fetch the Data and push them into the array (cities)
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

//

// Checked Words that match from the CityArray
function matchWords(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const minLength = this.value.length;

  if (minLength > 2) {
    const matches = matchWords(this.value, cities);
    const numOfMatches = matches.length;

    if (numOfMatches > 0) {
      const html = matches
        .map((place) => {
          return `
      <li>
      <span class="name">${place.city},${place.state}</span>
      <span class="population">${place.population}</span>
      </li>
      `;
        })
        .join("");

      suggest.innerHTML = html;
    } else {
      suggest.innerHTML = `<li>Keine Übereinstimmung gefunden</li>`;
    }
  } else {
    suggest.innerHTML = `<li>Bitte mindestens 3 Bichstaben eingeben</li>`;
  }
}

const input = document.querySelector(".search");
const suggest = document.querySelector(".suggestions");

input.addEventListener("keyup", displayMatches);

// Testing

function getDogs() {
  const dogs = [];
  const cards = document.querySelectorAll(".card-breed-dog");

  function getName(item) {
    const selector = ".title";
    return item.querySelector(selector).innerText.replace(" Steckbrief", "");
  }

  function getImgUrl(item){
    const selector = '.panel-image';
    return item.querySelector(selector).src;
    
  }

  function getHeight(item) {
    const selector = "dl:nth-child(1) > dd > small";
    const height = item.querySelector(selector).innerText;
    return height.replace("(", "").replace(")", "");
  }

  function getTypeOfBreed(item) {
    const selector = "dl:nth-child(2) > dd";
    return item.querySelector(selector).innerText;
  }

  function getActivity(item) {
    const activity = item.querySelector(
      "dl:nth-child(3) > dd > div > strong"
    ).className;
    let regexp = /\d+/g;
    return Number(activity.match(regexp));
  }

  function getPersonality(item) {
    let charakter = [];
    const selector = ".row > div:nth-child(2) > dl > dd";
    const helper = item.querySelector(selector);

    Array.of(helper).forEach((i) => {
      charakter.push(i.innerText);
    });

    return String(charakter).split(", ");
  }

  cards.forEach((item) => {
    const name = getName(item);
    const img = getImgUrl(item);
    const height = getHeight(item);
    const typeOfBreed = getTypeOfBreed(item);
    const activity = getActivity(item);
    const personality = getPersonality(item);
    dogs.push({
      name,
      img,
      height,
      typeOfBreed,
      activity,
      personality,
    });
  });

  return dogs;
}

const dogs = getDogs();
console.log(dogs);
