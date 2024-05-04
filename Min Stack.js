var LinkedList = function(val, min, next){
    this.val = val;
    this.min = min;
    this.next = next;
}

var MinStack = function() {
    this.node = undefined
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.node == undefined){
        this.node = new LinkedList(val, val, this.node)
        return
    }
    this.node = new LinkedList(val, Math.min(val, this.node?.min ?? Number.INFINITY), this.node)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.node = this.node.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.node.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.node.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */