import "./App.css";
import episodes from "../episodes.json";
import { EpisodeList } from "./EpisodeList";
import { PageHeader } from "./PageHeader";

function App() {
    return (
        <div className="App">
            <PageHeader />
            <EpisodeList episodes={episodes} />
        </div>
    );
}

export default App;
