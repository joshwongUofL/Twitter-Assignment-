window.onload = init();
function init(){
	
// NASA AJAX REQUEST
var xhr_nasa = new XMLHttpRequest();
xhr_nasa.open('GET', 'get_nasa.php', true)
xhr_nasa.send(null);

xhr_nasa.onload = function(){
	if(xhr_nasa.status ==200){
		var tweets = JSON.parse(xhr_nasa.responseText);
		console.log(tweets);
			
		// DO STUFF WITH NASA TWEETS
		var count = 0;
		tweets.statuses.forEach(function(item){  
			count += item.retweet_count;
		})
		document.getElementById("nasacount").innerHTML = count
	}
}

// SpaceX AJAX REQUEST
var xhr_space = new XMLHttpRequest();
xhr_space.open('GET', 'get_space.php', true)
xhr_space.send(null);

xhr_space.onload = function(){
	if(xhr_space.status ==200){
		var tweets = JSON.parse(xhr_space.responseText);
		console.log(tweets);
			
		// DO STUFF WITH space x TWEETS
		var count = 0;
		tweets.statuses.forEach(function(item){  //<--- can i change it to tweets.statuses2.forEach(function(item){
			count += item.retweet_count;
		})
		document.getElementById("spacecount").innerHTML = count
	}
}


//Unrelated code for diff project
// document.getElementById("a").addEventListener("click", function(e) {
// 	e.preventDefault();
// })
	
}
