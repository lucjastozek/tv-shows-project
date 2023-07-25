// For each episode, AT LEAST the following must be displayed:
// the episode's name
// the season number (see below)
// the episode number (see below)
// the episode's medium-sized image
// the episode's summary text (see below)

import { IEpisode } from "../utils/IEpisode";
import { generateEpisodeCode } from "../utils/generateEpisodeCode";
import { removeTagsFromSummary } from "../utils/removeTagsFromSummary";

interface EpisodeProps {
    oneEpisode: IEpisode;
}

function Episode({ oneEpisode }: EpisodeProps): JSX.Element {
    return (
        <div className="episode">
            <div className="episode-header">
                {oneEpisode.name} -{" "}
                {generateEpisodeCode(oneEpisode.season, oneEpisode.number)}
            </div>
            <div className="episode-content">
                <img src={oneEpisode.image.medium} alt={oneEpisode.name} />
                <p>{removeTagsFromSummary(oneEpisode.summary)}</p>
            </div>
        </div>
    );
}

export { Episode };
