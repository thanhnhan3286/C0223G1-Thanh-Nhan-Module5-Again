// import './fa.css'
import "bootstrap/dist/css/bootstrap.css"
import {Navigation} from "../Navigation";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as facilityService from "../../service/FacilityService"
import Swal from "sweetalert2";

export function ListService() {
    const [services, setServices] = useState([]);
    const getAllService = async () => {
        const res = await facilityService.findAllService();
        setServices(res);
    };
    useEffect(() => {
        getAllService().then(r => null);
    }, []);

    const deleteServiceApi = async (id) => {
        await facilityService.deleteFacility(id);
        await getAllService();
        await Swal.fire({
            title: "DELETED!!!",
            icon: "success",
            timer: 2000
        })
    }

    function deleteService(id, name) {
        Swal.fire({
            title: "ARE OU SURE ?",
            text: "DELETE SERVICE " + name + " ?",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'CANCEL',
            confirmButtonColor: '#d33',
            confirmButtonText: 'DELETE'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteServiceApi(id).then(r => null);
            }
        })

    }

    return (
        <>
            <Navigation/>
            <div className="row room-grid" style={{margin: "0 10%"}}>
                {
                    services.map((facility) => (
                            <div className="col-sm-6 col-lg-4">
                                <div className="room-card">
                                    <div className="room-card-photo">
                                        <img
                                            width={370}
                                            height={239}
                                            src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
                                            className="img-fluid wp-post-image"
                                            alt=""
                                            sizes="(max-width: 370px) 100vw, 370px"
                                        />
                                        <div className="flex-wrap-center"></div>
                                    </div>
                                    <div className="room-card-info">
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="room-type font-weight-bold">
                                                    {facility.name}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="room-size mt-1">
                                            Room Size: {facility.useArea}m<sup>2</sup>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="room-price">
                                                    <span/>
                                                </div>
                                            </div>
                                            <div className="col-auto mt-0 justify-content-between d-flex">
                                                <div style={{paddingRight: "10px"}}>
                                                    <Link
                                                        className="btn btn-success room-qview border-0"
                                                        // style={{backgroundColor: "#0d6056",}}
                                                        to={"/"}>
                                                        EDIT
                                                    </Link>
                                                </div>
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger border-0"
                                                        // style={{backgroundColor: "darkred"}}
                                                        data-bs-target="#exampleModal"
                                                        onClick={() => deleteService(`${facility.id}`, `${facility.name}`)}
                                                    >
                                                        DELETE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }

            </div>
            {/*<div className="main">*/}
            {/*    <ul className="cards">*/}
            {/*        <li className="cards_item">*/}
            {/*            <div className="card">*/}
            {/*                <div className="card_image">*/}
            {/*                    <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg" />*/}
            {/*                </div>*/}
            {/*                <div className="card_content">*/}
            {/*                    <h2 className="card_title" style={{fontSize:"25px"}}>Card Grid Layout</h2>*/}
            {/*                    <p className="card_text">*/}
            {/*                        Demo of pixel perfect pure CSS simple responsive card grid*/}
            {/*                        layout*/}
            {/*                    </p>*/}
            {/*                    <div className="d-flex justify-content-center">*/}
            {/*                        <button className="btn card_btn">Read More</button>*/}
            {/*                        <button className="btn card_btn">Read More</button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*        <li className="cards_item">*/}
            {/*            <div className="card">*/}
            {/*                <div className="card_image">*/}
            {/*                    <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg" />*/}
            {/*                </div>*/}
            {/*                <div className="card_content">*/}
            {/*                    <h2 className="card_title">Card Grid Layout</h2>*/}
            {/*                    <p className="card_text">*/}
            {/*                        Demo of pixel perfect pure CSS simple responsive card grid*/}
            {/*                        layout*/}
            {/*                    </p>*/}
            {/*                    <button className="btn card_btn">Read More</button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*        <li className="cards_item">*/}
            {/*            <div className="card">*/}
            {/*                <div className="card_image">*/}
            {/*                    <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg" />*/}
            {/*                </div>*/}
            {/*                <div className="card_content">*/}
            {/*                    <h2 className="card_title">Card Grid Layout</h2>*/}
            {/*                    <p className="card_text">*/}
            {/*                        Demo of pixel perfect pure CSS simple responsive card grid*/}
            {/*                        layout*/}
            {/*                    </p>*/}
            {/*                    <button className="btn card_btn">Read More</button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*        <li className="cards_item">*/}
            {/*            <div className="card">*/}
            {/*                <div className="card_image">*/}
            {/*                    <img src="https://picsum.photos/500/300/?image=14" />*/}
            {/*                </div>*/}
            {/*                <div className="card_content">*/}
            {/*                    <h2 className="card_title">Card Grid Layout</h2>*/}
            {/*                    <p className="card_text">*/}
            {/*                        Demo of pixel perfect pure CSS simple responsive card grid*/}
            {/*                        layout*/}
            {/*                    </p>*/}
            {/*                    <button className="btn card_btn">Read More</button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*        <li className="cards_item">*/}
            {/*            <div className="card">*/}
            {/*                <div className="card_image">*/}
            {/*                    <img src="https://picsum.photos/500/300/?image=17" />*/}
            {/*                </div>*/}
            {/*                <div className="card_content">*/}
            {/*                    <h2 className="card_title">Card Grid Layout</h2>*/}
            {/*                    <p className="card_text">*/}
            {/*                        Demo of pixel perfect pure CSS simple responsive card grid*/}
            {/*                        layout*/}
            {/*                    </p>*/}
            {/*                    <button className="btn card_btn">Read More</button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*        <li className="cards_item">*/}
            {/*            <div className="card">*/}
            {/*                <div className="card_image">*/}
            {/*                    <img src="https://picsum.photos/500/300/?image=2" />*/}
            {/*                </div>*/}
            {/*                <div className="card_content">*/}
            {/*                    <h2 className="card_title">Card Grid Layout</h2>*/}
            {/*                    <p className="card_text">*/}
            {/*                        Demo of pixel perfect pure CSS simple responsive card grid*/}
            {/*                        layout*/}
            {/*                    </p>*/}
            {/*                    <button className="btn card_btn">Read More</button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*<h3 className="made_by">Made with ♡</h3>*/}

            {/*phân trang*/}
            <nav
                aria-label=" Page navigation example d-flex justify-content-center "
                style={{margin: "20px auto"}}
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
                                DELETE SERVICE
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                X
                            </button>
                        </div>
                        <div className="modal-body" style={{textAlign: "center"}}>
                            <span>Are you sure to delete....</span>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn-del btn btn-primary"
                                data-bs-dismiss="modal"
                                style={{backgroundColor: "#0d6056"}}
                            >
                                CANCEl
                            </button>
                            <button
                                type="button"
                                className="btn-del btn btn-danger "
                                style={{backgroundColor: "darkred"}}
                            >
                                DELETE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}