import React from "react";
// import "bootstrap/dist/css/bootstrap.css"

export function ListCustomer() {
    return (
        <>
            <div className="row room-grid text-center" style={{ margin: "0 5%" }}>
                <h1 className="mt-5">List Customer</h1>
                <a href="http://localhost:63342/CaseStudy/prototype/customer/CreateCustomer.html?_ijt=50e36da1o38qlm9k98qvbpb2ce">
                    <button
                        type="button"
                        className="btn btn-secondary text-capitalize"
                        data-bs-toggle="modal"
                        fdprocessedid="q2sbyt"
                    >
                        CREATE
                        {/*                                            th:attr="onclick=|detail('${productCoffeeModelPage.id}','${productCoffeeModelPage.nameProduct}')|">Detail*/}
                    </button>
                </a>
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
                                            <th className="text-center forn-16 w-5">ID</th>
                                            <th className="forn-16 w-20">Name</th>
                                            <th className="forn-16 w-10">Birthday</th>
                                            <th className="forn-16 w-5">Gender</th>
                                            <th className="forn-16 w-18">Identity Card</th>
                                            <th className="forn-16 w-10">Phone</th>
                                            <th className="forn-16 w-10">Email</th>
                                            <th className="forn-16 w-20">Type Customer</th>
                                            <th colSpan={2} className="w-10">
                                                {" "}
                                                Action
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th className="text-center">1</th>
                                            <th>Đỗ Thành Nhân</th>
                                            <th>06/03/2000</th>
                                            <th>Nam</th>
                                            <th>123456789</th>
                                            <th>0123456789</th>
                                            <th>nhan012@gmail.com</th>
                                            <th>Diamond</th>
                                            <th>
                                                <a href="http://localhost:63342/CaseStudy/prototype/customer/EditCustomer.html?_ijt=v2j6e3mjs29rrp6oeav7sdb4mb">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary text-capitalize"
                                                        data-bs-toggle="modal"
                                                        fdprocessedid="q2sbyt"
                                                    >
                                                        EDIT
                                                        {/*                                            th:attr="onclick=|detail('${productCoffeeModelPage.id}','${productCoffeeModelPage.nameProduct}')|">Detail*/}
                                                    </button>
                                                </a>
                                            </th>
                                            <th>
                                                <button
                                                    type="button"
                                                    className=" btn-del btn btn-danger"
                                                    fdprocessedid="tkcp7c"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    attr="onclick=|deletes('${page.id}')|"
                                                >
                                                    DELETE
                                                </button>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="text-center">2</th>
                                            <th>Đỗ Thành Nhân</th>
                                            <th>06/03/2000</th>
                                            <th>Nam</th>
                                            <th>123456789</th>
                                            <th>0123456789</th>
                                            <th>nhan012@gmail.com</th>
                                            <th>Diamond</th>
                                            <th>
                                                <a href="http://localhost:63342/CaseStudy/prototype/customer/EditCustomer.html?_ijt=v2j6e3mjs29rrp6oeav7sdb4mb">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary text-capitalize"
                                                        data-bs-toggle="modal"
                                                        fdprocessedid="q2sbyt"
                                                    >
                                                        EDIT
                                                        {/*                                            th:attr="onclick=|detail('${productCoffeeModelPage.id}','${productCoffeeModelPage.nameProduct}')|">Detail*/}
                                                    </button>
                                                </a>
                                            </th>
                                            <th>
                                                <button
                                                    type="button"
                                                    className=" btn-del btn btn-danger"
                                                    fdprocessedid="tkcp7c"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    attr="onclick=|deletes('${page.id}')|"
                                                >
                                                    DELETE
                                                </button>
                                            </th>
                                        </tr>
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
            </div>
            {/* Button trigger modal */}
            {/*<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">*/}
            {/*    Launch demo modal*/}
            {/*</button>*/}
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                DELETE CUSTOMER
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            />
                        </div>
                        <div className="modal-body" style={{ textAlign: "center" }}>
                            <span>Are you sure to delete customer ....</span>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn-del btn btn-primary"
                                data-bs-dismiss="modal"
                                style={{ backgroundColor: "#0d6056" }}
                            >
                                Cancel
                            </button>
                            <button type="button" className="btn-del btn btn-danger">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}