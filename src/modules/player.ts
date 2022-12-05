import { engine } from "../index";
import { usefulVariables } from "./usefulVariables";
export class Player {
    readonly width = 65;
    readonly height = 55;
    readonly playerimg = document.getElementById("player") as HTMLImageElement;
    readonly playerimgflipped = document.getElementById("playerflipped") as HTMLImageElement;
    public posx: number
    public posy: number
    public whiteList: string[] = ["#281a56", "#001017", "#78ad67", "#499031", "#366b25", "#000000", "#901829", "#26060b", "#320924", "#8c1a65", "#081c51", "#123eb2", "#001936", "#008300", "#00489d", "#005d00", "#003900", "#627500", "#005274", "#5134ae", "#adadad", "#aeaeae", "#5a4300", "#0000ff", "#00ffff", "#FFC0CB", "#310923", "#57ab3b"];
    public suprisesColor: string[] = ["#901829", "#26060b", "#320924", "#8c1a65", "#081c51", "#123eb2"];
    public hpColor: string[] = ["#001936", "#008300", "#00489d", "#005d00", "#003900", "#627500"];
    public energyColor: string[] = ["#005274", "#5134ae"];
    public endColor: string[] = ["#5a4300"];
    public key: string[] = ["#adadad"];
    public lock: string[] = ["#aeaeae"];
    private frame = 0;
    public flipped = true;
    public collision = false;
    public hasKey = false;
    constructor(posx: number, posy: number) {
        this.posx = posx;
        this.posy = posy;
    }
    create() {
        if (engine.front === "right") {
            this.playerimg.src = "./src/gfx/player.png";
        }
        else if (engine.front === "left") {
            this.playerimg.src = "./src/gfx/playerflipped.png";
        }
        this.animate();
    }
    isColided() {
        let ctx = usefulVariables.canvas.getContext('2d');
        let data = ctx.getImageData(this.posx, this.posy, 1, 1).data;
        let data2 = ctx.getImageData(this.posx + this.width, this.posy, 1, 1).data;
        let data3 = ctx.getImageData(this.posx, this.posy + this.height, 1, 1).data;
        let data4 = ctx.getImageData(this.posx + this.width, this.posy + this.height, 1, 1).data;
        let hex = "#" + ("000000" + this.rgbToHex(data[0], data[1], data[2])).slice(-6);
        let hex2 = "#" + ("000000" + this.rgbToHex(data2[0], data2[1], data2[2])).slice(-6);
        let hex3 = "#" + ("000000" + this.rgbToHex(data3[0], data3[1], data3[2])).slice(-6);
        let hex4 = "#" + ("000000" + this.rgbToHex(data4[0], data4[1], data4[2])).slice(-6);

        if (this.suprisesColor.includes(hex) || this.suprisesColor.includes(hex2) || this.suprisesColor.includes(hex3) || this.suprisesColor.includes(hex4)) {
            usefulVariables.loadedBoard.item.useItem("mystery");
        }
        if (this.energyColor.includes(hex) || this.energyColor.includes(hex2) || this.energyColor.includes(hex3) || this.energyColor.includes(hex4)) {
            usefulVariables.loadedBoard.item.useItem("energy");
        }
        if (this.hpColor.includes(hex) || this.hpColor.includes(hex2) || this.hpColor.includes(hex3) || this.hpColor.includes(hex4)) {
            usefulVariables.loadedBoard.item.useItem("hpup");
        }
        if (this.key.includes(hex) || this.key.includes(hex2) || this.key.includes(hex3) || this.key.includes(hex4)) {
            usefulVariables.loadedBoard.item.useItem("key");
        }
        if (this.lock.includes(hex) || this.lock.includes(hex2) || this.lock.includes(hex3) || this.lock.includes(hex4)) {
            usefulVariables.loadedBoard.item.useItem("key");
        }
        if (this.endColor.includes(hex) || this.endColor.includes(hex2) || this.endColor.includes(hex3) || this.endColor.includes(hex4)) {
            usefulVariables.loadedBoard.item.useItem("end");
        }
        if ((this.whiteList.includes(hex) && this.whiteList.includes(hex2) && this.whiteList.includes(hex3) && this.whiteList.includes(hex4)) || usefulVariables.isAnimation) {
            return false;
        }
        console.log(hex, hex2, hex3, hex4);
        return true;
    }
    rgbToHex(r: any, g: any, b: any) {
        return ((r << 16) | (g << 8) | b).toString(16);
    }
    animate() {
        let ctx = usefulVariables.canvas.getContext('2d');
        ctx.drawImage(this.playerimg, 17 * this.frame, 0, 16, 14, this.posx, this.posy, this.width, this.height);
        this.frame++;
        if (this.frame >= 4) {
            this.frame = 0;
        }
    }
} 