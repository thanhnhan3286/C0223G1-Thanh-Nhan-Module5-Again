import {Header} from "./components/Header";
import React from "react";
import {Footer} from "./components/Footer";
import {ListService} from "./components/service/ListService";
import {Route, Routes} from "react-router";
import {EditService} from "./components/service/EditService";
import {CreateService} from "./components/service/CreateService";
import {ListCustomer} from "./components/customer/ListCustomer";
import {Navigation} from "./components/Navigation";
import {ListContract} from "./components/contract/ListContract";
import {CreateCustomer} from "./components/customer/CreateCustomer";
import {CreateContract} from "./components/contract/CreateContract";
import {EditCustomer} from "./components/customer/EditCustomer";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={`/`} element={<ListService/>}/>
                <Route path={`/serviceCreate`} element={<CreateService/>}/>
                <Route path={`/serviceEdit/:id`} element={<EditService/>}/>
                <Route path={`/customerList`} element={<ListCustomer/>}/>
                <Route path={`/contractList`} element={<ListContract/>}/>
                <Route path={`/contractCreate`} element={<CreateContract/>}/>
                <Route path={`/customerCreate`} element={<CreateCustomer/>}/>
                <Route path={`/customerEdit/:id`} element={<EditCustomer/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
