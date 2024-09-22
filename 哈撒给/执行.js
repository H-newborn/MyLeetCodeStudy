/*
 * @Author: This is CodeMan
 */
// 这段代码执行后，打印的结果是什么

function test() {
  getName = function() {
    console.log(1);
  };
  return this;
}
test.getName = function() {
  console.log(2);
};
test.prototype.getName = function() {
  console.log(3);
};
var getName = function() {
  console.log(4);
};
function getName() {
  console.log(5);
}

test.getName(); 
getName(); 
test().getName(); 
getName(); 
new test.getName(); 
new test().getName();
new new test().getName();

// 结果： 2，4，1，1，2，3，3
// 考察点：
// 1. 变量定义提升
// 2. this指针指向
// 3. 运算符优先级
// 4. 原型
// 5. 继承
// 6. 全局变量污染
// 7. 对象属性及原型属性优先级

// var getName = function() {
//   console.log(1);
// };
// function getName() {
//   console.log(2);
// }
// getName();

// 测试题目1
var name = 'window'
var user1 = {
    name: 'user1',
    foo1: function () {
        console.log(this.name)
    },
    foo2: () => console.log(this.name),
    foo3: function () {
        return function () {
            console.log(this.name)
        }
    },
    foo4: function () {
        return () => {
            console.log(this.name)
        }
    }
}
var user2 = { name: 'user2' }

// user1.foo1()
// user1.foo1.call(user2)

// user1.foo2()
// user1.foo2.call(user2)

// user1.foo3()()
// user1.foo3.call(user2)()
// user1.foo3().call(user2)

// user1.foo4()()
// user1.foo4.call(user2)()
// user1.foo4().call(user2)

// user1.foo1()  // user1
// user1.foo1.call(user2) // user2

// user1.foo2() // window
// user1.foo2.call(user2) // window

// user1.foo3()() // window
// user1.foo3.call(user2)() // window
// user1.foo3().call(user2) // user2

// user1.foo4()() // user1
// user1.foo4.call(user2)() // user2
// user1.foo4().call(user2) // user1
