let ToolsService = {
	doByClassName: function(className, cb) {
		let elems = document.getElementsByClassName(className);

    	for (let i = 0; i < elems.length; i++) {
    		let elemItem = elems[i];
    		cb(elemItem);
    	}

    	return  elems;
	}
};

export { ToolsService };