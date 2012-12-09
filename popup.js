$("#search").on("input", function() {
  var keyword = $("#search").val();

  var matchedMeigens = MEIGENS.filter(function(meigen) {
    return meigen.title.indexOf(keyword) !== -1
        || meigen.body.indexOf(keyword) !== -1;
  });

  if (matchedMeigens.length > 0) {
    $("#img").attr("src", matchedMeigens[0].image);
    $("#img").fadeIn();
  } else {
    $("#img").fadeOut();
  }
});
