import { Board } from "./board"
import { usefulVariablesInterface } from "./interfaces";
import { Lamp } from "./lamp";
import { Npc } from "./npc";
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
            },
            npcs: [
                {
                    posx: 940,
                    posy: 260,
                    isAlive: true
                },
                {
                    posx: 900,
                    posy: 260,
                    isAlive: true
                },
                {
                    posx: 870,
                    posy: 260,
                    isAlive: true
                }
            ]
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
            },
            npcs: [
                {
                    posx: 700,
                    posy: 260,
                    isAlive: true
                },
                {
                    posx: 720,
                    posy: 260,
                    isAlive: true
                },
                {
                    posx: 680,
                    posy: 260,
                    isAlive: true
                }
            ]
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
            },
            npcs: [
                {
                    posx: 700,
                    posy: 120,
                    isAlive: true
                },
                {
                    posx: 720,
                    posy: 120,
                    isAlive: true
                },
                {
                    posx: 680,
                    posy: 120,
                    isAlive: true
                }
            ]
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
            },
            npcs: [
                {
                    posx: 800,
                    posy: 120,
                    isAlive: true
                },
                {
                    posx: 820,
                    posy: 120,
                    isAlive: true
                },
                {
                    posx: 780,
                    posy: 120,
                    isAlive: true
                }
            ]
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
            },
            npcs: [
                {
                    posx: 850,
                    posy: 200,
                    isAlive: true
                },
                {
                    posx: 870,
                    posy: 200,
                    isAlive: true
                },
                {
                    posx: 830,
                    posy: 200,
                    isAlive: true
                }
            ]
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
            },
            npcs: [
                {
                    posx: 1030,
                    posy: 420,
                    isAlive: true
                },
                {
                    posx: 1060,
                    posy: 420,
                    isAlive: true
                },
                {
                    posx: 1090,
                    posy: 420,
                    isAlive: true
                }
            ]
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
            },
            npcs: [
                {
                    posx: 1030,
                    posy: 420,
                    isAlive: true
                },
                {
                    posx: 1060,
                    posy: 420,
                    isAlive: true
                },
                {
                    posx: 1090,
                    posy: 420,
                    isAlive: true
                }
            ]
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
            },
            npcs: [
                {
                    posx: 160,
                    posy: 120,
                    isAlive: true
                },
                {
                    posx: 190,
                    posy: 120,
                    isAlive: true
                },
                {
                    posx: 220,
                    posy: 120,
                    isAlive: true
                }
            ]
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
            },
            npcs: [
                {
                    posx: 160,
                    posy: 300,
                    isAlive: true
                },
                {
                    posx: 190,
                    posy: 300,
                    isAlive: true
                },
                {
                    posx: 220,
                    posy: 300,
                    isAlive: true
                }
            ]
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
            },
            npcs: [
                {
                    posx: 860,
                    posy: 100,
                    isAlive: true
                },
                {
                    posx: 890,
                    posy: 100,
                    isAlive: true
                },
                {
                    posx: 920,
                    posy: 100,
                    isAlive: true
                }
            ]
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
            },
            npcs: [
                {
                    posx: 100,
                    posy: 100,
                    isAlive: true
                },
                {
                    posx: 130,
                    posy: 100,
                    isAlive: true
                },
                {
                    posx: 160,
                    posy: 100,
                    isAlive: true
                }
            ]
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
            },
            item: {
                id: 1,
                posx: 580,
                posy: 120,
                type: "end",
                used: false
            },
            npcs: [
                {
                    posx: 100,
                    posy: 100,
                    isAlive: true
                },
                {
                    posx: 130,
                    posy: 100,
                    isAlive: true
                },
                {
                    posx: 160,
                    posy: 100,
                    isAlive: true
                }
            ]
        }
    ],
    loadedBoard: new Board(0, { N: null, S: null, E: 1, W: null }, 10, 128, null, new Lamp(0, 452, 378, false)),
    StartPosx: 150,
    StartPosy: 270,
    loadedID: 0,
    map: [],
    npcNames: ["glutek", "joystick", "kibel", "monitor", "mucha", "pompa", "prysznic"],
    npcColors: [""],
    status1: document.getElementById("status1") as HTMLCanvasElement,
    status2: document.getElementById("status2") as HTMLCanvasElement,
    bullets: 0,
}