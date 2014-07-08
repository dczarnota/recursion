// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	if(typeof obj === 'string'){
		return "\"" + obj + "\"";
	}
	if (typeof obj === 'boolean'){
		return "" + obj + "";
	}
	if (typeof obj === 'number'){
		return "" + obj + "";
	}
	if (obj === undefined || typeof obj === "function"){
        return "";
    }
    if (obj === null){
        return "null";
    }
	if (Array.isArray(obj)){
		var arrayResult = "[";
		for(var i=0; i<obj.length; i++)
		{
			if(i>0) arrayResult += ",";
			arrayResult += stringifyJSON(obj[i]);
		}
		return arrayResult + "]";
	} else {
		var objKeys = Object.keys(obj);
		var result = [];
		var open = "{", close = "}";
		for(var j=0; j<objKeys.length; j++){
			var item = objKeys[j];
			var prop = obj[item];
			if(prop === undefined || typeof prop === "function")
				return open + close;
			var stringify = "\"" + item + "\":";
			stringify = (typeof prop === "string") ? stringify += "\"" + prop +"\"" : stringify += stringifyJSON(prop);
			result.push(stringify);
		}
	return open + result.join() + close;
	}
};
