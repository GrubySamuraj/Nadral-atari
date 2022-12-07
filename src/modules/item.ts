import { game, player, ui } from "../index";
import { usefulVariables } from "./usefulVariables";
import { Endscreen } from "./endscreen";
let endScreen;
class Item {
    public id: number;
    public posx: number;
    public posy: number;
    public type: string;
    public used: boolean
    private readonly width = 60;
    private readonly height = 60;
    private types: string[] = ["energy", "life", "points"];
    private ended = false;
    constructor(id: number, posx: number, posy: number, type: string, used: boolean) {
        this.id = id;
        this.posx = posx;
        this.posy = posy;
        this.type = type;
        this.used = used;
    }
    generate() {
        if (!this.used) {
            switch (this.type) {
                case "energy":
                    let ctx = usefulVariables.canvas.getContext("2d");
                    let energy = document.getElementById("energy") as HTMLImageElement;
                    ctx.drawImage(energy, this.id * 61, 0, 61, 36, this.posx, this.posy, this.width, this.height);
                    break;
                case "mystery":
                    ctx = usefulVariables.canvas.getContext("2d");
                    let mystery = document.getElementById("suprise") as HTMLImageElement;
                    ctx.drawImage(mystery, this.id * 55, 0, 55, 36, this.posx, this.posy, this.width, this.height);
                    break;
                case "hpup":
                    ctx = usefulVariables.canvas.getContext("2d");
                    let hpup = document.getElementById("hpplus") as HTMLImageElement;
                    ctx.drawImage(hpup, this.id * 60, 0, 60, 36, this.posx, this.posy, this.width, this.height);
                    break;
                case "key":
                    ctx = usefulVariables.canvas.getContext("2d");
                    let key = document.getElementById("keyItem") as HTMLImageElement;
                    ctx.drawImage(key, 0, 0, 54, 36, this.posx, this.posy, this.width + 20, this.height - 10);
                    break;
                case "lock":
                    ctx = usefulVariables.canvas.getContext("2d");
                    let lock = document.getElementById("lock") as HTMLImageElement;
                    ctx.drawImage(lock, 0, 0, 54, 36, this.posx, this.posy, this.width + 20, this.height - 10);
                    break;
                case "end":
                    ctx = usefulVariables.canvas.getContext("2d");
                    let end = document.getElementById("end") as HTMLImageElement;
                    ctx.drawImage(end, 0, 0, 54, 36, this.posx, this.posy, this.width + 20, this.height - 10);
                    break;
            }
        }
    }
    useItem(usedItem: string) {
        switch (this.type) {
            case "energy":
                this.addEnergy();
                break;
            case "mystery":
                this.mystery();
                break;
            case "hpup":
                this.addLife();
                break;
            case "key":
                this.pickKey();
                break;
            case "lock":
                this.unlock();
                break;
            case "end":
                if (!this.ended) {
                    usefulVariables.endSound.play();
                    this.missionEnd();
                    this.ended = true;
                }
                break;
        }
        if (this.type != "lock" && this.type != "end")
            this.used = true;
    }
    addEnergy() {
        usefulVariables.fuelPicked.play();
        if (ui.hp < 50)
            ui.hp += 50;
        else
            ui.hp = 100
    }
    pickKey() {
        usefulVariables.keypicked.play();
        player.hasKey = true;
        ui.addKeyToInventory();
    }
    unlock() {
        if (player.hasKey) {
            usefulVariables.unlockSound.play();
            game.image = document.getElementById("SpriteUnlock") as HTMLImageElement;
            player.hasKey = false;
            usefulVariables.loadedBoard.exit.E = 11;
            ui.removeKey();
        }
    }
    addLife() {
        usefulVariables.hpUpSound.play();
        ui.lives++;
        ui.updateLife();
    }
    mystery() {
        let type = this.types[Math.floor(Math.random() * this.types.length)];
        if (type === "energy") {
            this.addEnergy();
        }
        else if (type === "life") {
            this.addLife();
        }
        else if (type === "points") {
            ui.addPoints(500);
        }
    }
    missionEnd() {
        endScreen = new Endscreen();
        endScreen.load();
    }
}
export { Item }