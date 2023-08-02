import dedent from "dedent";

export const ERROR_MESSAGES = {
    NOT_PARAMETERS: dedent`Parameters are not set.
    ==== Please set the parameters. For example, node <file name> Rock Paper Scissors or Rock Paper Scissors Lizard Spock ====
    `,

    EVEN_PARAMETERS: dedent`Parameters are wrong.
    ==== Please enter an odd number of parameters ====
    `,

    UNDER_PARAMETERS: dedent`Parameters are wrong.
    ==== Please enter the number of parameters more or equal to 3 ====
    `,

    REPEATING_PARAMETERS: dedent`Parameters are wrong.
    ==== Parameter value must not be repeated ====
    `
}
