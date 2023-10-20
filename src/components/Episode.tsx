import { IEpisode } from "../utils/IEpisode";
import { generateEpisodeCode } from "../utils/generateEpisodeCode";
import { removeTagsFromSummary } from "../utils/removeTagsFromSummary";
import { isEpisodeValid } from "../utils/isEpisodeValid";

interface EpisodeProps {
    oneEpisode: IEpisode;
}

function Episode({ oneEpisode }: EpisodeProps): JSX.Element {
    if (isEpisodeValid(oneEpisode)) {
        return (
            <div className="episode">
                <div className="episode-header">
                    {oneEpisode.name} -{" "}
                    {generateEpisodeCode(oneEpisode.season, oneEpisode.number)}
                </div>
                <div className="episode-content">
                    {oneEpisode.image && (
                        <img
                            src={oneEpisode.image.medium}
                            alt={oneEpisode.name}
                        />
                    )}
                    {oneEpisode.summary && (
                        <p>{removeTagsFromSummary(oneEpisode.summary)}</p>
                    )}
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}

export { Episode };
