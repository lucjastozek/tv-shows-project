import { Episode } from "./Episode";
import { IEpisode } from "../utils/IEpisode";

interface EpisodeListProps {
    episodes: IEpisode[];
}

function EpisodeList({ episodes }: EpisodeListProps): JSX.Element {
    return (
        <>
            {episodes.map((oneEpisode) => (
                <Episode key={oneEpisode.id} oneEpisode={oneEpisode} />
            ))}
        </>
    );
}

export { EpisodeList };
