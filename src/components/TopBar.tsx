import { IEpisode } from "../utils/IEpisode";
import { ShowSelector } from "./ShowSelector";
import { IShow } from "../utils/IShow";
import { SearchBar } from "./SearchBar";

interface TopBarProps {
    inpVal: string;
    setInpVal: React.Dispatch<React.SetStateAction<string>>;
    displayedEpisodes: IEpisode[];
    setDisplayedEpisodes: React.Dispatch<React.SetStateAction<IEpisode[]>>;
    listOfAllEpisodes: IEpisode[];
    shows: IShow[];
    selectedShowID: number;
    setSelectedShowID: React.Dispatch<React.SetStateAction<number>>;
}

function TopBar({
    inpVal,
    setInpVal,
    displayedEpisodes,
    setDisplayedEpisodes,
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
            <SearchBar
                inpVal={inpVal}
                setInpVal={setInpVal}
                setDisplayedEpisodes={setDisplayedEpisodes}
                listOfAllEpisodes={listOfAllEpisodes}
            />
            <p className="white-font">
                Displaying {displayedEpisodes.length}/{listOfAllEpisodes.length}{" "}
                episodes
            </p>
        </div>
    );
}

export { TopBar };
