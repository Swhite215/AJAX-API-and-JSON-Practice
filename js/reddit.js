
$(document).ready(function() {
   $.get("https://www.reddit.com/r/awww/.json").done(function(responseBody) {

     var array = responseBody.data.children;

    //  array[i].data.author gives us author
    //  console.log(array[i].data.author);

    //  array[i].data.title gives us title
    //  console.log(array[i].data.title);

    //for loop for moving through the array.
     for (var i = 0; i < 10; i++) {
     //array[i].data.preview.images[0].source.url gives us image url
      var imgSource = array[i].data.preview.images[0].source.url;

     //this code puts that title onto the body using append
      var title = $("<h3>").text("Title: " + array[i].data.title);
      $("div.redditApi").append(title);

     //this code puts the authors name onto the body using append
      var author = $("<h4>").text("Author: " + array[i].data.author);
      $("div.redditApi").append(author);

      //linking to reddit page
      // var picLink = $("<a>").attr("href", title.text(array[i].data.title);

     //this code puts the image on the page
      var image = $("<img>").attr("src", imgSource).attr("height", "300px").attr("width", "300px");
      $("div.redditApi").append(image);

    }
   });
});
