import chalk from 'chalk'
import Logger from "./Logger.js";

export const Logger = {
    info: new Logger(chalk.blackBright("i")).info
}