import { Board } from "./board"
import { usefulVariablesInterface } from "./interfaces";
import { Lamp } from "./lamp";
export let usefulVariables: usefulVariablesInterface = {
    canvas: document.getElementById("playfield") as HTMLCanvasElement,
    speed: 10,
    boards: [
        {
            id: 0,
            exit: {
                N: null,
                S: null,
                E: 1,
                W: null
            },
            sx: 10,
            sy: 128,
            lamp: {
                id: 0,
                posx: 452,
                posy: 378,
                isBroken: false
            }
        },
        {
            id: 1,
            exit: {
                N: null,
                S: null,
                E: 2,
                W: 0
            },
            sx: 330,
            sy: 128
        },
        {
            id: 2,
            exit: {
                N: null,
                S: null,
                E: 3,
                W: 1
            },
            sx: 650,
            sy: 128
        },
        {
            id: 3,
            exit: {
                N: null,
                S: 4,
                E: null,
                W: 2
            },
            sx: 970,
            sy: 128
        },
        {
            id: 4,
            exit: {
                N: 3,
                S: null,
                E: null,
                W: 5
            },
            sx: 970,
            sy: 272
        },
        {
            id: 5,
            exit: {
                N: null,
                S: 10,
                E: 4,
                W: 6
            },
            sx: 650,
            sy: 272
        },
        {
            id: 6,
            exit: {
                N: null,
                S: 9,
                E: 5,
                W: 7
            },
            sx: 330,
            sy: 272
        },
        {
            id: 7,
            exit: {
                N: null,
                S: 8,
                E: 6,
                W: null
            },
            sx: 10,
            sy: 272
        },
        {
            id: 8,
            exit: {
                N: 7,
                S: null,
                E: 9,
                W: null
            },
            sx: 10,
            sy: 416
        },
        {
            id: 9,
            exit: {
                N: 6,
                S: null,
                E: null,
                W: 8
            },
            sx: 330,
            sy: 416
        },
        {
            id: 10,
            exit: {
                N: 5,
                S: null,
                E: null, //ze zmianą na true po zdobyciu klucza
                W: null
            },
            sx: 650,
            sy: 416
        },
        {
            id: 11,
            exit: {
                N: null,
                S: null,
                E: null,
                W: 10
            },
            sx: 970,
            sy: 416
        }
    ],
    loadedBoard: new Board(0, { N: null, S: null, E: 1, W: null }, 10, 128, new Lamp(0, 452, 378, false)),
    StartPosx: 250,
    StartPosy: 270,
    loadedID: 0,
    map: [],
    status1: document.getElementById("status1") as HTMLCanvasElement,
    status2: document.getElementById("status2") as HTMLCanvasElement,
}