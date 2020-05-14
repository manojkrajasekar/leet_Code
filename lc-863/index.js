var distanceK = function (root, target, K) {
  let childToParentNodeMap = new Map();

  let res = calculateParentNodes(childToParentNodeMap, root, null);

  let queue = [],
    currentLayer = 0;
  let seen = new Set();

  seen.add(target);
  queue.push(target);

  while (queue.length) {
    if (currentLayer == K) {
      return getNodes(queue);
    }

    let layerSize = queue.length;

    for (let i = 0; i < layerSize; i++) {
      let node = queue.shift();

      if (node.left !== null && !seen.has(node.left)) {
        seen.add(node.left);
        queue.push(node.left);
      }

      if (node.right !== null && !seen.has(node.right)) {
        seen.add(node.right);
        queue.push(node.right);
      }

      let parentNode = res.get(node);

      if (parentNode !== null && !seen.has(parentNode)) {
        seen.add(parentNode);
        queue.push(parentNode);
      }
    }
    currentLayer++;
  }

  return [];
};

function getNodes(queue) {
  let result = [];

  for (let i = 0; i < queue.length; i++) {
    result.push(queue[i].val);
  }

  return result;
}

function calculateParentNodes(childToParentNodeMap, child, parent) {
  if (child == null) return;

  childToParentNodeMap.set(child, parent);

  if (child.left !== null)
    calculateParentNodes(childToParentNodeMap, child.left, child);

  if (child.right !== null)
    calculateParentNodes(childToParentNodeMap, child.right, child);

  return childToParentNodeMap;
}
