interface Queue {
  qu: Set<number>,
  // tail: number,
  // head: number
}

export default function Queue() {
  this.qu = new Set();
  // this.tail = 0;
  // this.head = 0;
}
// Add an element to the end of the queue.
Queue.prototype.enqueue = function(element) {
  this.qu.add(element);
}
// Delete the first element of the queue.
Queue.prototype.dequeue = function() {
  if (!this.qu.size) {
    return undefined;
  }

  let element: number = -1;

  for (let elem of this.qu) {
    element = elem;
    this.qu.delete(elem);
    break;
  }

  // // if (this.tail === this.head)
  // //   return undefined
  // const element = this.qu[this.head];
  // delete this.qu[this.head++];
  return element;
}

Queue.prototype.getLength = function() {
  return this.qu.size;
}
