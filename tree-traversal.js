// var $ = require("jquery");

let tree = { body:{ children: [] } };

function treeTraversal(element, parent){
  let children = $(element).children();
  console.log(children);

  if(element === 'body'){
    tree['body'].children = children;
  } else {
    debugger;
    tree[parent][element] = element;
    tree[parent][element].children = children;
  }

  debugger;
  $.each(children, (idx, el) => {
    if(el.children){
      // debugger;
      if(el.children.length > 0){
        treeTraversal(el, element);
      }
    }
  })
}
