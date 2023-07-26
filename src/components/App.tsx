import "./App.css";
// import episodes from "../episodes.json";
import { EpisodeList } from "./EpisodeList";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";
import { SearchBar } from "./SearchBar";
import { IEpisode } from "../utils/IEpisode";
import { isEpisodeValid } from "../utils/isEpisodeValid";
import { useState, useEffect } from "react";
import shows from "../shows.json";
import { ShowSelector } from "./ShowSelector";
import { IShow } from "../utils/IShow";

function App() {
    const [inpVal, setInpVal] = useState("");
    const [episodes, setEpisodes] = useState<IEpisode[]>([]);
    const [displayedEpisodes, setDisplayedEpisodes] =
        useState<IEpisode[]>(episodes);
    const [selectedShow, setSelectedShow] = useState<string>("Adventure Time");
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
                <ShowSelector
                    shows={shows as IShow[]}
                    selectedShow={selectedShow}
                    setSelectedShow={setSelectedShow}
                />
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
