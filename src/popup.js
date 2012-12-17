$("#search").on("input", function() {
  var keyword = $("#search").val();

  var matchedMeigens = MEIGENS.filter(function(meigen) {
    return keyword !== "" && (
      meigen.title.indexOf(keyword) !== -1
      || meigen.body.indexOf(keyword) !== -1);
  });

  var imagesHtml = "";
  matchedMeigens.forEach(function(meigen, index) {
    if (index >= 12) return;
    imagesHtml += '<section>' +
        '<a href="http://jigokuno.com/?eid=' + meigen.eid + '" target="_blank">' +
        '<img src="' + meigen.image + '" alt="' + meigen.title + '"></a><br>' +
        '<input readonly value="' + meigen.image + '">' +
        '</section>';
  });
  $("#images").html(imagesHtml);
});
