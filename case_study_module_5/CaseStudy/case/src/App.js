// import {Header} from "./components/Header";
import React from "react";
// import {Footer} from "./components/Footer";
// import {ListService} from "./components/service/ListService";
// import {Route, Routes} from "react-router";
import {EditService} from "./components/service/EditService";
import {CreateService} from "./components/service/CreateService";

function App() {
    return (
        <>
            {/*<Header/>*/}
            {/*<Routes>*/}
            {/*    <Route path={`/`} element={<ListService/>}/>*/}
            {/*</Routes>*/}
            <EditService/>
            <CreateService/>
            {/*<Footer/>*/}
        </>
    );
}

export default App;
