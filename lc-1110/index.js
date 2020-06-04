function delNodes(root, to_delete) {
  let deleteSet = new Set(to_delete);
  let removeNodes = [];

  dfsDelete(root, removeNodes, deleteSet);

  if (!deleteSet.has(root.val)) removeNodes.push(root);

  return removeNodes;

  function dfsDelete(root, removeNodes, deleteSet) {
    if (root === null) return null;

    root.left = dfsDelete(root.left, removeNodes, deleteSet);
    root.right = dfsDelete(root.right, removeNodes, deleteSet);

    if (deleteSet.has(root.val)) {
      if (root.left) {
        removeNodes.push(root.left);
      }
      if (root.right) {
        removeNodes.push(root.right);
      }

      return null;
    }

    return root;
  }
}
