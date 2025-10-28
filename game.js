import { rockpaper } from "./rockpaper.js";
import {word} from "./word.js"
import {number} from "./number.js"
import {dice} from "./dice.js"

const games = {
   rock: () => {
      rockpaper()

    },

  word: () => {
    word  ()
  },
  dice: () => {
    dice()
  },
  number: () => {
    number()
  }
};

const game = window.prompt("Ymar togloom togloh we");

games[game]();