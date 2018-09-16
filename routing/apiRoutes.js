

var tableData = require("../app/data/friends");

module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  app.post("/api/friends", function(req, res) {

    var totDiff = 0;
    var differences = [];
    var userData = req.body;

    for (var i = 0; i < tableData.length - 1; i++) {
      for (var j = 0; j < 10; j++) {
        totDiff += Math.abs(
          tableData[i].scores[j] - userData.scores[j]
        );
      }
      differences.push(totDiff);
      totDiff = 0;
    }

    var bestMatch =
      tableData[
        differences.indexOf(Math.min.apply(null, differences))
      ];
    res.send(bestMatch);
  });
};


