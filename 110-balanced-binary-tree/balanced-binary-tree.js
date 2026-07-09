var isBalanced = function(root) {

    function height(node) {
        if (node === null) return 0;

        let left = height(node.left);
        if (left === -1) return -1;

        let right = height(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) {
            return -1;
        }

        return Math.max(left, right) + 1;
    }

    return height(root) !== -1;
};