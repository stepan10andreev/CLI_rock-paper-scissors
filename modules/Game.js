import { printError, printText, printResult } from '../services/log.services.js'
import { ERROR_MESSAGES } from '../helpers/constants.js'

export class Game {
    constructor(moves) {
        this.computerMove = this.getRandomArrayItem(moves);
    }

    getRandomArrayItem(array) {
        const RANDOM_INDEX = Math.floor(Math.random() * array.length);
        return array[RANDOM_INDEX];
    }

    static checkCLIParameters = (moves) => {
        if (!moves.length) {
            printError(ERROR_MESSAGES.NOT_PARAMETERS);
            return false;
        } else {
            if (moves.length >= 3 && moves.length % 2 === 0) {
                printError(ERROR_MESSAGES.EVEN_PARAMETERS);
                return false;
            } else if (moves.length >= 3 && moves.length % 2 != 0) {
                return true;
            } else {
                printError(ERROR_MESSAGES.UNDER_PARAMETERS);
                return false;
            }
        }
    }

    static gameProgress = (userAnswer, table, moveResult, computerMove, secretKey) => {
        if (userAnswer === 'help') {
            console.log(table);
            printTable(table);
            // можно здесь также сразу продолжить -  предложить выбор хода
        } else if (userAnswer === 'exit') {
            return;
        } else {
            printText(`Your move: ${userAnswer}`);
            printText(`Computer move: ${computerMove}`);
            printResult(moveResult);
            printText(`HMAC key: ${secretKey}`);
        }
    }
}
