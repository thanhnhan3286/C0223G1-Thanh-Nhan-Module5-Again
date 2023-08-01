import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as contractService from "../../service/ContractService"
import * as customerService from "../../service/CustomerService"
import moment from "moment";
import {Field, Form, Formik} from "formik";


export function ListContract() {
    const [contracts, setContracts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const getAllContract = async () => {
        const res = await contractService.findAllContract();
        setContracts(res);
    };
    const getAllCustomer = async () => {
        const res = await customerService.findAllCustomer();
        setCustomers(res);
    };

    useEffect(() => {
        getAllContract().then(r => null);
        getAllCustomer().then(r => null);
    }, [])
    return (
        <>
            <header>
                <div className="col-6 d-flex">
                    <Formik
                    initialValues={{

                    }}>
                        <Form>
                            <Field type="date"
                                   name="startDay"
                                   placeholder="Search by id" className="form-control-md"/>
                            <Field type="date"
                                   name="startDay"
                                   placeholder="Search by id" className="form-control-md"/>
                            <button type="submit" className="btn btn-danger">Search</button>
                        </Form>
                    </Formik>
                </div>
                <div id="indicators" className="carousel " data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active img">
                            <img
                                className="img"
                                src="https://mybeautifuladventures.com/wp-content/uploads/2021/09/viceroy-bali-main-pool-evening.jpg"
                                style={{width: "100%", height: "350px"}}
                                alt=""
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="display-2 h2-form" style={{fontSize: "60px", color: "white"}}>
                                    CONTRACT LIST
                                </h1>
                                <div className="justify-content-center">
                                    <Link to={`/contractCreate`}
                                          type="button"
                                          className="btn btn-secondary text-center"
                                          style={{
                                              backgroundColor: "#36333d",
                                              fontSize: 20,
                                              color: "white"
                                          }}
                                    >
                                        CREATE
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <div className="row room-grid text-center" style={{margin: "2% 10%"}}>
                <div className="tab-content" id="orders-table-tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="orders-all"
                        role="tabpanel"
                        aria-labelledby="orders-all-tab"
                    >
                        <div className="app-card app-card-orders-table shadow-sm mb-5">
                            <div className="app-card-body">
                                <div className="table-responsive">
                                    <table className="table app-table-hover mb-0 text-left">
                                        <thead>
                                        <tr>
                                            <th className="w-10 forn-16 text-center">Contract Code</th>
                                            <th className="forn-16 w-20">Customer Name</th>
                                            <th className="w-15 forn-16">Create Time</th>
                                            <th className="forn-16 w-15">End Time</th>
                                            <th className="forn-16 w-20 text-center">
                                                Deposit Amount($)
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            contracts.map((contract, index) => (
                                                <tr key={index}>
                                                    <th className="text-center">{contract.contractCode}</th>
                                                    <th>{customers.find((c) => c.id === contract.customerId)?.name}</th>
                                                    <th>{moment(contract.startDay, "YYYY/MM/DD").format("DD/MM/YYYY")}</th>
                                                    {/*{moment(customer.birthday,"YYYY/MM/DD").format("DD/MM/YYYY")}*/}
                                                    <th>{moment(contract.endDay, "YYYY/MM/DD").format("YYYY/MM/DD")}</th>
                                                    <th className="text-center">{contract.deposit}</th>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                {/*//table-responsive*/}
                            </div>
                            {/*//app-card-body*/}
                        </div>
                        {/*//app-card*/}
                    </div>
                </div>
                {/*//tab-content*/}
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center ">
                        <li className="page-item ">
                            <a
                                className="page-link"
                                href="@{'/orderController/'(page=${orderPage.number -1})}"
                                if="${orderPage.hasPrevious()}"
                            >
                                Previous
                            </a>
                        </li>
                        {/*                        <li style="border: 1px solid #CCCCCC" class="page-item active" ><a class="page-link active" th:text="${pageNo}" th:href="@{/(page=${pageNo})}"></a></li>*/}
                        <li className="page-item    ">
                            <a className="page-link" text="${orderPage.number +1}">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link"
                                href="@{'/orderController/'(page=${orderPage.number +1})}"
                                if="${orderPage.hasNext()}"
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}