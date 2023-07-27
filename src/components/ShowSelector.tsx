import { IShow } from "../utils/IShow";
import { compareShowsAlphabetically } from "../utils/compareShowsAlphabetically";

interface ShowSelectorProps {
    shows: IShow[];
    selectedShowID: number;
    setSelectedShowID: React.Dispatch<React.SetStateAction<number>>;
}

function ShowSelector({
    shows,
    selectedShowID,
    setSelectedShowID,
}: ShowSelectorProps): JSX.Element {
    const orderedShows = shows.sort((a, b) =>
        compareShowsAlphabetically(a.name, b.name)
    );

    return (
        <>
            <select
                onChange={(e) => setSelectedShowID(parseInt(e.target.value))}
                defaultValue={selectedShowID}
            >
                {orderedShows.map((oneShow: IShow) => {
                    return (
                        <option value={oneShow.id} key={oneShow.id}>
                            {oneShow.name}
                        </option>
                    );
                })}
            </select>
        </>
    );
}

export { ShowSelector };
