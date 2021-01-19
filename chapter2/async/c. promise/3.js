/**
 * promise的链式调用
 */

interview(1)
    .then(() => {
        return interview(2);
    })
    .then(() => {
        return interview(3);
    })
    // .then(() => {
    //     if (Math.random() > 0.1) {
    //         const error = new Error('keyboard')
    //         error.round = 'keyboard'
    //         throw error
    //     }
    // })
    .catch((err) => {
        console.log('cry at ' + err.round); // 获取在第几轮面试被淘汰
    })

/**
 * @function 面试
 * @param {int} round  面试轮次
 */
function interview(round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                const error = new Error('failed');
                error.round = round;
                reject(error);
            } else {
                resolve('success');
            }
        }, 500)
    })
}