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
import { IShow } from "../utils/IShow";

function App() {
    const [inpVal, setInpVal] = useState("");
    const [episodes, setEpisodes] = useState<IEpisode[]>([]);
    const [displayedEpisodes, setDisplayedEpisodes] =
        useState<IEpisode[]>(episodes);
    const [selectedShowID, setSelectedShowID] = useState<number>(496);
    useEffect(() => {
        async function fetchEpisodes() {
            const response = await fetch(
                `https://api.tvmaze.com/shows/${selectedShowID}/episodes`
            );
            const jsonBody: IEpisode[] = await response.json();
            setEpisodes(jsonBody.filter(isEpisodeValid));
        }

        fetchEpisodes();
    }, [selectedShowID]);

    useEffect(() => setDisplayedEpisodes(episodes), [episodes]);

    useEffect(() => console.log(selectedShowID), [selectedShowID]);
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
                    shows={shows as IShow[]}
                    selectedShowID={selectedShowID}
                    setSelectedShowID={setSelectedShowID}
                />
            </div>
            <EpisodeList episodes={displayedEpisodes} />
            <PageFooter />
        </div>
    );
}

export default App;
