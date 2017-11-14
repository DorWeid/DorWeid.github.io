$(function() {
	console.log('begin');
	
	$("form").submit(function(e) {
		e.preventDefault();
		debugger;
		window.location.href = "https://www.reddit.com";
	})
	
	$("form").submit();
});