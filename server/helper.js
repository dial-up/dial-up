var express = require('express');
var server = require('../server.js')
var fs = require('fs');

var getIdeaList = function(callback) {

  // fs.readFile(__dirname + '/data.json', 'UTF-8', function(err, data) {
  //   if (err) {
  //     console.log('Get Idea Threw Error: ', err);
  //   }
  //   callback(JSON.parse(data));
  // })
  return callback(ideas);
};

var generateRandomIdea = function (object, category, callback) {
  console.log(object, category)
  if (category === 'all') {
    var categories = Object.keys(object);
    var randomCategory = categories[Math.floor(Math.random() * Object.keys(object).length)];
    var randomEvent = Math.floor(Math.random() * object[randomCategory].length);
    callback(object[randomCategory][randomEvent]);
  }
  else {
    var len = object[category].length;
    var random = Math.floor(Math.random() * len);
    callback(object[category][random]);
  }
};

var ideas = {
  "gifts": [
    "Flowers",
    "Make Dinner",
    "Massage"
  ],
  "activities": [
    "Picnic",
    "Museum",
    "Mini Golf",
    "Local Music"
  ],
  "trips": [
    "Camping Trip",
    "Wine Tasting",
    "Scenic Drive"
  ],
  "food": [
    "Brunch",
    "Dinner",
    "Drinks"
  ]
}



module.exports = {
  getIdeaList: getIdeaList,
  generateRandomIdea: generateRandomIdea
}
