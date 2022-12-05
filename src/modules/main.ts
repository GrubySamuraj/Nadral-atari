
class Main {
    constructor() {

    }
    createGame() {
        document.getElementById("game").style.display = "flex";
        usefulVariables.infoScreen.style.display = "none";
        game = new Game();
        ui = new Ui();
        for (let x = 0; x < usefulVariables.boards.length; x++) {
            let npcs = [];
            if (usefulVariables.boards[x].npcs) {
                for (let y = 0; y < usefulVariables.boards[x].npcs.length; y++) {
                    let npc = new Npc(usefulVariables.boards[x].npcs[y].posx, usefulVariables.boards[x].npcs[y].posy, usefulVariables.npcNames[Math.floor(Math.random() * usefulVariables.npcNames.length)]);
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
    }