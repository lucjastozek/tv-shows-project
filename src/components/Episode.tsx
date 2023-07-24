// For each episode, AT LEAST the following must be displayed:
// the episode's name
// the season number (see below)
// the episode number (see below)
// the episode's medium-sized image
// the episode's summary text (see below)

import { IEpisode } from "../utils/IEpisode";
import { generateEpisodeCode } from "../utils/generateEpisodeCode";

interface EpisodeProps {
    oneEpisode: IEpisode;
}

function Episode({ oneEpisode }: EpisodeProps): JSX.Element {
    return (
        <div>
            <p>{oneEpisode.name}</p>
            <p>{generateEpisodeCode(oneEpisode.season, oneEpisode.number)}</p>
            <img src={oneEpisode.image.medium} alt={oneEpisode.name} />
            <p>{oneEpisode.summary}</p>
        </div>
    );
}

export { Episode };
