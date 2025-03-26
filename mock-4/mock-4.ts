// # Mock Interview 4:

// # Validate Binary Search Tree
// # Given the root of a binary tree, determine if it is a valid BST.
// # Example:
// # Input: root = [2,1,3]
// # Output: True
// # Input: root = [5,1,4,null,null,3,6]
// # Output: False

class VNode<T> {
  data: T;
  left: VNode<T> | null;
  right: VNode<T> | null;

  constructor(value: T) {
    this.data = value;
    this.left = this.right = null;
  }
}

const checkBst = (
  node: VNode<number> | null,
  min: number,
  max: number
): boolean => {
  if (node === null) return true;
  if (node.data < min || node.data > max) return false;

  return (
    checkBst(node.left, min, node.data - 1) &&
    checkBst(node.right, node.data + 1, max)
  );
};

const isBst = (root: VNode<number>) => {
  return checkBst(root, -Infinity, Infinity);
};

const rootTest1 = new VNode(2);
rootTest1.left = new VNode(1);
rootTest1.right = new VNode(3);

// console.log(isBst(rootTest1));

// root = [5,1,4,null,null,3,6]
const rootTest2 = new VNode(5);
rootTest2.left = new VNode(1);
rootTest2.right = new VNode(4);
rootTest2.right.left = null;
rootTest2.right.right = null;
rootTest2.right.right = new VNode(3);
rootTest2.right.right = new VNode(6);

// console.log(isBst(rootTest2));

// # Jump Game
// # Given an array where each element represents the maximum jump length, determine if you can reach the last index.
// # Example:
// # Input: nums = [2,3,1,1,4]
// # Output: True
// # Input: nums = [3,2,1,0,4]
// # Output: False
const minJump = (arr: number[]) => {
  if (arr[0] === 0) return false;
  let len = arr.length;
  let max = 0;
  let curr = 0;
  let jump = 0;

  for (let i = 0; i < len; i++) {
    max = Math.max(max, i + arr[i]);
    if (max >= len - 1) return true;
    if (i === curr) {
      if (i === max) {
        return false;
      } else {
        jump++;
        curr = max;
      }
    }
  }
  return false;
};

console.log(minJump([2, 3, 1, 1, 4])); // True
console.log(minJump([3, 2, 1, 0, 4])); // false
