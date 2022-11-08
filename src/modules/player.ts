import { engine, board, player, posx } from "../index";
import { hitboxInterface } from "./interfaces";
import { usefulVariables } from "./usefulVariables";
export class Player {
    readonly width = 65;
    readonly height = 55;
    readonly playerimg = document.getElementById("player") as HTMLImageElement;
    readonly playerimgflipped = document.getElementById("playerflipped") as HTMLImageElement;
    public posx: number
    public posy: number
    flipped = true;
    constructor(posx: number, posy: number) {
        this.posx = posx;
        this.posy = posy;
    }
    create() {
        if (engine.front === "right") {
            let ctx = usefulVariables.canvas.getContext('2d');
            ctx.drawImage(this.playerimg, this.posx, this.posy, this.width, this.height);
        }
        else if (engine.front === "left") {
            let ctx = usefulVariables.canvas.getContext('2d');
            ctx.drawImage(this.playerimgflipped, this.posx, this.posy, this.width, this.height);
        }
    }
    isColided(hitboxes: hitboxInterface[]) {
        console.log(this.posx + this.width);

        return hitboxes.filter((hitbox) => {
            this.posx + this.width >= hitbox.start.posx

            //&&
            // this.posx <= hitbox.end.posx &&
            // this.posy + this.height >= hitbox.start.posy &&
            // this.posy <= hitbox.end.posy
        });

    }
} 