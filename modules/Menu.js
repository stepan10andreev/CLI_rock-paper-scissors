import select from '@inquirer/select';

export class Menu {
    constructor(moves) {
        this.menuStructure = this.createMenuStructure(moves);
    }

    createMenuStructure(moves) {
        let INITIAL = [
            { name: '0 - exit', value: 'exit' },
            { name: '? - help', value: 'help' },
        ]

        let result = [];

        for (const move of moves) {
            let moveObj = {}
            moveObj.name = `${moves.indexOf(move) + 1} - ${move}`
            moveObj.value = `${move}`
            result.push(moveObj)
        }

        return result.concat(INITIAL);
    }

    async showMenu() {
        const answer = await select({
            message: 'Select available moves:',
            choices: this.menuStructure
        })
        return answer;
    }
}

