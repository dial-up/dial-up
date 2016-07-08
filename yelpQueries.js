var Yelp = require('yelp');

var yelp = new Yelp({
  // Your OAuth consumer key (from Yelp's Manage API Access)
  consumer_key: 'P3wkseAX8NpKie6X1Y6dig',
  consumer_secret: '16gX0fwXFxRVqLjznbPYDjnHD_g',
  // The access token obtained (from Yelp's Manage API Access)
  token: '7ygfLFk9SHW_AOqUW7ZoEG_2COsJ1jN2',
  token_secret: 'KAyIV5nSnWIjekUvCirPXZGHudo'
})

var yelpSearch = yelp.search({term:'dinner', location: 'San Francisco'})
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

// yelp.business('yelp-san-francisco')
//   .then(console.log)
//   .catch(console.error);
//
// yelp.phoneSearch({phone: '+12223334444'})
//   .then(console.log)
//   .catch(console.error);

module.exports = {
  yelpSearch: yelpSearch
}
