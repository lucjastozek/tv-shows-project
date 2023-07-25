import { IEpisode } from "./IEpisode";

function isEpisodeValid(oneEpisode: IEpisode): boolean {
    return (
        oneEpisode.name !== null &&
        oneEpisode.number !== null &&
        oneEpisode.season !== null &&
        oneEpisode.image !== null &&
        oneEpisode.summary !== null
    );
}

export { isEpisodeValid };
