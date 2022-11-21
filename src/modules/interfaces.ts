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
    status1: HTMLCanvasElement,
    status2: HTMLCanvasElement,
    bullets: number
}
interface boardInterface {
    id: number,
    exit: exitInterface,
    sx: number,
    sy: number,
    przeszkadzajki?: przeszkadzajkaInterface[],
    lamp?: lampInterface
    item?: itemInterface
    lockedArea?: null
}
interface przeszkadzajkaInterface {
    readonly img: HTMLImageElement,
    isAlive: boolean,
    posx: number,
    posy: number,
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
export { usefulVariablesInterface, exitInterface }