import { IEpisode } from "../utils/IEpisode";

interface EpisodeCounterProps {
    displayedEpisodes: IEpisode[];
    listOfAllEpisodes: IEpisode[];
}

function EpisodeCounter({
    displayedEpisodes,
    listOfAllEpisodes,
}: EpisodeCounterProps): JSX.Element {
    return (
        <div>
            <p className="white-font">
                Displaying {displayedEpisodes.length}/{listOfAllEpisodes.length}{" "}
                episodes
            </p>
        </div>
    );
}

export { EpisodeCounter };
