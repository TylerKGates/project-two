var query = undefined;
var bookTitleBox = document.getElementById("bookInput");
bookTitleBox.style.display = "none";
var bookButton = document.getElementById("bookButton");
bookButton.style.display = "none";
var submit = document.getElementById('submitButton');
submit.addEventListener("click", function() {
 if (dropDown.value == "newswire") {query = "http://api.nytimes.com/svc/news/v3/content/all/all/24.json?limit=5&api-key=5a6e9fd6a695a1a8929604ea43c68d57:6:74710294",
   callAjax()
    }
 else if (dropDown.value == "movies") {query = "http://api.nytimes.com/svc/movies/v2/reviews/dvd-picks.json?order=by-date&offset=40&api-key=e5e14ca2409357be67303ec2f99d94ee:4:74710294",
    callAjax()}
 else if (dropDown.value == "books") {bookTitleBox.style.display = "inline-block"; bookButton.style.display = "inline-block";}
})
var book = document.getElementById('bookButton');
book.addEventListener("click", function() {
  title = bookTitleBox.value;
  console.log(title)
  query = "http://api.nytimes.com/svc/books/v3/reviews.json?api-key=564e0f696c942241482e47b38723006f:15:74710294&title=" + title;
  callAjax();
})
function callAjax() {
  $.ajax({
    url: query,
    success: function(data) {
      console.log()
      for (var i = 0; i < data["results"].length; i++) {
        var templateSource = document.getElementById('handlebarTemplate').innerHTML;
        // console.log(templateSource);
        var template = Handlebars.compile(templateSource);
        // console.log(template);
        var container = document.getElementById('container');
        // console.log(container);
        var computedHtml = template(data["results"][i]);
        // console.log(computedHtml);
        var filledTemplate = document.createElement("div");
        filledTemplate.innerHTML = computedHtml;
        container.appendChild(filledTemplate);
      }
    }
  })
}
