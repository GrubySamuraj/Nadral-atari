import { usefulVariables } from "./usefulVariables";
import { player } from "../index";
import { ui, start } from "../index";
import { Bullet } from "./bullet";
import { Npc } from "./npc";
export class Engine {
    readonly fps: number = 60;
    public front: string = "right";
    private pressedKey: string | null;
    private interval: number;
    private interval2: number;
    private cooldown: boolean = false;
    public freeze = false;
    constructor() {
        
    }
    animate() {
        if (!this.freeze) {
            setTimeout(() => {
                usefulVariables.map[usefulVariables.loadedID].load();
                player.create();
                // document.addEventListener("click",)
                document.onkeydown = (e) => {
                    this.pressedKey = e.key.toLocaleLowerCase();
                }
                document.onkeyup = () => {
                    this.pressedKey = "";
                }
                requestAnimationFrame(this.animate.bind(this));
            }, 1000 / this.fps);
        }
    }
    move() {
        this.interval = window.setInterval(() => {
            if (!player.isColided()) {
                if (player.posx > usefulVariables.canvas.width && usefulVariables.loadedBoard.exit.E) {
                    this.nextBoard(usefulVariables.loadedBoard.exit.E, 0, player.posy);
                }
                else if (player.posx < 0 && usefulVariables.loadedBoard.exit.W + 1) {
                    this.nextBoard(usefulVariables.loadedBoard.exit.W, usefulVariables.canvas.width - player.width, player.posy);
                }
                else if (player.posy < 0 && usefulVariables.loadedBoard.exit.N) {
                    this.nextBoard(usefulVariables.loadedBoard.exit.N, player.posx, usefulVariables.canvas.height - player.height);
                }
                else if (player.posy > usefulVariables.canvas.height && usefulVariables.loadedBoard.exit.S) {
                    this.nextBoard(usefulVariables.loadedBoard.exit.S, player.posx, 0);
                }
                else {
                    if (this.pressedKey === "w") {
                        player.posy -= usefulVariables.speed;
                    }
                    if (this.pressedKey === "a") {
                        if (this.front === "right") {
                            this.front = "left";
                        }
                        player.posx -= usefulVariables.speed;
                    }
                    if (this.pressedKey === "s") {
                        player.posy += usefulVariables.speed;
                    }
                    if (this.pressedKey === "d") {
                        if (this.front === "left") {
                            this.front = "right";
                        }
                        player.posx += usefulVariables.speed;
                    }
                    if (this.pressedKey === " ") {
                        let bposx;
                        if (this.front === "right") {
                            bposx = player.posx + player.width
                        }
                        else {
                            bposx = player.posx - 23;
                        }
                        if (usefulVariables.bullets <= 4 && !this.cooldown) {
                            let pew = new Bullet(bposx, (player.posy + player.height / 2) + 6, this.front);
                            pew.pewPew(bposx, (player.posy + player.height / 2) + 6);
                            this.cooldown = true;
                            setTimeout(() => {
                                this.cooldown = false;
                            }, 500);
                        }
                    }
                }
            }
            else {
                this.lost();
            }
        }, 1000 / this.fps);
    }
    nextBoard(id: number, posx: number, posy: number) {
        usefulVariables.map[usefulVariables.loadedID].lamp.isBroken = false;
        usefulVariables.loadedID = id;
        usefulVariables.loadedBoard = usefulVariables.map[usefulVariables.loadedID];
        usefulVariables.loadedBoard.load();
        ui.updateNumberMap(ui.ctx2);
        player.posx = posx;
        player.posy = posy;
        let npcs = [];
        if (usefulVariables.boards[usefulVariables.loadedID].npcs) {
            for (let y = 0; y < usefulVariables.boards[usefulVariables.loadedID].npcs.length; y++) {
                let npc = new Npc(usefulVariables.boards[usefulVariables.loadedID].npcs[y].posx, usefulVariables.boards[usefulVariables.loadedID].npcs[y].posy, usefulVariables.npcNames[Math.floor(Math.random() * usefulVariables.npcNames.length)]);
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
    }
    lost() {
        usefulVariables.isAnimation = true;
        usefulVariables.playerDeath.play();
        player.isExploded = true;
        usefulVariables.playerDeath.onended = (() => {
            if (ui.lives > 0) {
                start.PlayerOnePlay();
                player.posx = usefulVariables.StartPosx;
                player.posy = usefulVariables.StartPosy;
                usefulVariables.player1play.onended = (() => {
                    usefulVariables.pyr.play();
                    ui.lives--;
                    usefulVariables.loadedBoard.load();
                    let npcs = [];
                    if (usefulVariables.boards[usefulVariables.loadedID].npcs) {
                        for (let y = 0; y < usefulVariables.boards[usefulVariables.loadedID].npcs.length; y++) {
                            let npc = new Npc(usefulVariables.boards[usefulVariables.loadedID].npcs[y].posx, usefulVariables.boards[usefulVariables.loadedID].npcs[y].posy, usefulVariables.npcNames[Math.floor(Math.random() * usefulVariables.npcNames.length)]);
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
                    usefulVariables.loadedBoard.lamp.isBroken = false;
                    ui.updateLife();
                    ui.startHP();
                    usefulVariables.infoScreen.style.visibility = "hidden";
                    usefulVariables.isAnimation = false;
                    player.isExploded = false;
                })
            }
            else {
                start.PlayerOnefinish();
                usefulVariables.player1finish.onended = (() => {
                    location.reload();
                });
            }
        })
    }
}