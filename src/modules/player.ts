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
    public whiteList: string[] = ["#000000", "#901829", "#26060b", "#320924", "#8c1a65", "#081c51", "#123eb2", "#001936", "#008300", "#00489d", "#005d00", "#003900", "#627500", "#005274", "#5134ae", "#adadad", "#aeaeae"];
    public suprisesColor: string[] = ["#901829", "#26060b", "#320924", "#8c1a65", "#081c51", "#123eb2"];
    public hpColor: string[] = ["#001936", "#008300", "#00489d", "#005d00", "#003900", "#627500"];
    public energyColor: string[] = ["#005274", "#5134ae"];
    public key: string[] = ["#adadad"];
    public lock: string[] = ["#aeaeae"];
    public flipped = true;
    public collision = false;
    public hasKey = false;
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
        if (this.suprisesColor.includes(hex) || this.suprisesColor.includes(hex2)) {
            usefulVariables.loadedBoard.item.useItem("mystery");
        }
        if (this.energyColor.includes(hex) || this.energyColor.includes(hex2)) {
            usefulVariables.loadedBoard.item.useItem("energy");
        }
        if (this.hpColor.includes(hex) || this.hpColor.includes(hex2)) {
            usefulVariables.loadedBoard.item.useItem("hpup");
        }
        if (this.key.includes(hex) || this.key.includes(hex2)) {
            usefulVariables.loadedBoard.item.useItem("key");
        }
        if (this.lock.includes(hex) || this.lock.includes(hex2)) {
            usefulVariables.loadedBoard.item.useItem("lock");
        }
        if (!this.whiteList.includes(hex) || !this.whiteList.includes(hex2)) { // dodać jeszcze 4 punkty kolizji
            console.log(this.posx);
            console.log(this.posy);
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