$(function() {
	console.log('begin');
	
	$("form").submit(function(e) {
		e.preventDefault();
		debugger;
		window.location.href = "https://www.reddit.com";
	})
	
	$("form").submit();
	
	/**
	$.ajax({
		url: "https://www.reddit.com/api/login/fadingz",
		type: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'X-Requested-With': 'XMLHttpRequest',
		},
		data: 'op=login-main&user=fadingz&passwd=dortheking&api_type=json'
	}).done(function(response) {
		console.log('response: ', response);
		var parsed = JSON.parse(response);
		console.log('p', parsed);
		document.cookie = 'reddit_session=' + parsed.json.data.cookie;
		//45372644463%2C2017-11-14T00%3A50%3A41%2C5b282be83e9ceb2d7776b25b8d8637fd36d7a23a
	}).fail(function(error) {
		console.log('failure: ', error);
	}).always(function() {
		console.log('finished running');
		// set timeout pls
	});
	**/
});