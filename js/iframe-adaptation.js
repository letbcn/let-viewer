// iframe should have in <body> data-url_parent = "parent_url"
// parent should have in <iframe> class = "iframe_full_height"

window.addEventListener("load", function() {

	var iframes = document.getElementsByClassName('iframe_full_height');
	
	Array.prototype.filter.call(iframes, function(iframe) {
		
		window.iframe = iframe;
		
		window.addEventListener('message',function(event){
						
			var iframe = event.currentTarget.iframe;
					
			if (iframe.src === undefined ) {
				return;
			}
		
			if( event.origin !== iframe.src) {
				return;
			}
			
			iframe.style.height = event.data;			
			
		},false);
	});
	
	
	var data_url_parent = document.body.dataset.url_parent;
	
	if (data_url_parent === undefined ) {
		return;
	}
	
	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ) + 'px';
	
	top.postMessage('page_height', height, data_url_parent);	
});

