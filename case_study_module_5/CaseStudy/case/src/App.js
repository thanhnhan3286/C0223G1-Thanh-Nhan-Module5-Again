// import {Header} from "./components/Header";
import React from "react";
import {Footer} from "./components/Footer";
import {ListService} from "./components/service/ListService";
import {Route, Routes} from "react-router";

function App() {
    return (
        <>
            {/*<Header/>*/}
            <Routes>
                <Route path={`/`} element={<ListService/>}/>
            </Routes>
            {/*<Footer/>*/}
        </>
    );
}

export default App;
