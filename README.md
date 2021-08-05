# logger

仅用于demo，如需要生产环境使用，请自行转义。

日志类，功能要求：
1. 合并 【一定时长内】 单次日志上报为批量日志上报。
1. 上报方法可自定义。

### 示例
```javascript
const logger = new Logger({
    duration: 1000,
    upload:  (logQueue) => {
        console.log('logQueue:',logQueue)
    }
});

logger.send('1');
logger.send('2');
setTimeout(()=>{
    logger.send('3');
    logger.send('4');
},500);
// logQueue:[ '1', '2', '3', '4']


setTimeout(()=>{
    logger.send('5');
    logger.send('6');
},1000);
// logQueue:['5','6']
```
