const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// function generateJoke() {
//     const config = {
//         header: {
//             Accept: 'application.json'
//         },
//     };

//   fetch("https://icanhazdadjoke.com", config)
//     .then(response => response.json())
//     .then(data => { jokeEl.innerHTML = data.joke } )
// };


async function generateJoke() {
  const url = "https://icanhazdadjoke.com";
  const config = {
    headers: {
      'Accept': "application/json",
    },
  };

  const response = await fetch(url, config);
  const data = await response.json();
  jokeEl.innerHTML = data.joke;
}
