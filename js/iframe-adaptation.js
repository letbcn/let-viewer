// iframe should have in <body> data-url_parent = "parent_url"
// parent should have in <iframe> class = "iframe_full_height"

window.addEventListener("load", function() {
	
	console.log('load');
	console.log('parent...');

	var iframes = document.getElementsByClassName('iframe_full_height');
	
	console.log('iframes');
	console.log(iframes);
	
	Array.prototype.filter.call(iframes, function(iframe) {
		
		window.iframe = iframe;
		
		console.log(window.iframe);
		
		window.addEventListener('message',function(event){
						
			var iframe = event.currentTarget.iframe;
			
			console.log(iframe)
					
			if (iframe.src === undefined ) {
				return;
			}
		
			if( event.origin !== iframe.src) {
				return;
			}
			
			console.log('skip all ifs, its parent!')
			
			console.log('event.data')
			console.log(event.data)
			
			iframe.style.height = event.data;			
			
		},false);
	});
	
	console.log('iframe...');
	
	var data_url_parent = document.body.dataset.url_parent;
	
	if (data_url_parent === undefined ) {
		return;
	}
	console.log('skip if, its iframe!')
	
	const body = document.body;
	const html = document.documentElement;
	console.log(body)
	console.log(html)
	console.log(html)
	
	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ) + 'px';
	
	console.log(height)
	console.log(data_url_parent)
	
	top.postMessage(height, data_url_parent);	
});

