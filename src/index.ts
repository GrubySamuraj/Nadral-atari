import { Board } from "./modules/board";
import { Engine } from "./modules/engine";
import { Game } from "./modules/game";
import { Player } from "./modules/player";
import { usefulVariables } from "./modules/usefulVariables";
let game: Game;
let player: Player;
let engine: Engine;
let board: Board;
let posx: number = 10;
let posy: number = 128;
window.onload = () => {
    game = new Game();
    board = new Board(usefulVariables.boards[0].id, usefulVariables.boards[0].hitboxes, usefulVariables.boards[0].exit, usefulVariables.boards[0].sx, usefulVariables.boards[0].sy);
    board.load();
    player = new Player(250, 270);
    engine = new Engine();
    engine.animate();
    player.create();
}
export { game, player, posx, posy, engine, board };