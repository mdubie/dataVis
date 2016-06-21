class Tree {
  constructor(value, children) {
    this.value = value || null;
    this.children = children || [];
  }

  addChild(value) {
    this.children.push(Tree(value))
  }

}


let a = 5;

dSelf()

len




var Tree = function(value) {
  return {
    value: value,
    children: [],
    addChild: treeMethods.addChild,
    forEachBF: treeMethods.forEachBF,
    forEachDF: treeMethods.forEachDF,
    mapArrBF: treeMethods.mapArrBF,
    mapTreeBF: treeMethods.mapTreeBF,
    containsDF: treeMethods.containsDF
  };
}

var treeMethods = {};

//applies a call back to every value stored in a tree in a breadth first approach
treeMethods.forEachBF = function(callback) {
  var queue = [this];

  while (queue.length) {
    queue[0].children.forEach((child) => {queue.push(child)})
    callback(queue.shift());
  }
};

//applies a callback to every value stored in a tree and returns an array of mapped values
treeMethods.mapArrBF = function(callback) {
  var queue = [this];
  var mapped = [];

  while (queue.length) {
    queue[0].children.forEach((child) => {queue.push(child)})
    mapped.push(callback(queue.shift()));
  }

  return mapped;
};

//maps and mutatates current tree values according to a callback fn in BF manner
treeMethods.mapTreeBF = function(callback) {
  var queue = [this];

  while (queue.length) {
    var node = queue[0]
    node.children.forEach((child) => {queue.push(child)})
    node.value = callback(node)
    queue.shift();
  }
};

//applies a call back to every value stored in a tree in a depth first approach
treeMethods.forEachDF = function(callback) {
  var stack = [this];

  while (stack.length) {
    var node = stack.pop();
    node.children.forEach((child) => {stack.push(child)})
    callback(node);
  }
};

//searches a tree for a target value in a depth first manner. return a boolean
treeMethods.containsDF = function(target) {
  var stack = [this];

  while (stack.length) {
    var node = stack.pop();
    if (node.value === target) {
      return true;
    }
    node.children.forEach((node) => {stack.push(node)});
  }
  return false;
};

var testTree = Tree(0);
testTree.addChild(1);
testTree.addChild(2);
testTree.addChild(3);
testTree.addChild(4);
testTree.addChild(5);
testTree.children[0].addChild(11);
testTree.children[1].addChild(12);
testTree.children[1].addChild(13);
testTree.children[4].addChild(14);
testTree.children[4].addChild(15);

var printValue = function(node) {
  console.log('Node value: ', node.value);
}


testTree.forEachBF(printValue);
console.log(testTree);



console.log(testTree)