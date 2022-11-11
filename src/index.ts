import { Board } from "./modules/board";
import { Engine } from "./modules/engine";
import { Game } from "./modules/game";
import { Player } from "./modules/player";
import { usefulVariables } from "./modules/usefulVariables";
let game: Game;
let player: Player;
let engine: Engine;
window.onload = () => {
    game = new Game();
    for (let x = 0; x < usefulVariables.boards.length; x++) {
        let board = new Board(usefulVariables.boards[x].id, usefulVariables.boards[x].exit, usefulVariables.boards[x].sx, usefulVariables.boards[x].sy);
        usefulVariables.map.push(board);
    }
    usefulVariables.loadedBoard = usefulVariables.map[0];
    usefulVariables.loadedBoard.load();
    player = new Player(250, 270);
    engine = new Engine();
    engine.animate();
    player.create();
}
export { game, player, engine };