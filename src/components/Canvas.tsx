import { useRef, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

import type { ImagePieces } from "../types/Alpaca.types";
import { useWindowSize } from "../hooks/useWindowSize";
import { dinamicCanvas } from "../utils/functions";

interface Props {
  image: ImagePieces;
  setScreenShot: Dispatch<SetStateAction<string | null>>;
}

export const Canvas = ({ image, setScreenShot }: Props) => {
  const { width } = useWindowSize();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (ctx && canvas) {
      const canvasWidth = dinamicCanvas(width);
      const canvasHeight = dinamicCanvas(width);
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const imagenes = [
        `/backgrounds/${image.background}.png`,
        `/ears/${image.ears}.png`,
        `/neck/${image.neck}.png`,
        "/nose.png",
        `/hair/${image.hair}.png`,
        `/eyes/${image.eyes}.png`,
        `/mouth/${image.mouth}.png`,
        `/leg/${image.leg}.png`,
        `/accessories/${image.accesories}.png`,
      ];

      const loadAndDrawImage = async () => {
        const promises = imagenes.map(uploadImage); // Crear una lista de promesas
        const loadedImages = await Promise.all(promises); // Esperar a que todas las imágenes se carguen

        // Dibujar las imágenes una vez que todas se han cargado
        loadedImages.forEach((img) => {
          ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
        });

        // Capturar la imagen del canvas como base64
        const dataURL = canvas.toDataURL("image/png");
        setScreenShot(dataURL); // Guardar la imagen capturada
      };

      loadAndDrawImage();
    }
  }, [image, setScreenShot, width]);

  const uploadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });
  };

  return <canvas ref={canvasRef} />;
};
