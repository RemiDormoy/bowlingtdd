//
// This is only a SKELETON file for the 'Bowling' kata.
// It's provided as a convenience to get you started writing code faster.
//

export class Game {
    currentScore;
    premierLance = 0;
    secondLance = 0;

    constructor() {
        this.currentScore = 0;
    }

    lancerDeBoule(nbQuilles) {
        this.currentScore += nbQuilles;
        if (this.premierLance !== 0 && this.secondLance !== 0) {
            this.currentScore += nbQuilles;
        }
        if (this.premierLance !== 0 && this.secondLance === 0) this.secondLance = nbQuilles
        if (this.premierLance === 0) this.premierLance = nbQuilles;
    }

    get score() {
        return this.currentScore;
    }
}
