import Navbar from "./Components/Navbar/Navbar";
import Library from "./Components/Library/Library";
import Player from "./Components/Player/Player";

function App() {
  return (
    <> 

      <Library/>

      <main>
          <Navbar/>
          <Player/>
      </main>

    </>
  );
}

export default App;
