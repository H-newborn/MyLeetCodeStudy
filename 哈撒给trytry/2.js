/*
 * @Author: This is CodeMan
 */
// [{a:1, b:2},{a:1},{a:1}, {a:1, b:{c:1}}, {b:{c:1}, a:1}]
//   => [{a:1, b:2}, {a:1}, {a:1, b:{c:1}}]

function deputation(arr) {
    const weakSet = new WeakSet()
    arr.forEach(item => {
        console.log(item)
        if (!weakSet.has(item)) {
            weakSet.add(item)
        }
    })
    console.log(weakSet)
    return [...weakSet]
}

console.log(deputation([{a:1, b:2},{a:1},{a:1}, {a:1, b:{c:1}}, {b:{c:1}, a:1}]))

