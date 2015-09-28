// pull in the Sequelize library
var Sequelize = require('sequelize');
// create an instance of a database connection
// which abstractly represents our app's mysql database
var twitterjsDB = new Sequelize('twitterjs', 'root', null, {
    dialect: "mysql",
    port:    3306,
});

// open the connection to our database
twitterjsDB
  .authenticate()
  .catch(function(err) {
    console.log('Unable to connect to the database:', err);
  })
  .then(function() {
    console.log('Connection has been established successfully.');
  });

var Tweet = require('./tweet')(twitterjsDB);
var User = require('./user')(twitterjsDB);

// adds a UserId foreign key to the `Tweet` table
User.hasMany(Tweet);
Tweet.belongsTo(User);

module.exports = {
    User: User,
    Tweet: Tweet
};


// User.findOne().then(function (user) {
//     return user.getTweets();
// })
// .then(function (tweets) {
//     console.log(JSON.stringify(tweets)); // another way of just logging the plain old values

// });

// FIND ALL TWEETS BY USER
// User.findOne({where: {id: '3'}})
// .then(function(user) {
// 	return user.getTweets();
// })
// .then(function(tweets) {
// 	console.log(JSON.stringify(tweets));
// })

// FIND BY TWEET ID
// User.findOne({ where: {name: 'Tessa'}, include: [{model: Tweet, where: { id: 8}}]     })
// .then(function(something) {
// 	console.log(JSON.stringify(something.Tweets));
// });


// FIND ALL TWEETS WITH USER ID
// Tweet.findAll({include: [User]})
// .then(function(everything) {
// 	console.log(JSON.stringify(everything));
// })

Tweet.create({userid: '3', tweet: 'this is a new tweet'})
.then(function(msg) {
	console.log(msg);
});

