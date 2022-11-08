import { usefulVariables } from "./usefulVariables";
import { board, game, player, posx, posy } from "../index";
export class Engine {
    readonly fps: number = 60;
    front: string = "right";
    pressedKey: string | null
    constructor() {
        this.move();
    }
    animate() {
        setTimeout(() => {
            game.load(posx, posy);
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
        window.setInterval(() => {
            if (this.pressedKey === "w") {
                console.log("góra");
                player.posy -= usefulVariables.speed;
            }
            if (this.pressedKey === "a") {
                console.log("lewo");
                if (this.front === "right") {
                    this.front = "left";
                }
                player.posx -= usefulVariables.speed;
            }
            if (this.pressedKey === "s") {
                console.log("dol");
                player.posy += usefulVariables.speed;
            }
            if (this.pressedKey === "d") {
                console.log("prawo");
                if (this.front === "left") {
                    this.front = "right";
                }
                player.posx += usefulVariables.speed;
            }
            if (this.pressedKey === " ") {
                console.log("strzał");
            }
            console.log(player.isColided(board.hitboxes));
        }, 1000 / this.fps);
    }
}