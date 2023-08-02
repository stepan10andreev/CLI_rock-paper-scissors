import chalk from 'chalk';
import dedent from "dedent";

export const printText = (text) => {
    console.log(chalk.cyan(text));
}

export const printResult = (result) => {
    if (result === 'win') {
        console.log(chalk.bgGreen.white.bold(' You win! '));
    } else if (result === 'lose') {
        console.log(chalk.bgRed.white.bold(' You lose( '));
    } else {
        console.log(chalk.bgYellow.white.bold(' Draw '));
    }
}

export const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}

export const printTable = (table) => {
    console.log(dedent`${chalk.bgGreen.white.bold(' Vertical header column ')} - ${chalk.green.bold.underline('your moves')}

    ${chalk.bgWhite.bold(' Horizontal header column ')} -  ${chalk.black.bold.underline('computer moves')}

    ${chalk.underline.bgBlack.cyan('The result is relative to you')}`
    )
    console.table(table)
}

