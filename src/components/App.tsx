import "./App.css";
import episodes from "../episodes.json";
import { EpisodeList } from "./EpisodeList";

function App() {
    return (
        <div className="App">
            <EpisodeList episodes={episodes} />
        </div>
    );
}

export default App;
