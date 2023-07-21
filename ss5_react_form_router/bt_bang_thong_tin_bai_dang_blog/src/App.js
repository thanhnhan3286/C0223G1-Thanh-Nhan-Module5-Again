import './App.css';
import {ListBlog} from "./component/ListBlog";
import React from "react";
import {CreateBlog} from "./component/CreateBlog";
import {Route, Routes} from "react-router";
import {EditBlog} from "./component/EditBlog";
import {DetailBlog} from "./component/DetailBlog";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<ListBlog/>}/>
                <Route path='/create' element={<CreateBlog/>}/>
                <Route path='/edit/:id' element={<EditBlog/>}/>
                <Route path='/detail/:id' element={<DetailBlog/>}/>
            </Routes>

        </>

    );
}

export default App;
