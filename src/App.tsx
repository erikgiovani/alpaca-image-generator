import { useState } from "react";
import { FaArrowsRotate, FaDownload } from "react-icons/fa6";

import "./App.css";
import { Canvas } from "./components/Canvas";
import { handleDownload, handleRandomize } from "./utils/handlers";
import { initialState, imagePieces } from "./utils/data";
import type { ImagePieceSections, ScreenShoot } from "./types/Alpaca.types";

export const App = () => {
  const [section, setSection] = useState<ImagePieceSections>("hair");
  const [image, setImage] = useState(initialState);
  const [screenShot, setScreenShot] = useState<ScreenShoot>(null);

  return (
    <main className="container">
      <h1>Alpaca Generator</h1>
      <div className="app-container">
        <section className="avatar-container">
          <Canvas image={image} setScreenShot={setScreenShot} />

          <div>
            <button onClick={() => handleRandomize({ setImage, imagePieces })}>
              Random
              <FaArrowsRotate />
            </button>
            <button
              disabled={!screenShot}
              onClick={() => handleDownload(screenShot)}
            >
              Download
              <FaDownload />
            </button>
          </div>
        </section>

        <section className="buttons-container">
          <div className="section-container">
            <h2 className="header-text">Accessorize The Alpaca´s</h2>
            <div>
              {Object.keys(imagePieces).map((key) => (
                <button
                  onClick={() => setSection(key as ImagePieceSections)}
                  key={key}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          <div className="section-container">
            <h2 className="header-text">Style</h2>
            <div>
              {imagePieces[section].map((key) => (
                <button
                  onClick={() => setImage({ ...image, [section]: key })}
                  key={key}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
