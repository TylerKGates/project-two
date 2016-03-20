window.onload = function() {
console.log("window loaded!");
var baseURL = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/";
var champQuery = baseURL + "champion?api_key=" + API_KEY;
var champVal;


  $.ajax({
  url: champQuery,
  dataType: "json"
}).done(function(champResponse) {
  console.log(champResponse);
  var champDropDown = document.getElementById('champDropDown');
  var submitButton = document.querySelector('.submitButton');
  for (var champ in champResponse.data) {
    var optionEl = document.createElement('option');
    optionEl.innerHTML = champResponse.data[champ].name;
    optionEl.value = champResponse.data[champ].id;
    champDropDown.appendChild(optionEl);
};//END OF FOR IN LOOP
}).fail(function(champResponse) {
  console.log(champResponse);
}).always(function(champResponse) {
});//END OF ALWAYS
var submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', function() {
  var champDropDown = document.getElementById('champDropDown');
  champVal = champDropDown.value;
  console.log("WE wanna see this:" + champVal);
  $.ajax({
  url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + champVal + '?api_key=' + API_KEY +'&champData=all',
  dataType: 'json'
}).done(function(response) {
  console.log(response);
  console.log(response.image.full);
  console.log(response.tags);
  console.log(response.spells[0].name);
  console.log(response.spells[0].description);
  console.log(response.spells[1].name);
  console.log(response.spells[2].name);
  console.log(response.spells[3].name);
  console.log(response.image.full);

  var champion = {};
  champion.name = response.name + ", " + response.title;
  champion.type = response.tags[0] + ",  " + response.tags[1];
  champion.image = response.image.full;
  champion.lore = response.lore;
  champion.spell1 = "Q: " + response.spells[0].name + ": " + response.spells[0].description;
  champion.spell2 = "W: " + response.spells[1].name + ": " + response.spells[1].description;
  champion.spell3 = "E: " + response.spells[2].name + ": " + response.spells[2].description;
  champion.spell4 = "R: " + response.spells[3].name + ": " + response.spells[3].description;


  var templateSource = document.getElementById("HBS-template").innerHTML;
  var template = Handlebars.compile(templateSource);
  console.log(template);
  var computedHtml = template(champion);
  var nameContainer = document.getElementById("champInfo");
  nameContainer.innerHTML = computedHtml;

  var showMore = document.querySelector('.something');
  console.log(showMore);
  showMore.addEventListener('click', function() {
    var hiddenText = document.querySelector('.blurb');
    hiddenText.style.display = 'block';
  });//END OF SHOWMORE EVENT LISTENER
});//END OF SEARCH .DONE
});//END OF SEARCH EVENT LISTENER
}//END OF ONLOAD



                            //HERE LIES THE FALLEN CODE\\
// var champsArr = [];
// var champIdArr = [];
// for (var id in champResponse) {
//   console.log("champResponse." + id + " = " + champResponse[id]);
//   champsArr.push(champResponse.data);
// };
// console.log(champsArr.length);
// console.log(champsArr[0].Illaoi.id);
// champsArr.pop();
// champsArr.pop();
//   for (var id in champsArr[0]) {
//     for (var id in champsArr[0]) {
//       console.log(id);
//       // console.log(champsArr[0].id);
//       // if (id == champsArr[0].name) {
//       //   console.log(champsArr[0]);
//       // }
//     }
//   }
//   // for (var name in champsArr[0]) {
//   //   console.log("champsArr." + id + " = " + champsArr[id]);
//   //   champIdArr.push(champsArr.id);
//   // }
//   console.log(champIdArr);
//   for (var i = 0; i < champsArr.length; i++) {
//   console.log(champsArr[i]);
//   console.log(champsArr);
// };
// for (var i = 0; i < champResponse.data.length; i++) {
// // var optionEl = document.createElement('option');
// // optionEl.innerHTML = id;
// // optionEl.value = id;
// // champDropDown.appendChild(optionEl);
// // console.log(champResponse);
