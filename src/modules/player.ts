import { engine } from "../index";
import { usefulVariables } from "./usefulVariables";
//zadanie 12.11 - interface u góry i na dole
export class Player {
    readonly width = 65;
    readonly height = 55;
    readonly playerimg = document.getElementById("player") as HTMLImageElement;
    readonly playerimgflipped = document.getElementById("playerflipped") as HTMLImageElement;
    public posx: number
    public posy: number
    public whiteList: string[] = ["#000000"];
    public flipped = true;
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
    isColided() {
        let c = usefulVariables.canvas.getContext('2d');
        let za = c.getImageData(this.posx + this.width, this.posy + this.height, 1, 1).data;
        let przed = c.getImageData(this.posx, this.posy, 1, 1).data;
        let hex = "#" + ("000000" + this.rgbToHex(za[0], za[1], za[2])).slice(-6);
        let hex2 = "#" + ("000000" + this.rgbToHex(przed[0], przed[1], przed[2])).slice(-6);
        console.log(hex, hex2);
        if (!this.whiteList.includes(hex) || !this.whiteList.includes(hex2)) {
            return true;
        }
        else {
            return false;
        }
    }

    rgbToHex(r: any, g: any, b: any) {
        return ((r << 16) | (g << 8) | b).toString(16);
    }
} 