import { Board } from "./board";
import { usefulVariables } from "./usefulVariables";

class Lamp {
    public id: number;
    public posx: number;
    public posy: number;
    public isBroken: boolean;
    public width = 30;
    public height = 105;
    constructor(id: number, posx: number, posy: number, isBroken: boolean) {
        this.id = id;
        this.posx = posx;
        this.posy = posy;
        this.isBroken = isBroken;
    }
    generate() {
        let ctx = usefulVariables.canvas.getContext("2d");
        let lamps = document.getElementById("lamps") as HTMLImageElement;
        ctx.drawImage(lamps, this.id * 8, 0, 8, 21, this.posx, this.posy, this.width, this.height); 
    }
    turnOff() {

    }
}
export { Lamp }