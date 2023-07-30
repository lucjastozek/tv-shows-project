import { IEpisode } from "../utils/IEpisode";
import { ShowSelector } from "./ShowSelector";
import { IShow } from "../utils/IShow";
import { SearchBar } from "./SearchBar";
import { EpisodeCounter } from "./EpisodeCounter";

interface TopBarProps {
    inpVal: string;
    setInpVal: React.Dispatch<React.SetStateAction<string>>;
    displayedEpisodes: IEpisode[];
    listOfAllEpisodes: IEpisode[];
    shows: IShow[];
    selectedShowID: number;
    setSelectedShowID: React.Dispatch<React.SetStateAction<number>>;
}

function TopBar({
    inpVal,
    setInpVal,
    displayedEpisodes,
    listOfAllEpisodes,
    shows,
    selectedShowID,
    setSelectedShowID,
}: TopBarProps): JSX.Element {
    return (
        <div className="top-bar">
            <ShowSelector
                shows={shows as IShow[]}
                selectedShowID={selectedShowID}
                setSelectedShowID={setSelectedShowID}
            />
            <SearchBar inpVal={inpVal} setInpVal={setInpVal} />
            <EpisodeCounter
                displayedEpisodes={displayedEpisodes}
                listOfAllEpisodes={listOfAllEpisodes}
            />
        </div>
    );
}

export { TopBar };
