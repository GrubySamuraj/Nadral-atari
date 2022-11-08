import { game } from "../index";
import { exitInterface, hitboxInterface } from "./interfaces";

export class Board {
    public id;
    public hitboxes;
    public exit;
    public sx;
    public sy;
    constructor(id: number, hitboxes: hitboxInterface[], exit: exitInterface, sx: number, sy: number) {
        this.id = id;
        this.hitboxes = hitboxes;
        this.exit = exit;
        this.sx = sx;
        this.sy = sy;
    }
    load() {
        game.load(this.sx, this.sy);
    }
}