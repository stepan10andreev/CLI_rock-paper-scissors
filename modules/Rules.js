export class Rules {
    constructor(moves, userMove, computerMove) {
        this.getResult = this.getResult(moves, userMove, computerMove)
    }

    getResult(moves, userMove, computerMove) {
        const CIRCLE = (moves.length - 1) / 2;

        const USER_INDEX_MOVE = moves.indexOf(userMove);
        const COMPUTER_INDEX_MOVE = moves.indexOf(computerMove);
        const DIFFERENCE = USER_INDEX_MOVE - COMPUTER_INDEX_MOVE;

        if (USER_INDEX_MOVE === COMPUTER_INDEX_MOVE) {
            return 'draw';
        } else if (USER_INDEX_MOVE > COMPUTER_INDEX_MOVE) {
            return DIFFERENCE > CIRCLE ? 'lose' : 'win';
        } else {
            return DIFFERENCE < -CIRCLE ? 'win' : 'lose';
        }
    }
}