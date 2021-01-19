const glob = require('glob');


/**
 * @module 同步的形式遍历当前目录下的所有文件
 */
console.time('sync')
const result = glob.sync(__dirname + '/**/*')
console.timeEnd('sync')
console.log('遍历结束，遍历文件个数：', result.length)


console.log('-------------------------------------------------------------------------------------')


/**
 * @module 异步的形式遍历当前目录下的所有文件
 */
console.time('async')
const result2 = glob(__dirname + '/**/*', {
    nonull: true, //设置为true以后,如果没有找到匹配的文件,不返回空字符串,而是返回原始glob语句
    matchBase: true, //matchBase: 设置为true以后,在当前目录下所有的文件夹和子文件夹里寻找匹配的文件
}, function(err, result) {
    console.log('遍历结束，遍历文件个数：', result.length);
})
console.timeEnd('async');
// IO完成之前还可以做别的事
console.log('我将在异步遍历未结束之前打印出来！');





