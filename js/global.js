// @codekit-prepend "modernizr.js"
// @codekit-prepend "jquery-1.8.2.min.js"
// @codekit-prepend "jquery.fitvids.js"
// @codekit-prepend "enquire.js"

if (!Modernizr.svg) {
  $(".logo img").attr("src", "images/logo.png");
}

$("article").fitVids();

enquire
  .register("(min-width: 800px)", { // mama or bigger
    match: function() {
      $("#map").load("/parts/papa-map.html");
    }
  })
  .register("(max-width: 799px)", { // baby
    match: function() {
      $("#map").load("/parts/baby-map.html");
    }
  })
  .listen();