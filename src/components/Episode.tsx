// For each episode, AT LEAST the following must be displayed:
// the episode's name
// the season number (see below)
// the episode number (see below)
// the episode's medium-sized image
// the episode's summary text (see below)

import { IEpisode } from "../utils/IEpisode";

function Episode(oneEpisode: IEpisode): JSX.Element {
    return (
        <div>
            <p>{oneEpisode.name}</p>
            <p>S03E</p>
            <img src={oneEpisode.image.medium} alt={oneEpisode.name} />
            {oneEpisode.summary}
        </div>
    );
}

export { Episode };
