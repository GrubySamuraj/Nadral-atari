import { Board } from "./board"
interface usefulVariablesInterface {
    readonly canvas: HTMLCanvasElement,
    readonly speed: number,
    boards: boardInterface[],
    loadedID: number,
    loadedBoard: Board,
    readonly StartPosx: number,
    readonly StartPosy: number,
    map: Board[],
}
interface boardInterface {
    id: number,
    exit: exitInterface,
    sx: number,
    sy: number,
    przeszkadzajki?: przeszkadzajkaInterface[],
    lamp?: lampInterface
    specialItem?: specialItemInterface
    key?: keyInterface,
    lockedArea?: null
}
interface przeszkadzajkaInterface {
    readonly img: HTMLImageElement,
    isAlive: boolean,
    posx: number,
    posy: number,
}
interface lampInterface {

}
interface specialItemInterface {

}
interface keyInterface {

}
interface exitInterface {
    N: number | null,
    S: number | null,
    E: number | null,
    W: number | null
}
//Created by Jakub Dragosz
export { usefulVariablesInterface, exitInterface }