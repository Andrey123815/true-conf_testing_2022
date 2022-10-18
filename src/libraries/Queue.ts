export default class Queue<T> {
  qu: Set<T>;

  constructor() {
    this.qu = new Set<T>();
  }

  enqueue(item: T) {
    this.qu.add(item);
  }

  dequeue(target: T) {
    if (!this.qu.size) {
      return undefined;
    }

    this.qu.delete(target);

    return target;
  }

  getLength() {
    return this.qu.size;
  }
}
