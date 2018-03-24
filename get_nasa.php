
<?php 


// Keyword Insights   https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets


require_once('TwitterAPIExchange.php');

$settings = array(
    'oauth_access_token' => "chicken-thighs",
    'oauth_access_token_secret' => "chicken-thighs",
    'consumer_key' => "chicken-thighs",
    'consumer_secret' => "chicken-thighs"
);
$url = 'https://api.twitter.com/1.1/search/tweets.json';

$getfield = '?q=nasa&count=100';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
    ->buildOauth($url, $requestMethod)
    ->performRequest();
 ?>