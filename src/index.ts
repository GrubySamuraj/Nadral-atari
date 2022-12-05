import { Engine } from "./modules/engine";
import { Game } from "./modules/game";
import { Player } from "./modules/player";
import { usefulVariables } from "./modules/usefulVariables";
import { Ui } from "./modules/ui";
import { Start } from "./modules/Start"
let game = new Game();
let player = new Player(usefulVariables.StartPosx, usefulVariables.StartPosy);
let engine = new Engine;
let ui = new Ui();
let start = new Start();
window.onload = () => {
    usefulVariables.music.volume = 0.15;
    let playerplay = document.getElementById("player1play") as HTMLAudioElement;
    document.onkeydown = (e) => {
        if (e.key === " ") {
            usefulVariables.music.pause();
            start.PlayerOnePlay();
            playerplay.onended = (() => {
                start.loadGame();
            })
        }
        else if (e.key === "Shift") {
            console.log("changeSkillLevel");
        }
    }
}
export { game, player, engine, ui, start };