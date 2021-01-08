import process from 'process';

export default class Logger {
    constructor(str) {
        this.prefix = str
    }
    prefix(str) {
        this.prefix = str
    }
    info(str) {
        process.stdout.write(`${this.prefix} ${str}`)
    }
}