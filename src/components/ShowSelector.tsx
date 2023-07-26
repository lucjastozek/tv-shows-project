import { IShow } from "../utils/IShow";
import { compareShowsAlphabetically } from "../utils/compareShowsAlphabetically";

interface ShowSelectorProps {
    shows: IShow[];
    selectedShow: string;
    setSelectedShow: React.Dispatch<React.SetStateAction<string>>;
}

function ShowSelector({
    shows,
    selectedShow,
    setSelectedShow,
}: ShowSelectorProps): JSX.Element {
    const orderedShows = shows.sort((a, b) =>
        compareShowsAlphabetically(a.name, b.name)
    );

    return (
        <>
            <select
                value={selectedShow}
                onChange={(e) => setSelectedShow(e.target.value)}
            >
                {orderedShows.map((oneShow: IShow) => (
                    <option value={oneShow.name} key={oneShow.id}>
                        {oneShow.name}
                    </option>
                ))}
            </select>
        </>
    );
}

export { ShowSelector };
