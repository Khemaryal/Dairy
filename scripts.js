const productListLink =
  "https://spreadsheets.google.com/feeds/list/1MwvKQ_TTl93LEKroQ0Rxnk5wMAjeXRDDO2SZVGzpgho/od6/public/values?alt=json ";

function loadJSON(link) {
  fetch(productListLink)
    .then((e) => e.json())
    .then((data) => data.feed.entry.forEach(displayProducts));
}

const template = document.querySelector("template").content;

function displayProducts(dairy) {
  const clone = template.cloneNode("true");
  clone.querySelector("img").setAttribute("src", dairy.gsx$images.$t);
  clone.querySelector("#animalproduct").textContent = dairy.gsx$productions.$t;
  clone.querySelector("#value").textContent = dairy.gsx$price.$t;

  if (dairy.gsx$items.$t === "Milk") {
    document.querySelector("#products").appendChild(clone);
  }
}

loadJSON(productListLink);

function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
