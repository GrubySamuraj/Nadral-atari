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
    private swidth = 0;
    private sheight = 0;
    private frame = 0;
    public isIdiot = false;
    private whiteList = ["#676469", "#031702", "#000000", "#006ec5", "#bd64d6", "#00799d", "#fa84d1", "#0093b8", "#8f6400", "#241900", "#00bcce", "#753e85"];
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
                    this.swidth = 60;
                    this.sheight = 46;
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
                    this.swidth = 62;
                    this.sheight = 70;
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
                    this.swidth = 60;
                    this.sheight = 72;
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
                    this.color = "#676469";
                    if (!usefulVariables.loadedBoard.lamp.isBroken) {
                        this.normalNpc();
                    }
                    else {
                        this.idiotNpc();
                    }
                    break;
            }
            if (this.isAlive)
                this.animate(img);
        }
    }
    shooted() {
        this.isAlive = false;
        let img = document.getElementById("deadglutek") as HTMLImageElement;
        switch (this.type) {
            case "glutek":
                ui.addPoints(0);
                img = document.getElementById("deadglutek") as HTMLImageElement;
                break;
            case "joystick":
                ui.addPoints(0);
                img = document.getElementById("deadjoystick") as HTMLImageElement;
                break;
            case "kibel":
                ui.addPoints(250);
                img = document.getElementById("deadkibel") as HTMLImageElement;
                break;
            case "monitor":
                ui.addPoints(150);
                img = document.getElementById("deadmonitor") as HTMLImageElement;
                break;
            case "mucha":
                ui.addPoints(100);
                img = document.getElementById("deadmucha") as HTMLImageElement;
                break;
            case "pompa":
                ui.addPoints(400);
                img = document.getElementById("deadpompa") as HTMLImageElement;
                break;
            case "prysznic":
                ui.addPoints(175);
                img = document.getElementById("deadprysznic") as HTMLImageElement;
                break;
            case "telefon":
                ui.addPoints(300);
                break;
        }
        this.killAnimation(img, 4);
        let voices = [usefulVariables.npcDeath, usefulVariables.npcDeath1, usefulVariables.npcDeath2];
        voices[Math.floor(Math.random() * voices.length)].play();
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
        }, 1000);
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
    animate(img: HTMLImageElement) {
        let ctx = usefulVariables.canvas.getContext('2d');
        ctx.drawImage(img, (img.width / 6) * this.frame, 0, img.width / 6, img.height, this.posx, this.posy, this.width, this.height);
        setTimeout(() => {
            this.frame++;
            if (this.frame >= 6) {
                this.frame = 0;
            }
        }, 300);
    }
    killAnimation(img: HTMLImageElement, num: number) {
        console.log(img);
        let ctx = usefulVariables.canvas.getContext('2d');
        ctx.drawImage(img, (img.width / 4) * (4 - num), 0, img.width / 4, img.height, this.posx, this.posy, this.width, this.height);
        setTimeout(() => {
            if (num >= 0) {
                this.killAnimation(img, num - 1);
            }
        }, 1000 / 60);
    }
    CheckDistance(posx: number, posy: number) {
        return Math.sqrt(Math.pow((this.posx - player.posx + posx), 2) + Math.pow((this.posy - player.posy + posy), 2));
    }
    rgbToHex(r: any, g: any, b: any) {
        return ((r << 16) | (g << 8) | b).toString(16);
    }
}
export { Npc };