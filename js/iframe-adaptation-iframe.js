window.addEventListener("load", function() {
	
	setTimeout(function(){
	
	console.log('iframe addEventListener load');
	console.log(document.URL);
	
	var data_url_parent = 'https://iermb.uab.cat/';
	
	var height = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
	
	console.log('height');
	console.log(height);
	
	height += 40;
	
	window.top.postMessage(height + 'px', data_url_parent);

	},5000);
	
});

