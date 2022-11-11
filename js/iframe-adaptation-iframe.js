// iframe should have in <body> data-url_parent = "parent_url"

window.addEventListener("load", function() {
	
	console.log('load');	
	console.log('iframe...');
	
	var data_url_parent = 'https://iermb.uab.cat/';
	
	const body = document.body;
	const html = document.documentElement;
	console.log(body)
	console.log(html)
	
	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ) + 'px';
	
	console.log(height)
	
	top.postMessage(height, data_url_parent);	
});

