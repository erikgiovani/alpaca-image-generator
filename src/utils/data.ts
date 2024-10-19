import type { ImagePieceOptions, ImagePieces } from "../types/Alpaca.types";

export const imagePieces: ImagePieceOptions = {
  hair: ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"],
  ears: ["default", "tilt-backward", "tilt-forward"],
  eyes: ["angry", "default", "naughty", "panda", "retro", "smart", "star"],
  mouth: ["astonished", "default", "eating", "laugh", "tongue"],
  neck: ["bend-backward", "bend-forward", "default", "thick"],
  leg: [
    "bubble-tea",
    "cookie",
    "default",
    "game-console",
    "tilt-backward",
    "tilt-forward",
  ],
  accesories: ["default", "earings", "flower", "glasses", "headphone"],
  background: [
    "blue50",
    "blue60",
    "blue70",
    "darkblue30",
    "darkblue50",
    "darkblue70",
    "green50",
    "green60",
    "green70",
    "grey40",
    "grey70",
    "grey80",
    "red50",
    "red60",
    "red70",
    "yellow50",
    "yellow60",
    "yellow70",
  ],
};

export const initialState: ImagePieces = {
  hair: "default",
  ears: "default",
  eyes: "default",
  mouth: "default",
  neck: "default",
  leg: "default",
  accesories: "default",
  background: "blue50",
};
