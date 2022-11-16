import { game } from "../index";
import { exitInterface } from "./interfaces";
import { Lamp } from "./lamp";

export class Board {
    public id;
    public exit;
    public sx;
    public sy;
    public lamp: Lamp;
    constructor(id: number, exit: exitInterface, sx: number, sy: number, lamp: Lamp) {
        this.id = id;
        this.exit = exit;
        this.sx = sx;
        this.sy = sy;
        this.lamp = lamp;
    }
    load() {
        game.load(this.sx, this.sy);
        if (this.lamp)
            this.lamp.generate();
    }
}