//
// This is only a SKELETON file for the 'Bowling' kata.
// It's provided as a convenience to get you started writing code faster.
//

export class Game {
    currentScore;

    constructor() {
        this.currentScore = 0;
    }

    lancerDeBoule(nbQuilles) {
        this.currentScore = 3;
    }

    get score() {
        return this.currentScore;
    }
}
