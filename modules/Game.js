import { printError, printText, printResult, printTable } from '../services/log.services.js'
import { ERROR_MESSAGES } from '../helpers/constants.js'

export class Game {
    // constructor(moves) {
    //     this.computerMove = this.getRandomArrayItem(moves);
    // }

    static getRandomArrayItem(array) {
        const RANDOM_INDEX = Math.floor(Math.random() * array.length);
        return array[RANDOM_INDEX];
    }

    static findReapeatingElements(array) {
        return new Set(array).size !== array.length;
    }

    static checkCLIParameters = (moves) => {
        const REPEAT_ELEMENTS = this.findReapeatingElements(moves);

        if (!moves.length) {
            printError(ERROR_MESSAGES.NOT_PARAMETERS);
            return false;
        } else {
            if (moves.length >= 3 && moves.length % 2 === 0) {
                printError(ERROR_MESSAGES.EVEN_PARAMETERS);
                return false;
            } else if (moves.length >= 3 && moves.length % 2 != 0) {
                if (REPEAT_ELEMENTS) {
                    printError(ERROR_MESSAGES.REPEATING_PARAMETERS);
                    return false;
                }
                return true;
            } else {
                printError(ERROR_MESSAGES.UNDER_PARAMETERS);
                return false;
            }
        }
    }

    static gameProgress = async (userAnswer, table, moveResult, computerMove, secretKey, menu) => {
        if (userAnswer === 'help') {
            printTable(table);
            // продолжение игры при выборе помощи
            const ANSWER = await menu.showMenu();
            this.gameProgress(ANSWER, table, moveResult, computerMove, secretKey, menu);
        } else if (userAnswer === 'exit') {
            printText(`You are out of the game`);
            return;
        } else {
            printText(`Your move: ${userAnswer}`);
            printText(`Computer move: ${computerMove}`);
            printResult(moveResult);
            printText(`HMAC key: ${secretKey}`);
        }
    }
}
