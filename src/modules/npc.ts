import { usefulVariables } from "./usefulVariables";
import { player, ui } from "../index";
class Npc {
    public posx: number;
    public posy: number;
    public type: string;
    public color: string;
    public isAlive = true;
    public trygx = Math.PI / 4;
    public trygy = Math.PI / 4;
    public trygx2 = Math.PI / 4;
    public trygy2 = Math.PI / 4;
    private readonly width = 60;
    private readonly height = 60;
    public isIdiot = false;
    private whiteList = ["#031702", "#000000", "#006ec5", "#bd64d6", "#00799d", "#fa84d1", "#0093b8", "#8f6400", "#241900", "#00bcce", "#753e85"];
    public speed = 4;
    constructor(posx: number, posy: number, type: string) {
        this.posx = posx;
        this.posy = posy;
        this.type = type;
    }
    generate() {
        if (this.isAlive) {
            let ctx = usefulVariables.canvas.getContext("2d");
            let img = document.getElementById("glutek") as HTMLImageElement;
            switch (this.type) {
                case "glutek":
                    img = document.getElementById("glutek") as HTMLImageElement
                    this.color = "#006ec5";
                    if (!usefulVariables.loadedBoard.lamp.isBroken) {
                        this.normalNpc();
                    }
                    else {
                        this.idiotNpc();
                    }
                    break;
                case "joystick":
                    img = document.getElementById("joystick") as HTMLImageElement
                    this.color = "#bd64d6";
                    if (!usefulVariables.loadedBoard.lamp.isBroken) {
                        this.normalNpc();
                    }
                    else {
                        this.idiotNpc();
                    }
                    break;
                case "kibel":
                    img = document.getElementById("kibel") as HTMLImageElement
                    this.color = "#00799d";
                    if (!usefulVariables.loadedBoard.lamp.isBroken) {
                        this.normalNpc();
                    }
                    else {
                        this.idiotNpc();
                    }
                    break;
                case "monitor":
                    img = document.getElementById("monitor") as HTMLImageElement
                    this.color = "#fa84d1";
                    this.idiotNpc();
                    break;
                case "mucha":
                    img = document.getElementById("mucha") as HTMLImageElement
                    this.color = "#0093b8";
                    if (!usefulVariables.loadedBoard.lamp.isBroken) {
                        this.normalNpc();
                    }
                    else {
                        this.idiotNpc();
                    }
                    break;
                case "pompa":
                    img = document.getElementById("pompa") as HTMLImageElement
                    this.color = "#8f6400";
                    if (!usefulVariables.loadedBoard.lamp.isBroken) {
                        this.normalNpc();
                    }
                    else {
                        this.idiotNpc();
                    }
                    break;
                case "prysznic":
                    img = document.getElementById("prysznic") as HTMLImageElement
                    this.color = "#006ec5";
                    if (!usefulVariables.loadedBoard.lamp.isBroken) {
                        this.normalNpc();
                    }
                    else {
                        this.idiotNpc();
                    }
                    break;
            }
            ctx.drawImage(img as HTMLImageElement, this.posx, this.posy, this.width, this.height);
        }
    }
    shooted() {
        console.log(this.type);

        switch (this.type) {
            case "glutek":
                ui.addPoints(0);
                break;
            case "joystick":
                ui.addPoints(0);
                break;
            case "kibel":
                ui.addPoints(250);
                break;
            case "monitor":
                ui.addPoints(150);
                break;
            case "mucha":
                ui.addPoints(100);
                break;
            case "pompa":
                ui.addPoints(400);
                break;
            case "prysznic":
                ui.addPoints(175);
                break;
            case "telefon": // dodać telefon
                ui.addPoints(300);
                break;
        }
        this.isAlive = false;
    }
    idiotNpc() {
        window.setTimeout(() => {
            if (this.isColided(Math.sin(this.trygx) * this.speed, 0)) {
                this.trygx += Math.PI;
            }
            if (this.isColided(0, Math.cos(this.trygy) * this.speed)) {
                this.trygy += Math.PI;
            }
            if (this.posx + Math.sin(this.trygx) * this.speed + this.width >= usefulVariables.canvas.width) {
                this.trygx += Math.PI;
            }
            if (this.posx + Math.sin(this.trygx) * this.speed <= 0) {
                this.trygx -= Math.PI;
            }
            if (this.posy + Math.cos(this.trygy) * this.speed >= usefulVariables.canvas.height) {
                this.trygy += Math.PI;
            }
            if (this.posy + Math.cos(this.trygy) * this.speed <= 0) {
                this.trygy -= Math.PI;
            }
            this.posx += Math.sin(this.trygx) * this.speed;
            this.posy += Math.cos(this.trygy) * this.speed;
        }, 1000);
    }
    normalNpc() {
        window.setTimeout(() => {
            if (player) {
                if (this.CheckDistance(Math.sin(this.trygx2) * this.speed, Math.cos(this.trygy2) * this.speed) <= this.CheckDistance(0, 0)) {
                    this.trygx2 = this.trygx2;
                    this.trygy2 = this.trygy2;

                    // if (this.isColided(Math.sin(this.trygx2) * this.speed, Math.cos(this.trygy2) * this.speed)) {
                    //     this.trygx2 += Math.PI / 4;
                    //     this.trygx2 += Math.PI / 4
                    // }
                }
                else if (this.CheckDistance(Math.sin(this.trygx2 + (Math.PI / 2)) * this.speed, Math.cos(this.trygx2 + (Math.PI / 2)) * this.speed) <= this.CheckDistance(0, 0)) {
                    this.trygx2 = this.trygx2 + Math.PI / 2;
                    this.trygy2 = this.trygy2 + Math.PI / 2;
                }
                else if (this.CheckDistance(Math.sin(this.trygx2 + Math.PI) * this.speed, Math.cos(this.trygy2 + Math.PI) * this.speed) <= this.CheckDistance(0, 0)) {
                    this.trygx2 = this.trygx2 + Math.PI;
                    this.trygy2 = this.trygy2 + Math.PI;
                }
                else if (this.CheckDistance(Math.sin(this.trygx2 + (3 * Math.PI) / 2) * this.speed, Math.cos(this.trygy2 + (3 * Math.PI) / 2) * this.speed) <= this.CheckDistance(0, 0)) {
                    this.trygx2 = this.trygx2 + 3 * Math.PI / 2;
                    this.trygy2 = this.trygy2 + 3 * Math.PI / 2;
                }
                if (this.isColided(Math.sin(this.trygx2) * this.speed, Math.cos(this.trygy2) * this.speed)) {
                    this.trygx2 += Math.PI / 4;
                    this.trygx2 += Math.PI / 4
                }
                this.posx += Math.sin(this.trygx2) * this.speed;
                this.posy += Math.cos(this.trygy2) * this.speed;
            }
        }, 1000)
    }
    isColided(posx: number, posy: number) {
        let ctx = usefulVariables.canvas.getContext('2d');
        let data = ctx.getImageData(this.posx + posx, this.posy + posy, 1, 1).data;
        let data2 = ctx.getImageData(this.posx + posx + this.width, this.posy + posy, 1, 1).data;
        let data3 = ctx.getImageData(this.posx + posx, this.posy + posy + this.height, 1, 1).data;
        let data4 = ctx.getImageData(this.posx + posx + this.width, this.posy + posy + this.height, 1, 1).data;
        let hex = "#" + ("000000" + this.rgbToHex(data[0], data[1], data[2])).slice(-6);
        let hex2 = "#" + ("000000" + this.rgbToHex(data2[0], data2[1], data2[2])).slice(-6);
        let hex3 = "#" + ("000000" + this.rgbToHex(data3[0], data3[1], data3[2])).slice(-6);
        let hex4 = "#" + ("000000" + this.rgbToHex(data4[0], data4[1], data4[2])).slice(-6);
        if (!this.whiteList.includes(hex) || !this.whiteList.includes(hex2) || !this.whiteList.includes(hex3) || !this.whiteList.includes(hex4)) {
            return true;
        }
        return false;
    }
    CheckDistance(posx: number, posy: number) {
        return Math.sqrt(Math.pow((this.posx - player.posx + posx), 2) + Math.pow((this.posy - player.posy + posy), 2));
    }
    rgbToHex(r: any, g: any, b: any) {
        return ((r << 16) | (g << 8) | b).toString(16);
    }
}
export { Npc };