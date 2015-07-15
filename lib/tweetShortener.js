'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var subbed_tweet = tweet.replace(/for/g,"4").replace(/too/g,"2").replace(/to/g,"2").replace(/be\s/g,"b ").replace(/\sat\s/g," @ ").replace(/you\s/g,"u ").replace(/\sand\s/g," & ").replace(/For/g,"4");
    return subbed_tweet;
  },
// shortens tweets in bulk
  bulkShortener: function(tweets){

    var parent = this;
    var shortened_tweets = new Array();

    tweets.forEach(function(tweet){
      shortened_tweets.push(parent.wordSubstituter(tweet));
    });
    return shortened_tweets;
  },
// shortens tweets longer than 140 characters only
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return this.wordSubstituter(tweet)
    } else {
      return tweet;
    }
  },
// Write another method that truncates the tweet to 140 characters with an ellipsis if it's still 
// too long after substitution. E.g. "Random Passage satisfies the craving for those details that ..."
  shortenedTruncator: function(tweet){
    var shortened_tweet = this.selectiveShortener(tweet);
    if (shortened_tweet.length > 140) {
      return shortened_tweet.slice(0,137) + "...";
    } else {
      return shortened_tweet
    }
  }, // end shortenedTruncator
} // end tweet Shortener

