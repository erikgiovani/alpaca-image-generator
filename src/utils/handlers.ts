import type { Dispatch, SetStateAction } from "react";
import type {
  ImagePieces,
  ImagePieceOptions,
  ScreenShoot,
} from "../types/Alpaca.types";

interface Params {
  imagePieces: ImagePieceOptions;
  setImage: Dispatch<SetStateAction<ImagePieces>>;
}

export const handleRandomize = ({ imagePieces, setImage }: Params) => {
  const randomImage = {
    hair: imagePieces.hair[Math.floor(Math.random() * imagePieces.hair.length)],
    ears: imagePieces.ears[Math.floor(Math.random() * imagePieces.ears.length)],
    eyes: imagePieces.eyes[Math.floor(Math.random() * imagePieces.eyes.length)],
    mouth:
      imagePieces.mouth[Math.floor(Math.random() * imagePieces.mouth.length)],
    neck: imagePieces.neck[Math.floor(Math.random() * imagePieces.neck.length)],
    leg: imagePieces.leg[Math.floor(Math.random() * imagePieces.leg.length)],
    accesories:
      imagePieces.accesories[
        Math.floor(Math.random() * imagePieces.accesories.length)
      ],
    background:
      imagePieces.background[
        Math.floor(Math.random() * imagePieces.background.length)
      ],
  };
  setImage(randomImage);
};

export const handleDownload = (screenShot: ScreenShoot) => {
  const link = document.createElement("a");
  if (screenShot) {
    link.download = "alpaca.png";
    link.href = screenShot;
    link.click();
  }
};
