/**
 * 情况一：promise 通过reject抛出异常
 */
// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(function() {
//         // resolve(3);
//         reject(new Error(4));
//     }, 500);
//     console.log(2);
// })

// promise
//     .then(function(result) {
//         console.log(result)
//     })
//     .catch(function(err) {
//         console.log('err info:', err); // 此处能够捕捉到异常，因为setTimeout内，异常是通过reject(new Error(4))抛出的。
//     })

// setTimeout(() => {
//     console.log('promise', promise)
// }, 800)


/**
 * 情况二：promise 不通过reject，直接 throw 抛出异常
 */
// const promise2 = new Promise((resolve, reject) => {
//     console.log(21);
//     setTimeout(function() {
//         throw new Error(4);
//     }, 500);
//     resolve(23);
//     console.log(22);
// })

// promise2
//     .then(function(result) {
//         console.log(result)
//     })
//     .catch(function(err) {
//         console.log('err2 info:', err); // 此处不会捕捉到异常信息，因为setTimeout执行时，try catch已经执行完毕
//     })

// setTimeout(() => {
//     console.log('promise2', promise2)
// }, 800)


/**
 * 情况三：通过外层的try catch捕获promise内直接 throw 抛出的异常
 */
function promiseFun() {
    return new Promise((resolve, reject) => {
        console.log(31);
        setTimeout(function() {
            throw new Error(4);
        }, 500);
        reject(33);
        console.log(32);
    }).then(function(result) {
        console.log(result)
    }).catch(function(err) {
        console.log('err3 info:', err); // 此处不会捕捉到异常信息，因为setTimeout执行时，try catch已经执行完毕
    })
}


async function test() {
    try {
        await promiseFun();
    } catch (e) {
        console.log('error', e);
    }
}

test();