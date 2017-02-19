$(document).ready(function() {
    //make request to GitHub.
    $.ajax({
      url: "https://api.github.com/users",
      data: {
        client_id: "9400ea679b1fa3c89ac2",
        client_secret: "238b1da8f403255692e87cde0a4f0af84818e1b5",
      }
    }).done(function(gitUser) {

      for (var i = 0; i < gitUser.length; i++) {
      //Git Username
      var gitLog = $("<h3>").text(gitUser[i].login);
      $("div#profile").append(gitLog);

      //Git User avatar and save into image
      var gitAvatar = $("<img>").attr("src", gitUser[i].avatar_url).attr("height", "300px").attr("width", "300px");
      $(gitAvatar).addClass("gitImageAdjust");

      //Link to Git Site
      var gitLink = $("<a>").attr("href", gitUser[i].html_url).attr("target", "_blank");
      gitLink.append(gitAvatar);
      $("div#profile").append(gitLink);

      //Number of Git Followers
      var gitFollowers = $("<span>").text("Followers: " + gitUser[i].followers_url.length);
      gitFollowers.addClass("spanStyle");
      $("div#profile").append(gitFollowers);

      //Number of Git Repos
      var gitRepo = $("<span>").text("Repositories: " + gitUser[i].repos_url.length);
      gitRepo.addClass("spanStyle");
      $("div#profile").append(gitRepo);

      //Add a line to space users apart.
      $("div#profile").append("<hr>");
    }

  });
});
