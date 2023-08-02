import dedent from "dedent";
import chalk from 'chalk';

export const ERROR_MESSAGES = {
    NOT_PARAMETERS: dedent`Parameters are not set.
    ==== ${chalk.underline('Please set the parameters. For example, node <file name> Rock Paper Scissors or Rock Paper Scissors Lizard Spock')} ====`,

    EVEN_PARAMETERS: dedent`Parameters are wrong.
    ==== ${chalk.underline('Please enter an odd number of parameters')} ====`,

    UNDER_PARAMETERS: dedent`Parameters are wrong.
    ==== ${chalk.underline('Please enter the number of parameters more or equal to 3')} ====`,
  
    REPEATING_PARAMETERS: dedent`Parameters are wrong.
    ==== ${chalk.underline('Parameter value must not be repeated')} ====`, 
}
