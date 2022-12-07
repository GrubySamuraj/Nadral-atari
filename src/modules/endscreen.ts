import { engine, player, ui } from "../index";
import { usefulVariables } from "./usefulVariables";

class Endscreen {
    private canvas2 = document.getElementById("endgameScreen") as HTMLCanvasElement;
    private textposx = 1280;
    private textposx2 = 1280;
    private keyadded = false;
    private bonusReturning = false;
    private notreturn = false;
    constructor() {

    }
    load() {
        let ctx = this.canvas2.getContext("2d");
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.canvas2.width, this.canvas2.height);
        engine.freeze = true;
        player.isImmortal = true;
        usefulVariables.endSound.onended = (() => {
            usefulVariables.pyr.pause();
            usefulVariables.endMusic.play();
            this.animation();
        })
    }
    animation() {
        setTimeout(() => {
            this.bonusEnter();
            requestAnimationFrame(this.animation.bind(this));
        }, 1000 / 60);
    }
    bonusEnter() {
        let ctx = this.canvas2.getContext("2d");
        let img = document.getElementById("bonus") as HTMLImageElement;
        ctx.drawImage(img, this.textposx, this.canvas2.height / 2, 1280, img.height);
        setTimeout(() => {
            if (this.textposx >= 10 && !this.bonusReturning && !this.notreturn) {
                this.textposx -= 5;
            }
            else if (this.textposx < 10) {
                this.BonusPoints();
            }
        }, 10);
    }
    BonusPoints() {
        setTimeout(() => {
            if (ui.hp >= 0) {
                ui.hp--;
                ui.addPoints(10);
            }
            else if (!this.keyadded) {
                ui.addKeyToInventory();
                ui.addPoints(50);
                this.keyadded = true;
            }
            else {
                this.bonusReturning = true;
                this.bonusLeave();
            }
        }, 10)
    }
    bonusLeave() {
        let ctx = this.canvas2.getContext("2d");
        let img = document.getElementById("bonus") as HTMLImageElement;
        ctx.drawImage(img, this.textposx, this.canvas2.height / 2, 1280, img.height);
        setTimeout(() => {
            if (this.textposx <= 1280 && this.bonusReturning && !this.notreturn) {
                this.textposx += 5;
                console.log(this.textposx);
                this.bonusLeave();
            }
            else if (this.textposx > 1280) {
                this.notreturn = true;
                this.nextMissionEnter();
            }
        }, 100);
    }
    nextMissionEnter() {
        let ctx2 = this.canvas2.getContext("2d");
        let img1 = document.getElementById("nextMission") as HTMLImageElement;
        ctx2.drawImage(img1, this.textposx2, this.canvas2.height / 2, 1000, img1.height);
        if (this.textposx2 >= 170) {
            setTimeout(() => {
                this.textposx2 -= 5;
                this.nextMissionEnter();
            }, 100);
        }
        else if (this.textposx2 < 170) {
            let img2 = document.getElementById("missionAlpha") as HTMLImageElement;
            setTimeout(() => {
                ctx2.drawImage(img2, 50, (this.canvas2.height / 2) + 200, 1100, img2.height);
                document.getElementById("info").style.display = "block";
            }, 100);
        }
    }
}
export { Endscreen };