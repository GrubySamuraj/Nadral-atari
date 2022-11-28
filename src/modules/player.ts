import { engine } from "../index";
import { usefulVariables } from "./usefulVariables";
export class Player {
    readonly width = 65;
    readonly height = 55;
    readonly playerimg = document.getElementById("player") as HTMLImageElement;
    readonly playerimgflipped = document.getElementById("playerflipped") as HTMLImageElement;
    public posx: number
    public posy: number
    public whiteList: string[] = ["#000000", "#901829", "#26060b", "#320924", "#8c1a65", "#081c51", "#123eb2", "#001936", "#008300", "#00489d", "#005d00", "#003900", "#627500", "#005274", "#5134ae", "#adadad", "#aeaeae", "#5a4300", "#0000ff", "#00ffff", "#FFC0CB", "#310923", "#57ab3b"];
    public suprisesColor: string[] = ["#901829", "#26060b", "#320924", "#8c1a65", "#081c51", "#123eb2"];
    public hpColor: string[] = ["#001936", "#008300", "#00489d", "#005d00", "#003900", "#627500"];
    public energyColor: string[] = ["#005274", "#5134ae"];
    public endColor: string[] = ["#5a4300"];
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
            // let imageData = ctx.getImageData(this.posx, this.posy, this.width, this.height);
            // console.log(imageData);

            // let data = imageData.data;
            // for (var p = 0; p < data.length; p += 4) {
            //     data[p + 0] = 233;
            //     data[p + 1] = 233;
            //     data[p + 2] = 233;
            //     data[p + 3] = 255;
            // }
            // // ctx.putImageData(imageData, 0, 0);
        }
        else if (engine.front === "left") {
            let ctx = usefulVariables.canvas.getContext('2d');
            ctx.drawImage(this.playerimgflipped, this.posx, this.posy, this.width, this.height);
        }
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
        if (!this.whiteList.includes(hex) || !this.whiteList.includes(hex2) || !this.whiteList.includes(hex3) || !this.whiteList.includes(hex4)) {
            return true;
        }
        return false;
    }
    rgbToHex(r: any, g: any, b: any) {
        return ((r << 16) | (g << 8) | b).toString(16);
    }
} 