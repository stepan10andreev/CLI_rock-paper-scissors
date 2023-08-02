import { Key } from './modules/Key.js'
import { Game } from './modules/Game.js'
import { printText } from './services/log.services.js'
import { Menu } from './modules/Menu.js'
import { Rules } from './modules/Rules.js'
import { Table } from './modules/Table.js'


const initCLI = async () => {
    const ARGUMENTS = process.argv.slice(2);
    
    const isChecked = Game.checkCLIParameters(ARGUMENTS);

    if (!isChecked) return;

    const SECRET_KEY = new Key().cryptoKey;

    const COMPUTER_MOVE = new Game(ARGUMENTS).computerMove;

    const HMAC_KEY = Key.generateHMAC(SECRET_KEY, COMPUTER_MOVE);

    printText(`HMAC: ${HMAC_KEY}`);

    const MENU = new Menu(ARGUMENTS);

    const ANSWER = await MENU.showMenu();

    const RESULT = new Rules(ARGUMENTS, ANSWER, COMPUTER_MOVE).getResult;

    const TABLE = new Table(ARGUMENTS).table;

    Game.gameProgress(ANSWER, TABLE, RESULT, COMPUTER_MOVE, SECRET_KEY)

    // if (ANSWER === 'help') {
    //     const TABLE = new Table(ARGUMENTS).table;
    //     console.log(TABLE);
    //     printTable(TABLE);
    //     // можно здесь также сразу продолжить -  предложить выбор хода
    // } else if (ANSWER === 'exit') {
    //     return;
    // } else {
    //     printText(`Your move: ${ANSWER}`);
    //     const result = new Rules(ARGUMENTS, ANSWER, COMPUTER_MOVE).getResult;
    //     printText(`Computer move: ${COMPUTER_MOVE}`);
    //     printResult(result);
    //     printText(`HMAC key: ${SECRET_KEY}`);
    // }
}

initCLI();