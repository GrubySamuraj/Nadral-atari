import { game } from "../index";
import { exitInterface } from "./interfaces";

export class Board {
    public id;
    public exit;
    public sx;
    public sy;
    constructor(id: number, exit: exitInterface, sx: number, sy: number) {
        this.id = id;
        this.exit = exit;
        this.sx = sx;
        this.sy = sy;
    }
    load() {
        game.load(this.sx, this.sy);
    }
}