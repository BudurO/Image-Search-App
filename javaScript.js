let imgresult = document.getElementById("resultimg");
let inputsearch = document.getElementById("search-img");
let SearchButton = document.querySelector(".search-button");
let MoreButton = document.getElementById("MoreButton");

function searchImage() {
  fetch(
    "https://api.unsplash.com/photos/?client_id=At1IKA26qmqx7cRqK2Kbzs9S2ciMQSeMEhlCkiBrWQQ"
  )
    .then((response) => response.json())
    .then((data) => {
      imgresult.src = data[0].alt_description;

      console.log(data);
      console.log(data[0].alt_description);
    });
}

searchImage();
