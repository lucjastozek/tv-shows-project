import { IEpisode } from "../utils/IEpisode";
import { filterEpisodes } from "../utils/filterEpisodes";
import { ShowSelector } from "./ShowSelector";
import { IShow } from "../utils/IShow";

interface SearchBarProps {
    inpVal: string;
    setInpVal: React.Dispatch<React.SetStateAction<string>>;
    displayedEpisodes: IEpisode[];
    setDisplayedEpisodes: React.Dispatch<React.SetStateAction<IEpisode[]>>;
    listOfAllEpisodes: IEpisode[];
    shows: IShow[];
    selectedShowID: number;
    setSelectedShowID: React.Dispatch<React.SetStateAction<number>>;
}

function SearchBar({
    inpVal,
    setInpVal,
    displayedEpisodes,
    setDisplayedEpisodes,
    listOfAllEpisodes,
    shows,
    selectedShowID,
    setSelectedShowID,
}: SearchBarProps): JSX.Element {
    return (
        <div className="top-bar">
            <ShowSelector
                shows={shows as IShow[]}
                selectedShowID={selectedShowID}
                setSelectedShowID={setSelectedShowID}
            />
            <input
                type="text"
                placeholder="Search for a episode here..."
                value={inpVal}
                onChange={(e) => {
                    setInpVal(e.target.value);
                    setDisplayedEpisodes(
                        filterEpisodes(inpVal, listOfAllEpisodes)
                    );
                }}
            ></input>
            <p className="white-font">
                Displaying {displayedEpisodes.length}/{listOfAllEpisodes.length}{" "}
                episodes
            </p>
        </div>
    );
}

export { SearchBar };
