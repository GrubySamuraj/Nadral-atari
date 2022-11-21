import { usefulVariables } from "./usefulVariables"
import { engine, player, ui } from "../index";

class Bullet {
    public readonly speed = 20;
    public readonly bulletColors = ["#0000ff", "#00ffff", "#FFC0CB"];
    public chosenColor: string;
    public posx: number;
    public posy: number;
    public direction: string;
    public interwal: number;
    private width = 20;
    private height = 5;
    private WhiteList: string[] = ["#007f7f", "#57ab3b", "#000000", "#901829", "#26060b", "#320924", "#8c1a65", "#081c51", "#123eb2", "#001936", "#008300", "#00489d", "#005d00", "#003900", "#627500", "#005274", "#5134ae", "#5a4300", "#adadad", "#aeaeae"];
    private LampColor: string[] = ["#ffffff"];
    constructor(posx: number, posy: number, direction: string) {
        this.posx = posx;
        this.posy = posy;
        this.direction = direction;
        this.spawn();
    }
    spawn() {
        let ctx = usefulVariables.canvas.getContext("2d");
        let color = this.bulletColors[Math.floor(Math.random() * 3)];
        this.chosenColor = color;
        ctx.fillRect(this.posx, this.posy, 20, 5);
        if (ui.hp > 0) {
            ui.hp -= 0.5;
        }
        usefulVariables.bullets++;
    }
    pewPew(posx: number, posy: number) {
        let ctx = usefulVariables.canvas.getContext("2d");
        ctx.fillStyle = this.chosenColor;
        if (this.direction === "right")
            posx += this.speed;
        else
            posx -= this.speed;
        ctx.fillRect(posx, posy, 20, 5);
        this.interwal = window.setTimeout(() => {
            if (posx > 0 && posx < 1280 && this.isColided()) {
                this.pewPew(posx, posy);
            }
            else {
                usefulVariables.bullets--;
            }
        }, 1000 / engine.fps);
    }
    isColided() {
        let ctx = usefulVariables.canvas.getContext('2d');
        let data = ctx.getImageData(this.posx - 5, this.posy, 1, 1).data;
        let data2 = ctx.getImageData(this.posx + this.width + 5, this.posy, 1, 1).data;
        let hex = "#" + ("000000" + this.rgbToHex(data[0], data[1], data[2])).slice(-6);
        let hex2 = "#" + ("000000" + this.rgbToHex(data2[0], data2[1], data2[2])).slice(-6);
        console.log(this.WhiteList.includes(hex), this.WhiteList.includes(hex2));
        console.log(hex, hex2);

        if (this.WhiteList.includes(hex) && this.WhiteList.includes(hex2)) {
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
export { Bullet }