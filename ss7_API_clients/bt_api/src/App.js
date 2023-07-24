import './App.css';
import {ListPost} from "./components/ListPost";
import React from "react";
import {Route, Routes} from "react-router";
import {CreatePost} from "./components/CreatePost";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<ListPost/>}/>
                <Route path={'/create'} element={<CreatePost/>}/>
            </Routes>

        </>
    );
}

export default App;
