document.querySelector("#Hotspot_day").addEventListener("click", updateInfoboxDay);
document.querySelector("#Hotspot_week").addEventListener("click", updateInfoboxWeek);
document.querySelector("#Hotspot_month").addEventListener("click", updateInfoboxMonth);

function updateInfoboxDay() {
  console.log("updateInfoboxDay");
  document.querySelector(".info-text .title").textContent = "Har du misset en dag?";
  document.querySelector(".info-text .placeholder").innerHTML = "<p><strong>Her er hvad du skal gøre hvis du har misset at lave din sprog lektion i en dag.</stong></p>";
  document.querySelector("#efficiency").innerHTML = "<h2>Trusslesniveau</h2><div class='flames'><img class='flame' src='img/flame.png' alt='flame'></div>";
  document.querySelector("#requirement").innerHTML = "<h2>Hvad gør du nu?</h2><ul><li>Info</li><li>Info</li><li>Info</li><li>Info</li><li>Info</li></ul>";
}

function updateInfoboxWeek() {
  console.log("updateInfoboxWeek");
  document.querySelector(".info-text .title").textContent = "Har du misset en uge?";
  document.querySelector(".info-text .placeholder").innerHTML = "<p><strong>Her er hvad du skal gøre hvis du har misset at lave dine sprog lektioner i en uge.</stong></p>";
  document.querySelector("#efficiency").innerHTML = "<h2>Trusslesniveau</h2><div class='flames'><img class='flame' src='img/flame.png' alt='flame'><img class='flame' src='img/flame.png' alt='flame'></div>";
  document.querySelector("#requirement").innerHTML = "<h2>Hvad gør du nu?</h2><ul><li>Info</li><li>Info</li><li>Info</li><li>Info</li><li>Info</li></ul>";
}

function updateInfoboxMonth() {
  console.log("updateInfoboxMonth");
  document.querySelector(".info-text .title").textContent = "Har du misset en måned?";
  document.querySelector(".info-text .placeholder").innerHTML = "<p><strong>Her er hvad du skal gøre hvis du har misset at lave dine sprog lektioner i en måned.</stong></p>";
  document.querySelector("#efficiency").innerHTML =
    "<h2>Trusslesniveau</h2><div class='flames'><img class='flame' src='img/flame.png' alt='flame'><img class='flame' src='img/flame.png' alt='flame'><img class='flame' src='img/flame.png' alt='flame'></div>";
  document.querySelector("#requirement").innerHTML = "<h2>Hvad gør du nu?</h2><ul><li>Info</li><li>Info</li><li>Info</li><li>Info</li><li>Info</li></ul>";
}
