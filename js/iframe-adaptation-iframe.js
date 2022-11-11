window.addEventListener("load", function() {
	
	var data_url_parent = 'https://iermb.uab.cat/';
	
	var height = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ) + 'px';
	
	top.postMessage(height, data_url_parent);	
});

