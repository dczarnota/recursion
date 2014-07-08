// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];

  var walk_the_DOM = function walk(node, func){
  	func(node);
  	node = node.firstChild;
  	while(node){
  		walk(node, func);
  		node = node.nextSibling;
  	}
  };

  walk_the_DOM(document.body, function(node){
  	if (_.contains(node.classList, className))
  		results.push(node);
  });
  
  return results;
};
