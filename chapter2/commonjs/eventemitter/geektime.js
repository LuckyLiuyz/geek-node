/**
 * events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。
 */
const EventEmitter = require('events').EventEmitter;

class Geektime extends EventEmitter {
    constructor () {
        super();

        setInterval(() => {
            // 触发事件
            this.emit('newlesson', {
                price: Math.random() * 100
            })
        }, 3000)
    }
}

module.exports = new Geektime;