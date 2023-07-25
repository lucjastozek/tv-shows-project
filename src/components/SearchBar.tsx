import { IEpisode } from "../utils/IEpisode";
import { filterEpisodes } from "../utils/filterEpisodes";

interface SearchBarProps {
    inpVal: string;
    setInpVal: React.Dispatch<React.SetStateAction<string>>;
    displayedEpisodes: IEpisode[];
    setDisplayedEpisodes: React.Dispatch<React.SetStateAction<IEpisode[]>>;
    listOfAllEpisodes: IEpisode[];
}

function SearchBar({
    inpVal,
    setInpVal,
    setDisplayedEpisodes,
    listOfAllEpisodes,
}: SearchBarProps): JSX.Element {
    return (
        <>
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
        </>
    );
}

export { SearchBar };
