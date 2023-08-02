export class Table {
    constructor(moves) {
        this.table = this.createTable(moves);
    }

    createMoves(moves) {

        const copyMoves = moves;
        let movesArray = []

        let moveObject = {}

        for (let i = 0; i < copyMoves.length; i++) {
            const CIRCLE = (moves.length - 1) / 2;
            const lastItem = i === (copyMoves.length - 1)
            const penultimateItem = i === (copyMoves.length - 2)

            moveObject[copyMoves[i]] = 'draw';

            for (let j = CIRCLE; j > 0; j--) {
                if (lastItem) {
                    moveObject[copyMoves.at(j - 1)] = 'lose';
                } else if (penultimateItem) {
                    moveObject[copyMoves.at(i + j) ? copyMoves.at(i + j) : copyMoves.at(0 + (j - 2))] = 'lose';
                } else {
                    moveObject[copyMoves.at(i + j) ? copyMoves.at(i + j) : copyMoves.at(0)] = 'lose';
                }
                moveObject[copyMoves.at(i - j)] = 'win';
            }

            movesArray.push(moveObject)
            moveObject = {}
        }

        return movesArray;
    }

    createTable(moves) {
        let table = {}

        for (let i = 0; i < moves.length; i++) {
            table[moves[i]] = this.createMoves(moves)[i]
        }
        return table
    }
}
