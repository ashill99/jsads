var nodeToFind = document.getElementById("node-two");
var rootOne = document.getElementById("root-one");
var rootTwo = document.getElementById("root-two");
var nodeOne = document.getElementById("node-one");

/**
 * problem taken from
 * https://kuzzmi.com/blog/searching-for-a-symmetric-node/
 * Given identical DOM structures, A and B, and a node from A
 * find the corresponding node in B.
 *
 */

function findSimilar(rootOne, rootTwo, theNode) {
  //implement me!
  return false;
}

let theSol = findSimilar(rootOne, rootTwo, nodeOne);
console.log(theSol);
console.log("answer: ", theSol === nodeToFind);
