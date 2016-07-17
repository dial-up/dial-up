// input (search term), Interpreted result, Description, wiki-Link
var request = require('request');

var wikiSummary = function(search, callback) {
  urlSearch = encodeURI(search); //handle escaped characters
  request('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + urlSearch + '&limit=1&format=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var results = {};
      body = JSON.parse(body); //response data was a stringified array of subarrays => parsed
      results.searchTerm = body[1][0]; //subzero to access element from array.
      results.description = body[2][0];
      results.link = body[3][0];
      if (!results.description) { results.description = 'Here are some options near you...' }
      callback(results);
    } else {
      console.log(error);
    }
  });
}

module.exports = {
  wikiSearch: wikiSummary
}
