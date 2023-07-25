// Display how many episodes match the current search
import { IEpisode } from "./IEpisode";

function filterEpisodes(
    inputVal: string,
    listOfAllEpisodes: IEpisode[]
): IEpisode[] {
    return listOfAllEpisodes.filter(
        (oneEpisode) =>
            oneEpisode.name.toLowerCase().includes(inputVal.toLowerCase()) ||
            oneEpisode.summary.toLowerCase().includes(inputVal.toLowerCase())
    );
}

export { filterEpisodes };
