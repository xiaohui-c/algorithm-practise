export interface ITreeNode {
    value: number;
    left: ITreeNode | null;
    right: ITreeNode | null;
}

const arr: number[] = []

export function getKthValue( node: ITreeNode | null, k: number ): number | null{
    inOrderTraverse(node)
    return arr[k - 1] || null
}
// 前序遍历
function preOrderTraverse(node: ITreeNode | null) {
    if (node == null) return;
    arr.push(node.value)
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
}


// 中序遍历
function inOrderTraverse( node: ITreeNode | null ) {
    if(node == null)    return
    inOrderTraverse(node.left)
    arr.push(node.value)
    inOrderTraverse(node.right)
}

// 后序遍历
function postOrderTraverse( node: ITreeNode | null ) {
    if(node == null)    return
    postOrderTraverse(node.left)
    postOrderTraverse(node.right)
    arr.push(node.value)
}

const bst: ITreeNode = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null,
        },
        right: {
            value: 4,
            left: null,
            right: null,
        },
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null,
        },
        right: {
            value: 8,
            left: null,
            right: null,
        },
    },
};

// preOrderTraverse(bst)
// inOrderTraverse(bst)
// postOrderTraverse(bst)
console.log(getKthValue(bst,3));

