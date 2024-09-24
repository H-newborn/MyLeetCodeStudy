/*
 * @Author: This is CodeMan
 */
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = new Parent(); // 也可以使用Object.create(parent.prototye)创建原型
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');