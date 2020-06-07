function MyQueue() {
  this.stack1 = [];
  this.stack2 = [];
}

MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

MyQueue.prototype.pop = function () {
  // get all the element from s1 and push it back to s2
  // get the last element from the s2
  // put back all the elements to s1 from s2

  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }

  let poppedElement = this.stack2.pop();

  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }

  return poppedElement;
};

MyQueue.prototype.peek = function () {
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }

  let firstElement = this.stack2.pop();
  this.stack1.push(firstElement);

  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }

  return firstElement;
};

MyQueue.prototype.empty = function () {
  return this.stack1.length === 0;
};
