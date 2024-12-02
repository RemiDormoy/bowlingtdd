//
// This is only a SKELETON file for the 'Bowling' kata tests.
// It's provided as a convenience to get you started writing code faster.
//

import { Game } from './bowling';


describe('Game', () => {
  describe('le jeu est a 0 avant le premier lance', () => {
    let game = new Game;
    it('scores 0 points', () => {
      expect(game.score).toEqual(0);
    })
  })

  describe('le jeu est a 3 apres le premier lance', () => {
    let game = new Game;
    game.lancerDeBoule(3);
    it('scores 3 points', () => {
      expect(game.score).toEqual(3);
    })
  })

  describe('le jeu est a 7 apres un lancer à 3 et un autre à 4', () => {
    let game = new Game;
    game.lancerDeBoule(3);
    game.lancerDeBoule(4);
    it('scores 7 points', () => {
      expect(game.score).toEqual(7);
    })
  })
})

