import pho from "./assets/pho.jpg";
import aesthetic from "./assets/aesthetic.jpg";
import ambience from "./assets/ambience.jpg";
import fort from "./assets/fort.jpg";
import gardens from "./assets/gardens.jpg";
import pool from "./assets/pool.jpg";

const images = [pho, aesthetic, ambience, fort, gardens, pool];

function App() {
  return (
    <>
      <section>
        <header>
          <h1>Ramanography</h1>
          <h2>Photos captured on my iPhone 13</h2>
        </header>
        <figure>
          <img src={images[2]} alt="" />
        </figure>
      </section>
    </>
  )
}

export default App
