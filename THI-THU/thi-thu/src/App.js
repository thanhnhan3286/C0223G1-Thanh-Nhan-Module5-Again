import './App.css';
import {Route, Routes} from "react-router";
import React from "react";
import {PostList} from "./components/PostList";
import {CreatePost} from "./components/CreatePost";

function App() {
    return (
        <>
            <Routes>
                <Route path={`/`} element={<PostList/>}/>
                <Route path={`/create`} element={<CreatePost/>}/>
            </Routes>
        </>
    );
}

export default App;
