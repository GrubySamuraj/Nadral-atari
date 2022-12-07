import { engine, ui, player } from "../index";
import { usefulVariables } from "./usefulVariables";
import { Npc } from "./npc";
import { Board } from "./board";
import { Lamp } from "./lamp";
import { Item } from "./item";
class Start {
    constructor() {

    }
    PlayerOnePlay() {
        usefulVariables.pyr.pause();
        usefulVariables.pyr.currentTime = 0;
        usefulVariables.uiimg.src = "./src/gfx/screens/playerGo.png";
        if (usefulVariables.infoScreen.style.visibility === "hidden") {
            usefulVariables.infoScreen.style.visibility = "visible";
        }
        usefulVariables.player1play.play();
    }
    PlayerOnefinish() {
        usefulVariables.pyr.pause();
        usefulVariables.pyr.currentTime = 0;
        usefulVariables.uiimg.src = "./src/gfx/screens/playerFinish.png";
        if (usefulVariables.infoScreen.style.visibility === "hidden") {
            usefulVariables.infoScreen.style.visibility = "visible";
        }
        usefulVariables.player1finish.play();
    }
    loadGame() {
        document.getElementById("game").style.display = "flex";
        usefulVariables.infoScreen.style.visibility = "hidden";
        ui.init();
        usefulVariables.pyr.play();
        for (let x = 0; x < usefulVariables.boards.length; x++) {
            let npcs = [];
            if (usefulVariables.boards[x].npcs) {
                for (let y = 0; y < usefulVariables.boards[x].npcs.length; y++) {
                    let npc = new Npc(usefulVariables.boards[x].npcs[y].posx, usefulVariables.boards[x].npcs[y].posy, usefulVariables.npcNames[Math.floor(Math.random() * usefulVariables.npcNames.length)]);
                    // if (npcs.filter((npc1) => {
                    //     if (npc1.type === npc.type) {
                    //         return npc;
                    //     }
                    // }).length != 0) {
                    //     y--;
                    // }
                    // else
                    npcs.push(npc);
                }
            }
            let board
            if (usefulVariables.boards[x].lamp) {
                let lamp = new Lamp(usefulVariables.boards[x].lamp.id, usefulVariables.boards[x].lamp.posx, usefulVariables.boards[x].lamp.posy, usefulVariables.boards[x].lamp.isBroken);
                lamp.generate();
                board = new Board(usefulVariables.boards[x].id, usefulVariables.boards[x].exit, usefulVariables.boards[x].sx, usefulVariables.boards[x].sy, npcs, lamp);
                if (usefulVariables.boards[x].item) {
                    let item = new Item(usefulVariables.boards[x].item.id, usefulVariables.boards[x].item.posx, usefulVariables.boards[x].item.posy, usefulVariables.boards[x].item.type, usefulVariables.boards[x].item.used)
                    board.item = item;
                }
            }
            else
                board = new Board(usefulVariables.boards[x].id, usefulVariables.boards[x].exit, usefulVariables.boards[x].sx, usefulVariables.boards[x].sy, npcs);
            usefulVariables.map.push(board);
        }
        usefulVariables.loadedBoard = usefulVariables.map[usefulVariables.loadedID];
        let npcs = [];
        if (usefulVariables.boards[0].npcs) {
            for (let y = 0; y < usefulVariables.boards[0].npcs.length; y++) {
                let npc = new Npc(usefulVariables.boards[0].npcs[y].posx, usefulVariables.boards[0].npcs[y].posy, usefulVariables.npcNames[Math.floor(Math.random() * usefulVariables.npcNames.length)]);
                if (npcs.filter((npc1) => {
                    if (npc1.type === npc.type) {
                        return npc;
                    }
                }).length != 0) {
                    y--;
                }
                else
                    npcs.push(npc);
            }
        }
        usefulVariables.loadedBoard.npcs = npcs;
        usefulVariables.loadedBoard.load();
        engine.move();
        ui.getHighScore();
        engine.animate();
        player.create();
        ui.startHP();
    }
}
export { Start } 