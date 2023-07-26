import { IShow } from "../utils/IShow";
import { compareShowsAlphabetically } from "../utils/compareShowsAlphabetically";

interface ShowSelectorProps {
    shows: IShow[];
    selectedShow: number;
    setSelectedShow: React.Dispatch<React.SetStateAction<number>>;
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
                onChange={(e) => setSelectedShow(parseInt(e.target.value))}
                defaultValue={selectedShow}
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
