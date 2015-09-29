var express = require('express')

var router = express.Router()

var tweetbank = require('../tweetbank')

var tweetDatabase = require('../models/');

module.exports = router

console.log("what up")

// home
router.get('/', function(req, res, next) {
	tweetDatabase.getAllTweets().then(function(data){
		var tweetList = data.map(function(tweet){
			return {text: tweet.tweet, name: tweet.User.name, id: tweet.id};
		})
		res.render('index', {tweets:tweetList, showForm:true});
	})
  // res.render('index', {tweets: tweetDatabase.getAllTweets()});
  // res.render('index', { tweets: tweetbank.list(), showForm:true })
})

// make a tweet
router.post('/', function(req, res, next) {
  // res.status(201).json(tweetbank.add(req.body.name, req.body.tweet))
  // console.log(req.body.name, req.body.tweet);
  tweetDatabase.createTweet(req.body.name, req.body.tweet)
  .then(function(tweet){
  	res.redirect('/')
  })
})

// getting all tweets from user
router.get('/users/:name', function(req, res, next) {
  var username = req.params.name
  tweetDatabase.getUserTweets(username).then(function(data){
  	var tweetList = data.map(function(tweet){
  	return 	{
  		id: tweet.id,
  		name: username,
  		text: tweet.tweet}
  	})
  	res.render('index', { tweets: tweetList, showForm:true })
  })

  // var tweets = tweetbank.find(req.params)
  // res.json(tweets)
})

// get a single tweet
router.get('/users/:name/tweets/:id', function(req, res, next) {
  req.params.id = Number(req.params.id)
  id = req.params.id;
  var username = req.params.name;
  tweetDatabase.getTweetById(username, id).then(function(data){
  	var tweetList = [{
  	  		id: id,
  	  		name: username,
  	  		text: data.tweet
  	  	}]
  	console.log(data);
  	console.log(tweetList);

  	res.render('index',{ tweets: tweetList});
  	
  })
  // var tweets = tweetbank.find(req.params)


})









