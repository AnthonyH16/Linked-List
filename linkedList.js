class LinkedList{
    constructor(){
        this.head = null ;      
        this.size = 0;
    }

    prepend(value){
        this.head = new Node(value, this.head);
        this.size++;
        // console.log(this.head.value);
    }
    append(value){
        let node = new Node(value);
        let current;

        if(!this.head){ //if there's no head make one using current node
            this.head = node;
        } 
        else{
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    totalNodes(){
        let currentNode = this.head;
        let count = 0;
        while(currentNode){
            count++;
            currentNode = currentNode.next;
        }
        console.log(count);
        return count;
    }

    whatIsTheHead(){
        let currentNode = this.head;

        console.log(currentNode);
    }

    gimmeThatTail(){        
        let currentNode = this.head;
        while(currentNode){            
            if (currentNode.next == null){
                console.log(currentNode);
            }
            currentNode = currentNode.next;
        }
    }
    at(index){//returns the value of node at specified index
        let currentNode = this.head;
        let count = 0
        while (currentNode){
            if(count == index){
                console.log(currentNode.value);
            }
            count++;
            currentNode = currentNode.next;            
        }
        return null;
    }
    pop(){
        let currentNode = this.head;
        let previousNode;
        while(currentNode){
            if (currentNode.next == null){
                previousNode.next = currentNode.next;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    contains(value){
        let currentNode = this.head;
        let isIt = false
        while(currentNode){
            if(currentNode.value === value){
                isIt = true
            }
            currentNode = currentNode.next;
        }
        console.log(isIt);
    }

    findIndex(value){//returns index of node containing value, if found. Returns null otherwise.
        let currentNode = this.head;
        let count = 0;
        while(currentNode){
            if(currentNode.value === value){
                console.log(count);
                return
            }
            else if(count == this.size - 1 && currentNode.value !== value){                
                console.log(null);
                return null;
            }
            count++
            currentNode = currentNode.next;
        }
        
    }

    toString(){
        let currentNode = this.head;
        let allNodes =[];
        while(currentNode){
            allNodes.push(`${currentNode.value}`);            
            currentNode = currentNode.next;
        }
        let nodesWithJoin = allNodes.join('->');
        console.log(nodesWithJoin);
        return nodesWithJoin;
        
        
    }

    insertAt(value, index){
        if(index > 0 && index > this.size){//if index is larger than current index size, return nothing
            return;
        }
        
        if(index === 0 ){
            this.head = new Node(value , this.head);
            return;
        }
        
        const node = new Node(value);
        let current;
        let previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; 
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;

    }

    removeAt(index){
        if (index > 0 && index > this.size){
            return;
        }
        let currentNode = this.head;
        let count = 0;
        let previousNode;

        if(index === 0){
            this.head = currentNode.next;
        }
        else{
            while (count < index){
                count++;
                previousNode = currentNode;
                currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;        
        }

        this.size--;
        
    }






    printList(){
        let current = this.head;
        while (current){
            console.log(current.value);
            current = current.next;
        }
    }
    


}



class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}


const linkedList = new LinkedList();
linkedList.prepend(100);
linkedList.prepend(200);
linkedList.prepend(300);
linkedList.prepend(400);

// linkedList.removeAt(2);

linkedList.printList();
// console.log(linkedList.totalNodes());
// linkedList.totalNodes();
// linkedList.whatIsTheHead();
// linkedList.gimmeThatTail();

// linkedList.pop();
// linkedList.printList();
// linkedList.gimmeThatTail();
// linkedList.contains(20);
// linkedList.findIndex(20);
linkedList.toString();