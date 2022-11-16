import { Board } from "./modules/board";
import { Engine } from "./modules/engine";
import { Game } from "./modules/game";
import { Player } from "./modules/player";
import { usefulVariables } from "./modules/usefulVariables";
import { Ui } from "./modules/ui";
import { Lamp } from "./modules/lamp";
let game: Game;
let player: Player;
let engine: Engine;
let ui: Ui;
window.onload = () => {
    game = new Game();
    ui = new Ui();
    for (let x = 0; x < usefulVariables.boards.length; x++) {
        if (usefulVariables.boards[x].lamp) {
            let lamp = new Lamp(usefulVariables.boards[x].lamp.id, usefulVariables.boards[x].lamp.posx, usefulVariables.boards[x].lamp.posy, usefulVariables.boards[x].lamp.isBroken);
            lamp.generate();
        }
        let board = new Board(usefulVariables.boards[x].id, usefulVariables.boards[x].exit, usefulVariables.boards[x].sx, usefulVariables.boards[x].sy, new Lamp(0, 452, 378, false));
        usefulVariables.map.push(board);
    }
    usefulVariables.loadedBoard = usefulVariables.map[0];
    usefulVariables.loadedBoard.load();
    player = new Player(usefulVariables.StartPosx, usefulVariables.StartPosy);
    engine = new Engine();
    engine.animate();
    player.create();
    ui.startHP();
}
export { game, player, engine, ui };