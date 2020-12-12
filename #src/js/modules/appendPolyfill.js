function appendPolyfill(arr) {
	arr.forEach(function (item) {
	  if (item.hasOwnProperty('append')) {
		 return;
	  }
	  Object.defineProperty(item, 'append', {
		 configurable: true,
		 enumerable: true,
		 writable: true,
		 value: function append() {
			var argArr = Array.prototype.slice.call(arguments),
			  docFrag = document.createDocumentFragment();
			
			argArr.forEach(function (argItem) {
			  var isNode = argItem instanceof Node;
			  docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
			});
			
			this.appendChild(docFrag);
		 }
	  });
	});
 }

export default appendPolyfill;