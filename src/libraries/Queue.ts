// interface Queue {
//   qu: Object,
//   tail: number,
//   head: number
// }

export default function Queue() {
  this.qu = {};
  this.tail = 0;
  this.head = 0;
}
// Add an element to the end of the queue.
Queue.prototype.enqueue = function(element) {
  this.qu[this.tail++] = element;
}
// Delete the first element of the queue.
Queue.prototype.dequeue = function() {
  if (this.tail === this.head)
    return undefined
  const element = this.qu[this.head];
  delete this.qu[this.head++];
  return element;
}

Queue.prototype.getLength = function() {
  return this.tail - this.head;
}
