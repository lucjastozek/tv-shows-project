interface SearchBarProps {
    inpVal: string;
    setInpVal: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ inpVal, setInpVal }: SearchBarProps): JSX.Element {
    return (
        <>
            <input
                type="text"
                placeholder="Search for a episode here..."
                value={inpVal}
                onChange={(e) => {
                    setInpVal(e.target.value);
                }}
            ></input>
        </>
    );
}

export { SearchBar };
