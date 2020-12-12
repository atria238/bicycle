function prependPolyfill(arr) {
	arr.forEach(function (item) {
	  if (item.hasOwnProperty('prepend')) {
		 return;
	  }
	  Object.defineProperty(item, 'prepend', {
		 configurable: true,
		 enumerable: true,
		 writable: true,
		 value: function prepend() {
			var argArr = Array.prototype.slice.call(arguments),
			  docFrag = document.createDocumentFragment();
			
			argArr.forEach(function (argItem) {
			  var isNode = argItem instanceof Node;
			  docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
			});
			
			this.insertBefore(docFrag, this.firstChild);
		 }
	  });
	});
}
export default prependPolyfill;