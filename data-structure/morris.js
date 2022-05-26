// 左程云 version 
function morris(root) {
    let current = root;
    let mostRight = null;
    const ret = [];
    while (current !== null) {
        mostRight = current.left;

        if (mostRight) { // 存下左节点
            while (mostRight.right !== null && mostRight.right !== current) {
                mostRight = mostRight.right;
            }

            if (mostRight.right === null) {
                mostRight.right = current; // 设置后继节点
                current = current.left; // 因为要沿着左分支下去
                continue;
            } else if (mostRight.right === current) {
                mostRight.right = null; // 还原
                current = current.right;
            }
        } else {
            current = current.right;
        }
    }

    return ret;
};