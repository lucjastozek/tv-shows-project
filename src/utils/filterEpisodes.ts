import { IEpisode } from "./IEpisode";

function filterEpisodes(
    inputVal: string,
    listOfAllEpisodes: IEpisode[]
): IEpisode[] {
    return listOfAllEpisodes.filter((oneEpisode) => {
        const summary = oneEpisode.summary as string;
        return (
            oneEpisode.name.toLowerCase().includes(inputVal.toLowerCase()) ||
            summary.toLowerCase().includes(inputVal.toLowerCase())
        );
    });
}

export { filterEpisodes };
