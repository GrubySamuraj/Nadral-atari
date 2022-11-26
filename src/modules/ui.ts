import { engine } from "../index";
import { usefulVariables } from "./usefulVariables";

class Ui {
    public points = [0, 0, 0, 0, 0, 0];
    public high = [0, 0, 0, 0, 0, 0];
    public lives = 3;
    public ctx = usefulVariables.status1.getContext('2d');
    public ctx2 = usefulVariables.status2.getContext("2d");
    public hp = 100;
    public interwal: number;
    constructor() {
        this.init();
    }
    init() {
        this.ctx.drawImage(document.getElementById("no1") as HTMLImageElement, 0, 0, 162, 60);
        for (let x = 0; x < this.points.length; x++) {
            this.ctx.drawImage(document.getElementById("numbersUp") as HTMLImageElement,
                27 * this.points[x], //sx
                0, //sy
                27, //sWidth
                50, //sHeight
                x * 33, //dx
                75, //dy
                30, //dWidth
                100 //dHeight
            );
            //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        }
        //lives
        this.ctx.drawImage(document.getElementById("lives") as HTMLImageElement, 550, 0, 180, 60);
        //number of lives
        this.ctx.drawImage(document.getElementById("numbersUp") as HTMLImageElement, this.lives * 27, 0, 27, 50, 625, 75, 30, 100);
        //high
        this.ctx.drawImage(document.getElementById("high") as HTMLImageElement, 1115, 0, 150, 60);
        //number highscore
        for (let x = 0; x < this.high.length; x++) {
            this.ctx.drawImage(document.getElementById("numbersUp") as HTMLImageElement,
                27 * this.high[x], //sx
                0, //sy
                27, //sWidth
                50, //sHeight
                x * 33 + 1082, //dx
                75, //dy
                30, //dWidth
                100 //dHeight
            );
            //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        }
        this.ctx2.drawImage(document.getElementById("heathbar") as HTMLImageElement, 0, 20);
        this.ctx2.drawImage(document.getElementById("healthbarfull") as HTMLImageElement, 116, 26);
        this.updateNumberMap(this.ctx2);
    }//100s życia, 1 strzał zabiera 3s
    writePoints(score: number) {
        let ctx = usefulVariables.canvas.getContext("2d");
        this.points = this.convertPoints(score);
        console.log(this.points);
        let isHighScore = true;
        if (isHighScore) {
            for (let x = 0; x < this.high.length; x++) {
                ctx.drawImage(document.getElementById("numbersUp") as HTMLImageElement,
                    27 * this.high[x], //sx
                    0, //sy
                    27, //sWidth
                    50, //sHeight
                    x * 33 + 1082, //dx
                    75, //dy
                    30, //dWidth
                    100 //dHeight
                );
            }
        }
        this.ctx.clearRect(0, 75, 200, 100);
        for (let x = 0; x < this.points.length; x++) {
            this.ctx.drawImage(document.getElementById("numbersUp") as HTMLImageElement,
                27 * this.points[x], //sx
                0, //sy
                27, //sWidth
                50, //sHeight
                x * 33, //dx
                75, //dy
                30, //dWidth
                100 //dHeight
            );
            //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        }
    }
    convertPoints(score: number) {
        let p = parseInt(this.points.join(""));
        p += score;
        let wynik = p.toString().split("").map((item) => {
            return parseInt(item)
        })
        while (wynik.length < 6) {
            wynik.unshift(0);
        }
        return wynik;
    }
    updateNumberMap(ctx2: CanvasRenderingContext2D) {
        let loadedID = usefulVariables.loadedID.toString();
        if (loadedID.length == 1) {
            let loadedIDarr = loadedID.split("");
            loadedIDarr.unshift("0");
            loadedID = loadedIDarr.join("");
        }
        for (let x = 0; x < loadedID.length; x++) {
            ctx2.clearRect(54 * x, 64, 50, 50);
            ctx2.drawImage(document.getElementById("numbersDown") as HTMLImageElement, 54 * parseInt(loadedID[x]), 0, 54, 50, 54 * x, 64, 50, 50);
        }
    }
    updateLife() {
        this.ctx.clearRect(625, 75, 30, 100);
        this.ctx.drawImage(document.getElementById("numbersUp") as HTMLImageElement, this.lives * 27, 0, 27, 50, 625, 75, 30, 100);
    }
    startHP() {
        if (this.interwal) {
            window.clearInterval(this.interwal);
            this.hp = 100;
        }
        window.setInterval(() => {
            this.hp--;
        }, 1000)
        this.interwal = window.setInterval(() => {
            this.ctx2.drawImage(document.getElementById("heathbar") as HTMLImageElement, 0, 20);
            this.ctx2.drawImage(document.getElementById("healthbarfull") as HTMLImageElement, 0, 0, this.hp * 11, 60, 116, 26, this.hp * 11, 60);
            if (this.hp < 40) {
                //mryganie na pomaranczowo
            }
            if (this.hp <= 0) {
                engine.lost();
            }
        }, 1000 / 60);
    }
    addKeyToInventory() {
        this.ctx2.drawImage(document.getElementById("key") as HTMLImageElement, 130, 60, 200, 50);
    }
    removeKey() {
        this.ctx2.clearRect(130, 60, 200, 50);
    }
}
export { Ui };