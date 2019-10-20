/**
 * 实现一个带虚拟头节点的单链表
 * Node {
 *  val,
 * nexd
 * }
 */


 class Node {
     constructor(val,next){
         this.val = val
         this.next = next
     }
 }

class Nodelist {
    constructor(nums=[]){
        this.head = new Node('dummyHead',null)
        let cur = this.head
        if(nums.length){
            for(let num of nums){
                cur.next = new Node(num,null)
                cur = cur.next
            }
        }
    }
    //返回链接的结构
    toString(){
        let str = ''
        let cur = this.head
        while(cur!==null){
            if(cur.next===null){
                str+=`${cur.val}`
            } else {
                str+=`${cur.val}->`
            }
            cur = cur.next
        }
        return str
    }
    //返回链表的长度
    length(){
        let len=-1 //不考虑虚拟头结点
        let cur = this.head
        while(cur){
            len++
            cur = cur.next
        }
        return len
    }
    //增加某个节点,索引从0开始
    add(index,node){
        let prev = this.head
        while(index--){
            prev = prev.next
        }
        let tmpNode = prev.next
        prev.next = node
        node.next = tmpNode
    }
    //删除某个节点，索引从0开始,返回删除的节点
    remove(index){
        let prev = this.head
        while(index--){
            prev = prev.next
        }
        let removeNode = prev.next
        prev.next = prev.next.next
        removeNode.next = null
        return removeNode
    }
}


let nodeList = new Nodelist([1,2,3])
console.log(nodeList.toString())
nodeList.add(3,new Node(1.5,null))
console.log(nodeList.toString())
nodeList.remove(0)
console.log(nodeList.toString())

