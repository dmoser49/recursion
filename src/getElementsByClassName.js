// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  
  var results = [];

  function checkChildNodes(children){
    if (children){
        for (var i = 0; i < children.length; i++){
          getElements(children[i]);

        }
      }
  }

  var getElements = function(node){
    if (node.classList && node.classList.contains(className)){
      results.push(node);
      checkChildNodes(node.childNodes)
    }
    else{
      checkChildNodes(node.childNodes)
    }
  } 
  
  getElements(document.body);
  return results;
};

