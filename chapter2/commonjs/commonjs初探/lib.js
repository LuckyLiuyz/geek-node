console.log('this is module');

exports.geekbang = { 'hello': 'haha' }

exports.tencent = function() {
    console.log('good')
}

// exports对象实际上只是对module.exports的引用，所以改变了module.exports的指向后，exports.xxx的值在其他文件中就无法被调用了。
// module.exports = function() {
//     console.log('hello geekbang');
// }