import { usefulVariablesInterface } from "./interfaces"
export let usefulVariables: usefulVariablesInterface = {
    canvas: document.getElementById("playfield") as HTMLCanvasElement,
    speed: 10,
    boards: [
        {
            id: 0,
            hitboxes:
                [
                    {
                        start: {
                            posx: 10,
                            posy: 272
                        },
                        end: {
                            posx: 330,
                            posy: 256
                        }
                    },
                    {
                        start: {
                            posx: 10,
                            posy: 256
                        },
                        end: {
                            posx: 26,
                            posy: 128
                        }
                    },
                    {
                        start: {
                            posx: 26,
                            posy: 176
                        },
                        end: {
                            posx: 330,
                            posy: 128
                        }
                    },
                    {
                        start: {
                            posx: 146,
                            posy: 256
                        },
                        end: {
                            posx: 330,
                            posy: 224
                        }
                    }
                ],
            exit: {
                N: false,
                S: false,
                E: true,
                W: false
            },
            sx: 10,
            sy: 128
        },
        {
            id: 1,
            hitboxes:
                [
                    {
                        start: {
                            posx: 10,
                            posy: 272
                        },
                        end: {
                            posx: 10,
                            posy: 272
                        }
                    }
                ],
            exit: {
                N: false,
                S: false,
                E: true,
                W: true
            },
            sx: 330,
            sy: 128
        }
    ]
}