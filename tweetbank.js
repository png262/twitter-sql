var tweets = []
var _ = require('lodash')
module.exports = {
  add: function(name, text) {
    tweets.push({ id: tweets.length, name: name, text: text })
    return _.last(tweets)
  },

  // eg tweetbank.find({ text: '#fml' })

  find: function(properties) {
    return _.where(tweets, properties)
  },

  list: function() {
    return tweets
  }
}

var randArrayEl = function(arr) {
 return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
 var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
 var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
 return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
 var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
 return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
 module.exports.add( getFakeName(), getFakeTweet() );
}











