import './App.css';
import React, {useState} from "react";
import DataList from "./DataList.js";
import axios from "axios";

function App() {
    const [data, setData] = useState([])

    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
        setData(res.data.results)
    })

    return (
        <div className="App">
            <header className="App-header">
                <DataList data={data} />
            </header>
        </div>
    );
}

export default App;