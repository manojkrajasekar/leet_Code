function serialize(root) {
  function traverse(root) {
    if (root == null) {
      res.push(null);
      return;
    }
    res.push(root.val);

    traverse(root.left);
    traverse(root.right);

    return res;
  }

  traverse(root);
  console.log("res", res);
  return res;
}

function deserialize(data = []) {
  let node = data.shift();

  if (node == null) {
    return null;
  }

  let newNode = new TreeNode(node);

  newNode.left = deserialize(data);
  newNode.rigght = deserialize(data);

  return newNode;
}
