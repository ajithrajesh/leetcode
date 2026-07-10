var inorderTraversal = function(root) {
    let result = [];

    function inorder(node) {
        if (node === null) return;

        inorder(node.left);      // Left
        result.push(node.val);   // Root
        inorder(node.right);     // Right
    }

    inorder(root);

    return result;
};