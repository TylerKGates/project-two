console.log("hello world");

  $.ajax({
    url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/pingas%20r00lz?api_key=' + API_KEY,
    dataType: "json"
  }).done(function(playerResponse) {
    console.log(playerResponse);
  })
