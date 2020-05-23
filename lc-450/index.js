function deleteNode(root, key) {
  if (root == null) return null;

  if (key > root.val) {
    deleteNode(root.right, key);
  } else if (key < root.val) {
    deleteNode(root.left, key);
  } else {
    if (root.left == null) {
      return root.right;
    } else if (root.right == null) {
      return root.left;
    }

    root.val = getMinimum(root.right);
    root.right = deleteNode(root.right, root.val);
  }

  return root;
}

function getMinimum(root) {
  root = root.left;
  while (root.left !== null) {
    root = root.left;
  }

  return root.val;
}
