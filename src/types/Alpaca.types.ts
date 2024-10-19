type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export interface ImagePieceOptions {
  hair: string[];
  ears: string[];
  eyes: string[];
  mouth: string[];
  neck: string[];
  leg: string[];
  accesories: string[];
  background: string[];
}

export type ImagePieceSections = Prettify<keyof ImagePieceOptions>;

export interface ImagePieces {
  hair: string;
  ears: string;
  eyes: string;
  mouth: string;
  neck: string;
  leg: string;
  accesories: string;
  background: string;
}

export type ScreenShoot = string | null;
