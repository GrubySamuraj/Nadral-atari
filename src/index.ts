import { Board } from "./modules/board";
import { Engine } from "./modules/engine";
import { Game } from "./modules/game";
import { Player } from "./modules/player";
import { usefulVariables } from "./modules/usefulVariables";
import { Ui } from "./modules/ui";
import { Lamp } from "./modules/lamp";
import { Item } from "./modules/item";
let game: Game;
let player: Player;
let engine: Engine;
let ui: Ui;
window.onload = () => {
    game = new Game();
    ui = new Ui();
    for (let x = 0; x < usefulVariables.boards.length; x++) {
        let board
        if (usefulVariables.boards[x].lamp) {
            let lamp = new Lamp(usefulVariables.boards[x].lamp.id, usefulVariables.boards[x].lamp.posx, usefulVariables.boards[x].lamp.posy, usefulVariables.boards[x].lamp.isBroken);
            lamp.generate();
            board = new Board(usefulVariables.boards[x].id, usefulVariables.boards[x].exit, usefulVariables.boards[x].sx, usefulVariables.boards[x].sy, lamp);
            if (usefulVariables.boards[x].item) {
                let item = new Item(usefulVariables.boards[x].item.id, usefulVariables.boards[x].item.posx, usefulVariables.boards[x].item.posy, usefulVariables.boards[x].item.type, usefulVariables.boards[x].item.used)
                board.item = item;
            }
        }
        else
            board = new Board(usefulVariables.boards[x].id, usefulVariables.boards[x].exit, usefulVariables.boards[x].sx, usefulVariables.boards[x].sy);
        usefulVariables.map.push(board);
    }
    console.log(usefulVariables.map);
    usefulVariables.loadedBoard = usefulVariables.map[usefulVariables.loadedID];
    usefulVariables.loadedBoard.load();
    player = new Player(usefulVariables.StartPosx, usefulVariables.StartPosy);
    engine = new Engine();
    engine.animate();
    player.create();
    ui.startHP();
}
export { game, player, engine, ui };