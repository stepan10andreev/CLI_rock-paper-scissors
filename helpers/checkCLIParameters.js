import { ERROR_MESSAGES } from './constants.js';
import { printError } from '../services/log.services.js';

export const checkCLIParameters = (parameters) => {
    if (!parameters.length) {
        printError(ERROR_MESSAGES.NOT_PARAMETERS);
        return false;
    } else {
        if (parameters.length >= 3 && parameters.length % 2 === 0) {
            printError(ERROR_MESSAGES.EVEN_PARAMETERS);
            return false;
        } else if (parameters.length >= 3 && parameters.length % 2 != 0) {
            return true;
        } else {
            printError(ERROR_MESSAGES.UNDER_PARAMETERS);
            return false;
        }
    }
}