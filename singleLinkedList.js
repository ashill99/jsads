// What is a Linked List? 

// a data structure that contains a head, tail and length property. 

// Linked Lists consist of nodes, and each node has a value and a pointer to another node or null 

// linked list has no index, we ask for the next next next 

// random access is not allowed in lists 

// ARRAYS 

// indexed in order, insertion and deletion can be expensive and they can be accessed in order 

// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
