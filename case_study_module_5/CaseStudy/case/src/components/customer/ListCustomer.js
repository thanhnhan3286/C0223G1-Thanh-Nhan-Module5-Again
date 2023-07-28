import React, {useEffect, useState} from "react";
import "../header_footer.css"
import {Link} from "react-router-dom";
import * as customerService from "../../service/CustomerService"
import moment from "moment";
import * as facilityService from "../../service/FacilityService";
import Swal from "sweetalert2";

export function ListCustomer() {
    const [customers, setCustomers] = useState([]);
    const [gender, setGender] = useState([]);
    const [typeCustome, setTypeCustomer] = useState([]);
    const getAllCustomer = async () => {
        const res = await customerService.findAllCustomer();
        setCustomers(res);
    };
    const getGender = async () => {
        const res = await customerService.getGender();
        setGender(res);
    };
    const getTypeCustomer = async () => {
      const res = await customerService.getTypeCustomer();
      setTypeCustomer(res);
    };
    useEffect(() => {
        getAllCustomer().then(r => null);
        getGender().then(r => null);
        getTypeCustomer().then(r => null);
    }, [])

    const deleteCustomerApi = async (id) => {
        await customerService.deleteCustomer(id);
        await getAllCustomer();
        await Swal.fire({
            title: "DELETED!!!",
            icon: "success",
            timer: 2000
        })
    }

    function deleteCustomer(id, name) {
        Swal.fire({
            title: "ARE OU SURE ?",
            text: "DELETE CUSTOMER " + name + " ?",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'CANCEL',
            confirmButtonColor: '#d33',
            confirmButtonText: 'DELETE'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCustomerApi(id).then(r => null);
            }
        })
    }
    return (
        <>
            <header>
                <div id="indicators" className="carousel " data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active img">
                            <img
                                className="img"
                                src="https://phuquoc.intercontinental.com/uploads/phuquoc/homepage/Sunset%20View%20from%20Resort%20%26%20Ombra%20-%2016x9.jpg"
                                style={{width: "100%", height: "350px"}}
                                alt=""
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="display-2 h2-form" style={{fontSize: "60px", color: "white"}}>
                                    CUSTOMER LIST
                                </h1>
                                <div className="justify-content-center">
                                    <Link to={`/customerCreate`}
                                          type="button"
                                          className="btn btn-success text-center"
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
            <div className="row room-grid text-center" style={{margin: "2% 5%"}}>
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
                                            <th className="forn-16 w-15">Name</th>
                                            <th className="forn-16 w-10">Birthday</th>
                                            <th className="forn-16 w-10 text-center">Gender</th>
                                            <th className="forn-16 w-10">Identity Card</th>
                                            <th className="forn-16 w-10">Phone</th>
                                            <th className="forn-16 w-15">Email</th>
                                            <th className="forn-16 w-15">Type Customer</th>
                                            <th colSpan={2} className="w-10">
                                                Action
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            customers.map((customer, index) => (
                                                    <tr key={index}>
                                                        <th className="text-center">{customer.id}</th>
                                                        <th>{customer.name}</th>
                                                        <th>{moment(customer.birthday,"YYYY/MM/DD").format("DD/MM/YYYY")}</th>
                                                        <th className="text-center">{gender.find((g) => g.id === customer.gender)?.gender}</th>
                                                        <th>{customer.identityCard}</th>
                                                        <th>{customer.phone}</th>
                                                        <th>{customer.email}</th>
                                                        <th>{typeCustome.find((t) => t.id === customer.customerType)?.name}</th>
                                                        <th>
                                                            <Link
                                                                to={`/customerEdit/${customer.id}`}>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-success text-capitalize"
                                                                    data-bs-toggle="modal"
                                                                    fdprocessedid="q2sbyt"
                                                                >
                                                                    EDIT
                                                                </button>
                                                            </Link>
                                                        </th>
                                                        <th>
                                                            <button
                                                                type="button"
                                                                className=" btn-del btn btn-danger"
                                                                fdprocessedid="tkcp7c"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal"
                                                                attr="onclick=|deletes('${page.id}')|"
                                                                onClick={()=>deleteCustomer(`${customer.id}`,`${customer.name}`)}
                                                            >
                                                                DELETE
                                                            </button>
                                                        </th>
                                                    </tr>
                                                )
                                            )
                                        }


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav
                    aria-label=" Page navigation example d-flex justify-content-center "
                    style={{margin: "10px auto"}}
                >
                    <ul className="pagination d-flex justify-content-center ">
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Previous
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}