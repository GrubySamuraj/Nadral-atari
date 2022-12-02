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
    private WhiteList: string[] = ["#624400", "#0085a6", "#806066", "#007f7f", "#57ab3b", "#000000", "#901829", "#26060b", "#320924", "#8c1a65", "#081c51", "#123eb2", "#001936", "#008300", "#00489d", "#005d00", "#003900", "#627500", "#005274", "#5134ae", "#5a4300", "#adadad", "#aeaeae", "#0000ff", "#00ffff", "#FFC0CB", "#7f6065", "#00007f", "#000080", "#806065", "#008080"];
    private LampColor: string[] = ["#ffffff"];
    private npcColor: string[] = ["#ab5a8f", "#4e2941", "#006ec5", "#bd64d6", "#00799d", "#fa84d1", "#0093b8", "#8f6400", "#241900", "#00bcce", "#753e85", "#806066"];
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
        this.posx = posx;
        this.posy = posy;
        let ctx = usefulVariables.canvas.getContext("2d");
        ctx.fillStyle = this.chosenColor;
        if (this.direction === "right")
            this.posx += this.speed;
        else
            this.posx -= this.speed;
        ctx.fillRect(this.posx, this.posy, 20, 5);
        this.interwal = window.setTimeout(() => {
            if (this.posx > 0 && this.posx < 1280 && this.isColided()) {
                this.pewPew(this.posx, this.posy);
            }
            else {
                usefulVariables.bullets--;
            }
        }, 1 / 10);
    }
    isColided() {
        let ctx = usefulVariables.canvas.getContext('2d');
        let data = ctx.getImageData(this.posx - 5, this.posy, 1, 1).data;
        let data2 = ctx.getImageData(this.posx + this.width + 5, this.posy, 1, 1).data;
        let hex = "#" + ("000000" + this.rgbToHex(data[0], data[1], data[2])).slice(-6);
        let hex2 = "#" + ("000000" + this.rgbToHex(data2[0], data2[1], data2[2])).slice(-6);
        console.log(hex, hex2);
        if (this.LampColor.includes(hex) || this.LampColor.includes(hex2)) {
            usefulVariables.map[usefulVariables.loadedID].lamp.turnOff();
        }
        if (this.npcColor.includes(hex) || this.npcColor.includes(hex2)) {
            usefulVariables.map[usefulVariables.loadedID].npcs.map((npc) => {
                if (npc.color === hex || npc.color === hex2) {
                    npc.shooted(); //naprawić
                }
            });
            // alert("npc shooted");
        }
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