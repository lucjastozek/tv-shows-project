import { Episode } from "./Episode";
import { IEpisode } from "../utils/IEpisode";

interface EpisodeListProps {
    episodes: IEpisode[];
}

function EpisodeList({ episodes }: EpisodeListProps): JSX.Element {
    return (
        <div className="episode-list">
            {episodes.map((oneEpisode) => (
                <Episode key={oneEpisode.id} oneEpisode={oneEpisode} />
            ))}
        </div>
    );
}

export { EpisodeList };
