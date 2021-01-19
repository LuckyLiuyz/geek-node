/**
 * @desc try catch只能抓到一个调用堆栈内，即一个事件循环里的错误
 * 因为 setTimeout 是一个宏任务（独立的事件循环），所以下列的 try{interview..}catch{} 并不能捕获到 setTimeout 内 throw new Error('fail') 的错误。
 * 但是注意：promise 内抛出的异常，可以被 promise.catch 捕捉，即使是在 setTimeout 中抛出的异常。
 */
try {
    interview(function(err, res) {
        if (err) {
            console.log('cry')
            return;
        }
        console.log('smile')
    })
} catch (e) {
    console.log('cry')
}

/**
 * @function 面试
 * @param {*} callback 
 */
function interview(callback) {
    setTimeout(() => {
        if (Math.random() > 0.9) {
            callback(null, 'success')
        } else {
            throw new Error('fail');
            // callback(new Error('fail'));
        }
    }, 500)
}