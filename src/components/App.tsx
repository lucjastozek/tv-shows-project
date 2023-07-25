import "./App.css";
import episodes from "../episodes.json";
import { EpisodeList } from "./EpisodeList";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";

function App() {
    return (
        <div className="App">
            <PageHeader />
            <EpisodeList episodes={episodes} />
            <PageFooter />
        </div>
    );
}

export default App;
