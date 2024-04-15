// TODO: write your code here

const game = new Game();
game.start();

import defaultExport from "./game"
import {
    GameSavingData,
    readGameSaving as loadGame,
    writeGameSaving as saveGame
} from './game'