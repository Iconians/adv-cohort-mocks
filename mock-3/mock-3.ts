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
console.log(t1.dequeue()); // 1
t2.enqueue(3);
t2.enqueue(4);
t2.enqueue(5);
console.log(t2.dequeue()); // 3
console.log(t2.dequeue()); // 4

// # Reverse Nodes in k-Group
// # Given a linked list, reverse the nodes of the list k at a time and return the modified list.
// # Example:
// # Input: head = [1,2,3,4,5], k = 2
// # Output: [2,1,4,3,5]
// # Input: head = [1,2,3,4,5,6], k = 3
// # Output: [3,2,1,6,5,4]
