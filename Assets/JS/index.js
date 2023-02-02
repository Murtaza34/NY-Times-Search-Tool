// ---------------- Code below ---------------- //

$(document).ready(function () {
  const searchButton = $("#search-button");
  const clearButton = $("#clear-button");
  const searchTerm = "";

  clearButton.click(function (e) {
    e.preventDefault();
    // articleNumber = 0;
    $("#input-search-terms").val("");
    $("#article-results").empty();
  });

  searchButton.on("click", function (e) {
    e.preventDefault();

    const apiKey = "gmNchShs7oXZC8z77jfOdsv5s4qe55Gf";
    const apiURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
    const searchTerm = $("#input-search-terms").val();

    const queryURL = apiURL + searchTerm + "&api-key=" + apiKey;

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });
});

// for (var i = 0; i < results.length; i++) {
//   console.log(results[i]);

//   const animalDiv = $("<div>");

//   const p = $("<p>");

//   p.text(results[i].rating);

//   const animalImage = $("<img>");

//   animalImage.attr("src", results[i].images.fixed_height.url);

//   animalDiv.append(p);

//   animalDiv.append(animalImage);

//   $("#article-container").prepend(animalDiv);
// }
