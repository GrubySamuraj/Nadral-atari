import { usefulVariables } from "./usefulVariables";

export class Game {
    readonly width: number = 320
    readonly height: number = 144
    readonly image: HTMLImageElement = document.getElementById("sprite") as HTMLImageElement
    constructor() {

    }
    load(sx: number, sy: number) {
        let ctx = usefulVariables.canvas.getContext('2d');
        ctx.drawImage(this.image, sx, sy, this.width, this.height, 0, 0, 1280, 576);
        console.log(this.image);
    }
}