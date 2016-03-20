console.log("main.js loaded!");
  var baseStaticURL = 'https://global.api.pvp.net'
  var champURL = '/api/lol/static-data/{region}/v1.2/champion';

  var search = document.querySelector('.submitButton');
  search.addEventListener('click', function() {
  // var userInput = document.querySelector('.input').value;
  // console.log(userInput);
  // var dropMenu = document.querySelector('.selection').value;
  // console.log("dropMenu is " + dropMenu);

  // var query = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=info&api_key=68bcafcb-69a2-4cec-ac7e-12b355ad1a1a';
  // var query = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=68bcafcb-69a2-4cec-ac7e-12b355ad1a1ak + userInput';
  // var query = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/?champion=thresh/champData=info&api_key=68bcafcb-69a2-4cec-ac7e-12b355ad1a1a';
  var query = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=68bcafcb-69a2-4cec-ac7e-12b355ad1a1a';
  // if (dropMenu === "Champs") {
    $.ajax({
      url: query,
      dataType: 'json'
    }).done(function(champResponse) {
    console.log(champResponse);
    // console.log(response.data.Nautilus.blurb);
    // console.log(response.data.Nautilus.allytips);
    var champDropDown = document.querySelector('#champDropDown');
    for (var i = 0; i < champResponse.data.length; i++) {
      var id = champResponse.data[i].id;
      console.log(champResponse);
    }

// var templateSource = document.getElementById("HBS-template").innerHTML;
// var template = Handlebars.compile(templateSource);
// console.log(template);
// var computedHtml = template(response.data);
// var nameContainer = document.getElementById("champInfo");
// nameContainer.innerHTML = computedHtml;
//     });
  // };
});//END OF EVENT LISTENER;
