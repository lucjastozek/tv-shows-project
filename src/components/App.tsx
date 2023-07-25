import "./App.css";
// import episodes from "../episodes.json";
import { EpisodeList } from "./EpisodeList";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";
import { SearchBar } from "./SearchBar";
import { IEpisode } from "../utils/IEpisode";
import { isEpisodeValid } from "../utils/isEpisodeValid";
import { useState, useEffect } from "react";

function App() {
    const [inpVal, setInpVal] = useState("");
    const [episodes, setEpisodes] = useState<IEpisode[]>([]);
    const [displayedEpisodes, setDisplayedEpisodes] =
        useState<IEpisode[]>(episodes);

    useEffect(() => {
        async function fetchEpisodes() {
            const response = await fetch(
                "https://api.tvmaze.com/shows/82/episodes"
            );
            const jsonBody: IEpisode[] = await response.json();
            setEpisodes(jsonBody.filter(isEpisodeValid));
        }

        fetchEpisodes();
    }, []);

    useEffect(() => setDisplayedEpisodes(episodes), [episodes]);

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
