import "./App.css";
import episodes from "../episodes.json";
import { useState } from "react";
import { EpisodeList } from "./EpisodeList";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";
import { SearchBar } from "./SearchBar";
import { IEpisode } from "../utils/IEpisode";

function App() {
    const [inpVal, setInpVal] = useState("");
    const [displayedEpisodes, setDisplayedEpisodes] =
        useState<IEpisode[]>(episodes);

    return (
        <div className="App">
            <div className="dark-blue-bg">
                <PageHeader />
                <SearchBar
                    inpVal={inpVal}
                    setInpVal={setInpVal}
                    displayedEpisodes={displayedEpisodes}
                    setDisplayedEpisodes={setDisplayedEpisodes}
                    listOfAllEpisodes={episodes}
                />
            </div>
            <EpisodeList episodes={displayedEpisodes} />
            <PageFooter />
        </div>
    );
}

export default App;
