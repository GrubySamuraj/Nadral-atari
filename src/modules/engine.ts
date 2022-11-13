import { usefulVariables } from "./usefulVariables";
import { player } from "../index";
import { ui } from "../index";
export class Engine {
    readonly fps: number = 60;
    public front: string = "right";
    private pressedKey: string | null;
    private interval: number;
    constructor() {
        this.move();
    }
    animate() {
        setTimeout(() => {
            usefulVariables.map[usefulVariables.loadedID].load();
            player.create();
            document.onkeydown = (e) => {
                this.pressedKey = e.key.toLocaleLowerCase();
            }
            document.onkeyup = (e) => {
                this.pressedKey = "";
            }
            requestAnimationFrame(this.animate.bind(this));
        }, 1000 / this.fps);
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
                        console.log("strzał");
                    }
                }
            }
            else {
                this.lost();
            }
        }, 1000 / this.fps);
    }
    nextBoard(id: number, posx: number, posy: number) {
        //wyłączenie kolizji na chwile!!!! lub safespoty zrobić - miejsca gdzie napewno nadral będzie bezpieczny
        usefulVariables.loadedID = id;
        usefulVariables.loadedBoard = usefulVariables.map[usefulVariables.loadedID];
        usefulVariables.loadedBoard.load();
        ui.updateNumberMap(ui.ctx2);
        player.posx = posx;
        player.posy = posy;
    }
    lost() {
        if (ui.lives > 0) {
            player.posx = usefulVariables.StartPosx;
            player.posy = usefulVariables.StartPosy;
            usefulVariables.loadedBoard.load();
            ui.lives--;
            ui.updateLife();
            ui.startHP();
        }
        else {
            alert("Przegrałeś! ;<");
            location.reload();
        }
    }
}