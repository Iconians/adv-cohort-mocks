// # Mock Interview 5: Mixed Topics

// # Middle of the Linked List
// # Given a singly linked list, return the middle node in one pass.
// # Example:
// # Input: head = [1,2,3,4,5]
// # Output: [3,4,5]
// # Input: head = [1,2,3,4,5,6]
// # Output: [4,5,6]

class MNode<T> {
  data: T;
  next: MNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

const findLength = (node: MNode<number> | null) => {
  let count = 0;

  while (node) {
    count++;
    node = node.next;
  }

  return count;
};

const findMiddle = (node: MNode<number> | null) => {
  const getLength = findLength(node);
  let mid = Math.floor(getLength / 2);
  let arr = [];

  while (mid-- > 0 && node !== null) {
    node = node.next;
  }

  while (node !== null) {
    arr.push(node.data);
    node = node.next;
  }
  return arr;
};

const root = new MNode(1);
root.next = new MNode(2);
root.next.next = new MNode(3);
root.next.next.next = new MNode(4);
root.next.next.next.next = new MNode(5);

// console.log(findMiddle(root)); // [3,4,5]

const nodeT1 = new MNode(1);
nodeT1.next = new MNode(2);
nodeT1.next.next = new MNode(3);
nodeT1.next.next.next = new MNode(4);
nodeT1.next.next.next.next = new MNode(5);
nodeT1.next.next.next.next.next = new MNode(6);

// console.log(findMiddle(nodeT1)); // [4,5,6]

// # Trapping Rain Water
// # Given an elevation map, compute how much water it can trap after raining.
// # Example:
// # Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// # Output: 6
// # Input: height = [4,2,0,3,2,5]
// # Output: 9

const maxWater = (arr: number[]) => {
  let stack: number[] = [];
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      const top = stack.pop();
      if (top === undefined) break;
      let popHt = arr[top];
      if (stack.length === 0) break;
      let distance = i - stack[stack.length - 1] - 1;
      let water = Math.min(arr[stack[stack.length - 1]], arr[i]);
      water -= popHt;
      result += distance * water;
    }
    stack.push(i);
  }
  return result;
};

console.log(maxWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(maxWater([4, 2, 0, 3, 2, 5])); // 9
