import { usefulVariables } from "./usefulVariables";

export class Game {
    public readonly width: number = 320
    public readonly height: number = 144
    public readonly image = document.getElementById("sprite") as HTMLImageElement
    constructor() {

    }
    create() {
        
    }
    public load(sx: number, sy: number) {
        let ctx = usefulVariables.canvas.getContext('2d');
        ctx.drawImage(this.image, sx, sy, this.width, this.height, 0, 0, usefulVariables.canvas.width, usefulVariables.canvas.height);
    }
}