var ghpages = require("gh-pages");
var path = require("path");

ghpages.publish(
  path.join(__dirname, '../..', "out"),
  {
    dotfiles: true,
    branch: "main",
    repo: "git@github.com:StandForUkraine/standforukraine.com.git"
  },
  function(err) {
    if (err) {
      console.error(err);
    }
    console.log("Done!");
  }
);
