// # Mock Interview 3:

// # Implement a Queue using Stacks
// # Implement a queue using two stacks and provide enqueue and dequeue operations.
// # Example:
// # Input: enqueue(1), enqueue(2), dequeue()
// # Output: 1
// # Input: enqueue(3), enqueue(4), enqueue(5), dequeue(), dequeue()
// # Output: 3, 4

class Queue<T> {
  private stack1: T[];
  private stack2: T[];
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(item: T): void {
    this.stack1.push(item);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        const poppedItem = this.stack1.pop();
        if (poppedItem !== undefined) {
          this.stack2.push(poppedItem);
        }
      }
    }
    return this.stack2.pop();
  }
}
const t1 = new Queue();
const t2 = new Queue();
t1.enqueue(1);
t1.enqueue(2);
// console.log(t1.dequeue()); // 1
t2.enqueue(3);
t2.enqueue(4);
t2.enqueue(5);
// console.log(t2.dequeue()); // 3
// console.log(t2.dequeue()); // 4

// # Reverse Nodes in k-Group
// # Given a linked list, reverse the nodes of the list k at a time and return the modified list.
// # Example:
// # Input: head = [1,2,3,4,5], k = 2
// # Output: [2,1,4,3,5]
// # Input: head = [1,2,3,4,5,6], k = 3
// # Output: [3,2,1,6,5,4]

class RNode<T> {
  data: T;
  next: RNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

const reverseNode = (
  head: RNode<number> | null,
  k: number
): RNode<number> | null => {
  if (head === null) return head;
  let curr: RNode<number> | null = head;
  let newHead = null;
  let tail: RNode<number> | null = null;

  while (curr !== null) {
    let groupHead = curr;
    let prev = null;
    let nextNode = null;
    let count = 0;

    while (curr !== null && count < k) {
      nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
      count++;
    }

    if (newHead === null) {
      newHead = prev;
    }

    if (tail !== null) {
      tail.next = prev;
    }

    tail = groupHead;
  }
  return newHead;
};

function printList(head: RNode<number> | null): void {
  let curr = head;
  let val = [];
  while (curr !== null) {
    // console.log(curr.data + " ");
    val.push(curr.data);
    curr = curr.next;
  }
  console.log(val);
}

let t1head = new RNode(1);
t1head.next = new RNode(2);
t1head.next.next = new RNode(3);
t1head.next.next.next = new RNode(4);
t1head.next.next.next.next = new RNode(5);
const test1 = reverseNode(t1head, 2);
printList(test1);

let t2head = new RNode(1);
t2head.next = new RNode(2);
t2head.next.next = new RNode(3);
t2head.next.next.next = new RNode(4);
t2head.next.next.next.next = new RNode(5);
t2head.next.next.next.next.next = new RNode(6);
const test2 = reverseNode(t2head, 3);
printList(test2);
