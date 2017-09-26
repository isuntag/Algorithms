// Create a SLL and add function in typescript
class SLLNode {
    val: any;
    next: any;
    constructor(startVal: any){
        this.val = startVal;
        this.next = null;
    }
}

class SLL {
    head: SLLNode;
    runner: SLLNode;
    constructor(){
        this.head = null;
    }
    add(val: any){
        var runner = this.head;
        if(!runner) {
            this.head = new SLLNode(val);
            return this;
        }
        while(runner.next) {
            runner = runner.next;
        }
        runner.next = new SLLNode(val);
        return this;
    }
}

  var listy: SLL = new SLL();
  listy.add(1).add(5).add(5).add(6);
  console.log(listy);
