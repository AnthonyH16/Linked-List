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

    size(){
        let currentNode = this.head;
        let count = 0;
        while(currentNode){
            count++;
        }
        return count;
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
console.log(size());