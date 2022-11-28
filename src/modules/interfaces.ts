import { Board } from "./board";
interface usefulVariablesInterface {
    readonly canvas: HTMLCanvasElement,
    readonly speed: number,
    boards: boardInterface[],
    loadedID: number,
    loadedBoard: Board,
    readonly StartPosx: number,
    readonly StartPosy: number,
    map: Board[],
    npcNames: string[],
    npcColors: string[],
    status1: HTMLCanvasElement,
    status2: HTMLCanvasElement,
    bullets: number,
}
interface boardInterface {
    id: number,
    exit: exitInterface,
    sx: number,
    sy: number,
    npcs?: npcInterface[],
    lamp?: lampInterface
    item?: itemInterface
    lockedArea?: null
}
interface npcInterface {
    posx: number,
    posy: number,
    type?: string
    isAlive: boolean,
}
interface lampInterface {
    id: number,
    posx: number,
    posy: number,
    isBroken: boolean
}
interface itemInterface {
    id: number,
    posx: number,
    posy: number,
    type: string,
    used: boolean
}
interface exitInterface {
    N: number | null,
    S: number | null,
    E: number | null,
    W: number | null
}
//Created by Jakub Dragosz
export { usefulVariablesInterface, exitInterface, npcInterface }