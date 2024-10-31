/*
 * @Author: This is CodeMan
 */
var global = 'window'; 
this.b = 'windowbbbb'
function m1() { 
    console.log(global, 'm1')
    console.log(this.b, 'm1')
}; 
function m2() { 
    var b = 'outer'; 
    this.b = 'm2'
    m1()
    console.log(b, 'm2') 
};
m2();
// m1();
// console.log(a)

// function getName() {
//   console.log(5);
// }
// function test() {
//   getName = function() {
//     console.log(1);
//   };
//   return this;
// }
// test.getName = function() {
//   console.log(2);
// };
// test.prototype.getName = function() {
//   console.log(3);
// };
// var getName = function() {
//   console.log(4);
// };
// function getName() {
//   console.log(5);
// }

// test.getName();
// getName();
// // test().getName();
// getName();
// new test.getName();
// new test().getName();
// new new test().getName();
// new new test().getName().getName()