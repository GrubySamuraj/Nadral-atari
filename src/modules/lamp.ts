import { Board } from "./board";
import { usefulVariables } from "./usefulVariables";
import { ui } from "../index";

class Lamp {
    public id: number;
    public posx: number;
    public posy: number;
    public isBroken: boolean;
    public width = 25;
    public height = 95;
    constructor(id: number, posx: number, posy: number, isBroken: boolean) {
        this.id = id;
        this.posx = posx;
        this.posy = posy;
        this.isBroken = isBroken;
    }
    generate() {
        let ctx = usefulVariables.canvas.getContext("2d");
        let lamps = document.getElementById("lamps") as HTMLImageElement;
        let lamps2 = document.getElementById("lamps_off") as HTMLImageElement;
        if (!this.isBroken) {
            ctx.drawImage(lamps, this.id * 8, 0, 8, 21, this.posx, this.posy, this.width, this.height);
            if (document.getElementById("filter")) {
                document.getElementById("filter").remove();
            }
        }
        else {
            ctx.drawImage(lamps2, this.id * 8, 0, 8, 21, this.posx, this.posy, this.width, this.height);
            if (!document.getElementById("filter")) {
                let div = document.createElement("div");
                div.setAttribute("id", "filter");
                let body = document.getElementsByTagName("body")[0];
                body.appendChild(div);
            }
        }
    }
    turnOff() {
        this.isBroken = true;
        ui.addPoints(100);
    }
}
export { Lamp }