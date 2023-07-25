import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {ListPost} from "./components/ListPost";
import {CreatePost} from "./components/CreatePost";

function App() {
    return (
        <>
            <Routes>
                <Route path={`/`} element={<ListPost/>}/>
                <Route path={`/create`} element={<CreatePost/>}/>
            </Routes>
        </>
    );
}

export default App;
