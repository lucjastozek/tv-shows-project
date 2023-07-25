import "./App.css";
import { useState } from "react";
import episodes from "../episodes.json";
import { EpisodeList } from "./EpisodeList";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";
import { SearchBar } from "./SearchBar";

function App() {
    const [inpVal, setInpVal] = useState("");

    return (
        <div className="App">
            <PageHeader />
            <SearchBar inpVal={inpVal} setInpVal={setInpVal} />
            <EpisodeList episodes={episodes} />
            <PageFooter />
        </div>
    );
}

export default App;
