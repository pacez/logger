# logger

日志类

### 示例
```javascript
logger = new UploadLogger({
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
