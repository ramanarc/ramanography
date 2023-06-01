import pho from "./assets/pho.jpg";
import aesthetic from "./assets/aesthetic.jpg";
import ambience from "./assets/ambience.jpg";
import fort from "./assets/fort.jpg";
import gardens from "./assets/gardens.jpg";
import pool from "./assets/pool.jpg";
import { useState } from "react";

const images = [pho, aesthetic, ambience, fort, gardens, pool];

function App() {

  const [currentImage, setCurrentImage] = useState(0)

  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => currentImage < length ? currentImage + 1 : 0)
  }

  return (
    <>
      <section>
        <header>
          <h1>Ramanography</h1>
          <h2>Photos captured on my iPhone 13</h2>
        </header>
        <figure>
          <img src={images[currentImage]} onClick={handleClick} alt="an image" />
        </figure>
      </section>
    </>
  )
}

export default App
