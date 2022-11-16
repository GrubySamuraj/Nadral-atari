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
                posx: 470,
                posy: 390,
                isBroken: false
            },
            item: {
                id: 0,
                posx: 120,
                posy: 410,
                type: "mystery",
                used: false
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
            sy: 128,
            lamp: {
                id: 1,
                posx: 570,
                posy: 390,
                isBroken: false
            },
            item: {
                id: 1,
                posx: 680,
                posy: 420,
                type: "mystery",
                used: false
            }
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
            sy: 128,
            lamp: {
                id: 2,
                posx: 510,
                posy: 350,
                isBroken: false
            }
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
            sy: 128,
            lamp: {
                id: 3,
                posx: 980,
                posy: 110,
                isBroken: false
            },
            item: {
                id: 0,
                posx: 1090,
                posy: 120,
                type: "energy",
                used: false
            }
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
            sy: 272,
            lamp: {
                id: 4,
                posx: 540,
                posy: 350,
                isBroken: false
            }
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
            sy: 272,
            lamp: {
                id: 5,
                posx: 870,
                posy: 130,
                isBroken: false
            },
            item: {
                id: 1,
                posx: 350,
                posy: 100,
                type: "energy",
                used: false
            }
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
            sy: 272,
            lamp: {
                id: 6,
                posx: 870,
                posy: 130,
                isBroken: false
            },
            item: {
                id: 0,
                posx: 350,
                posy: 100,
                type: "hpup",
                used: false
            }
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
            sy: 272,
            lamp: {
                id: 7,
                posx: 1160,
                posy: 80,
                isBroken: false
            },
            item: {
                id: 2,
                posx: 140,
                posy: 410,
                type: "mystery",
                used: false
            }
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
            sy: 416,
            lamp: {
                id: 8,
                posx: 930,
                posy: 330,
                isBroken: false
            },
            item: {
                id: 0,
                posx: 510,
                posy: 330,
                type: "key",
                used: false
            }
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
            sy: 416,
            lamp: {
                id: 9,
                posx: 560,
                posy: 330,
                isBroken: false
            },
            item: {
                id: 1,
                posx: 870,
                posy: 230,
                type: "hpup",
                used: false
            }
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
            sy: 416,
            lamp: {
                id: 10,
                posx: 100,
                posy: 380,
                isBroken: false
            },
            item: {
                id: 1,
                posx: 350,
                posy: 370,
                type: "lock",
                used: false
            }
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
            sy: 416,
            lamp: {
                id: 11,
                posx: 100,
                posy: 400,
                isBroken: false
            }
        }
    ],
    loadedBoard: new Board(0, { N: null, S: null, E: 1, W: null }, 10, 128, new Lamp(0, 452, 378, false)),
    StartPosx: 150,
    StartPosy: 270,
    loadedID: 10,
    map: [],
    status1: document.getElementById("status1") as HTMLCanvasElement,
    status2: document.getElementById("status2") as HTMLCanvasElement,
}