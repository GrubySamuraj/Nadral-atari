import { game } from "../index";
import { exitInterface } from "./interfaces";
import { Item } from "./item";
import { Lamp } from "./lamp";

export class Board {
    public id;
    public exit;
    public sx;
    public sy;
    public lamp: Lamp;
    public item: Item;
    constructor(id: number, exit: exitInterface, sx: number, sy: number, lamp?: Lamp, item?: Item) {
        this.id = id;
        this.exit = exit;
        this.sx = sx;
        this.sy = sy;
        this.lamp = lamp;
        this.item = item;
    }
    load() {
        game.load(this.sx, this.sy);
        if (this.lamp)
            this.lamp.generate();
        if (this.item)
            this.item.generate();
    }
}