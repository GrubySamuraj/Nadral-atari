import { game, player, ui } from "../index";
import { usefulVariables } from "./usefulVariables";

class Item {
    public id: number;
    public posx: number;
    public posy: number;
    public type: string;
    public used: boolean
    private readonly width = 60;
    private readonly height = 60;
    private types: string[] = ["energy", "life"];
    constructor(id: number, posx: number, posy: number, type: string, used: boolean) {
        this.id = id;
        this.posx = posx;
        this.posy = posy;
        this.type = type;
        this.used = used;
    }
    generate() {
        if (!this.used) {
            let ctx = usefulVariables.canvas.getContext("2d");
            switch (this.type) {
                case "energy":
                    let energy = document.getElementById("energy") as HTMLImageElement;
                    ctx.drawImage(energy, this.id * 61, 0, 61, 36, this.posx, this.posy, this.width, this.height);
                    break;
                case "mystery":
                    let mystery = document.getElementById("suprise") as HTMLImageElement;
                    ctx.drawImage(mystery, this.id * 55, 0, 55, 36, this.posx, this.posy, this.width, this.height);
                    break;
                case "hpup":
                    let hpup = document.getElementById("hpplus") as HTMLImageElement;
                    ctx.drawImage(hpup, this.id * 60, 0, 60, 36, this.posx, this.posy, this.width, this.height);
                    break;
                case "key":
                    let key = document.getElementById("keyItem") as HTMLImageElement;
                    ctx.drawImage(key, 0, 0, 54, 36, this.posx, this.posy, this.width + 20, this.height - 10);
                    break;
                case "lock":
                    let lock = document.getElementById("lock") as HTMLImageElement;
                    ctx.drawImage(lock, 0, 0, 54, 36, this.posx, this.posy, this.width + 20, this.height - 10);
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
            case "missionEnd":
                break;
        }
        if (this.type != "lock" && this.type != "missionEnd")
            this.used = true;
    }
    addEnergy() {
        if (ui.hp < 50)
            ui.hp += 50;
        else
            ui.hp = 100
    }
    pickKey() {
        player.hasKey = true;
        ui.addKeyToInventory();
    }
    unlock() {
        if (player.hasKey) {
            game.image = document.getElementById("SpriteUnlock") as HTMLImageElement;
            player.hasKey = false;
            usefulVariables.loadedBoard.exit.E = 11;
            ui.removeKey();
        }
    }
    addLife() {
        ui.lives++;
        ui.updateLife();
    }
    mystery() {
        let type = this.types[Math.floor(Math.random() * 2)];
        if (type === "energy") {
            this.addEnergy();
        }
        else if (type === "life") {
            this.addLife();
        }
    }
    missionEnd() {

    }
}
export { Item }