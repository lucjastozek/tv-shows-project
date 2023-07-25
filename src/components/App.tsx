import "./App.css";
// import episodes from "../episodes.json";
import episodes from "../episodesSimpsons.json";
import { useState } from "react";
import { EpisodeList } from "./EpisodeList";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";
import { SearchBar } from "./SearchBar";
import { IEpisode } from "../utils/IEpisode";
import { isEpisodeValid } from "../utils/isEpisodeValid";

function App() {
    const cleanEpisodes = episodes.filter(isEpisodeValid);
    const [inpVal, setInpVal] = useState("");
    const [displayedEpisodes, setDisplayedEpisodes] =
        useState<IEpisode[]>(cleanEpisodes);

    return (
        <div className="App">
            <div className="dark-blue-bg">
                <PageHeader />
                <SearchBar
                    inpVal={inpVal}
                    setInpVal={setInpVal}
                    displayedEpisodes={displayedEpisodes}
                    setDisplayedEpisodes={setDisplayedEpisodes}
                    listOfAllEpisodes={cleanEpisodes}
                />
            </div>
            <EpisodeList episodes={displayedEpisodes} />
            <PageFooter />
        </div>
    );
}

export default App;
