$(function() {
	console.log('begin');
	$.ajax({
		url: "https://www.reddit.com/api/login/fadingz",
		type: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: 'op=login-main&user=fadingz&passwd=dortheking&api_type=json'
	}).done(function(response) {
		console.log('response: ', response);
		console.log('should redirect');
	}).fail(function(error) {
		console.log('failure: ', error);
	}).always(function() {
		console.log('finished running');
	});
});