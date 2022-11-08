interface usefulVariablesInterface {
    canvas: HTMLCanvasElement,
    speed: number,
    boards: boardInterface[]
}
interface boardInterface {
    id: number,
    hitboxes: hitboxInterface[],
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
    img: HTMLImageElement,
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
    N: boolean,
    S: boolean,
    E: boolean,
    W: boolean
}
interface hitboxInterface {
    start: {
        posx: number,
        posy: number
    },
    end: {
        posx: number,
        posy: number
    }
}
//Created by Jakub Dragosz
export { usefulVariablesInterface, exitInterface, hitboxInterface }