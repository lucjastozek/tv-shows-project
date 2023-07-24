import "./App.css";
import episodes from "../episodes.json";
import { Episode } from "./Episode";

function App() {
    return (
        <div className="App">
            <Episode oneEpisode={episodes[0]} />
        </div>
    );
}

export default App;
