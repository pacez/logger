
/**
 * 日志上传方法, 合并一定时长内的日志为数组
 * @config {
 *  duration: int, 非必填, 合并时长, 默认100ms
 *  upload: Fn, 非必填自定义上传方法
 * }
 * 
 * 示例: 
 * const logger = new Logger();
 * logger.send('xxxx');
 */

class Logger {

    constructor({
        duration=100,
        upload
    }) {
        this.duration = duration; 
        this.logQueue = [];
        this.timer = null;
        upload && (this.upload = upload)
    }

    send(string) {

        // 添加
        this.logQueue.push(string)
        
        if(!this.timer) {
            this.timer = setTimeout(() => {
                this.upload(this.logQueue); // 执行日志
                this.reset(); // 重置状态
            },this.duration)
        }
    }

    upload(logQueue) {
        // 执行上传
        console.log('excute default upload function, logQueue:', logQueue)
    }

    reset() {
        // 执行后重置内部状态
        this.logQueue = []; 
        this.timer = null;  
    }
}
