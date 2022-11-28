import { game } from "../index";
import { exitInterface, npcInterface } from "./interfaces";
import { Item } from "./item";
import { Lamp } from "./lamp";
import { Npc } from "./npc";
import { usefulVariables } from "./usefulVariables";

export class Board {
    public id;
    public exit;
    public sx;
    public sy;
    public lamp: Lamp;
    public item: Item;
    public npcs: Npc[];
    constructor(id: number, exit: exitInterface, sx: number, sy: number, npcs: Npc[] | null, lamp?: Lamp, item?: Item,) {
        this.id = id;
        this.exit = exit;
        this.sx = sx;
        this.sy = sy;
        this.lamp = lamp;
        this.item = item;
        this.npcs = npcs;
    }
    load() {
        game.load(this.sx, this.sy);
        if (this.lamp)
            this.lamp.generate();
        if (this.item)
            this.item.generate();
        if (this.npcs) {
            this.npcs.map((npc) => {
                npc.generate();
            })
        }
    }
    // mucha - 100pkt
    // dildos - 0pkt
    // telewizor - 150pkt
    // prysznic - 175pkt
    // telefon - 300pkt
    // glutek - 0pkt
    // kibel - 250pkt
    // pompa - 400pkt
}