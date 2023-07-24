import { MyComponent } from "./MyComponent";
import "./App.css";
import { greet } from "../greet";
import episodes from "../episodes.json";

function App() {
    console.log(`Imported ${episodes.length} episode(s)`);
    console.log(`First episode's name is ${episodes[0].name}`);
    return (
        <div className="App">
            <MyComponent />

            {greet("World")}
        </div>
    );
}

export default App;
