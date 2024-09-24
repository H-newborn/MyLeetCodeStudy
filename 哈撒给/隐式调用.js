/*
 * @Author: This is CodeMan
 */
class MyDate {
    constructor(val) {
        this.val = val;
    }

    toString() {
        console.log('toString')
        const date = new Date(this.val);
        const day = date.getDay();
        return `${date.getFullYear()}年${date.getMonth() + 1}月${day < 10 ? `0${day}` : day}日`
    }

    valueOf() {
        console.log('valueOf')
        return parseInt(this.val.charAt(this.val.length - 1))
    }
}


const date1 = new MyDate('2022-10-01');
console.log(`date1:${date1}`) // 输出 date1: 2022年10月01日
console.log(`date1:${date1}`) // 输出 date1: 2022年10月01日
const date2 = new MyDate('2022-10-02');
const date3 = new MyDate('2022-10-03');
console.log( 1 + date2 + date3) // 输出 6 (提示: 尾字符相加)