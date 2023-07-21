import './service.css'
import {Navigation} from "../Navigation";
import React from "react";

export function ListService() {
    return (

        <>
            <Navigation/>
            <div className="row room-grid" style={{margin: "3% 10%"}}>
                <div className="col-sm-6 col-lg-4">
                    <div className="room-card">
                        <div className="room-card-photo">
                            <img
                                width={370}
                                height={239}
                                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
                                className="img-fluid wp-post-image"
                                alt=""
                                srcSet="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg 370w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-300x194.jpg 300w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-768x497.jpg 768w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-871x563.jpg 871w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-145x94.jpg 145w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F.jpg 900w"
                                sizes="(max-width: 370px) 100vw, 370px"
                            />
                            <div className="flex-wrap-center"></div>
                        </div>
                        <div className="room-card-info">
                            <div className="row">
                                <div className="col ">
                                    <h4 className="room-type">
                                        <a href="https://furamavietnam.com/vi/rooms/ocean-studio-suite/">
                                            OCEAN STUDIO SUITE
                                        </a>
                                    </h4>
                                </div>
                            </div>
                            <div className="room-size mt-1">
                                Room Size: 40.1 m<sup>2</sup>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="room-price">
                                        <span/>
                                    </div>
                                </div>
                                <div className="col-auto  mt-0">
                                    <a href="http://localhost:63342/CaseStudy/prototype/service/EditService.html?_ijt=v2j6e3mjs29rrp6oeav7sdb4mb">
                                        <button
                                            className="btn btn-primary room-qview"
                                            style={{backgroundColor: "#0d6056"}}
                                        >
                                            EDIT
                                        </button>
                                    </a>
                                    <a href="#">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{backgroundColor: "darkred"}}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            DELETE
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="room-card">
                        <div className="room-card-photo">
                            <img
                                width={370}
                                height={239}
                                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
                                className="img-fluid wp-post-image"
                                alt=""
                                srcSet="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg 370w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-300x194.jpg 300w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-768x497.jpg 768w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-871x563.jpg 871w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-145x94.jpg 145w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F.jpg 900w"
                                sizes="(max-width: 370px) 100vw, 370px"
                            />
                            <div className="flex-wrap-center"></div>
                        </div>
                        <div className="room-card-info">
                            <div className="row">
                                <div className="col ">
                                    <h4 className="room-type">
                                        <a href="https://furamavietnam.com/vi/rooms/ocean-studio-suite/">
                                            OCEAN STUDIO SUITE
                                        </a>
                                    </h4>
                                </div>
                            </div>
                            <div className="room-size mt-1">
                                Room Size: 40.1 m<sup>2</sup>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="room-price">
                                        <span/>
                                    </div>
                                </div>
                                <div className="col-auto  mt-0">
                                    <a href="http://localhost:63342/CaseStudy/prototype/service/EditService.html?_ijt=v2j6e3mjs29rrp6oeav7sdb4mb">
                                        <button
                                            className="btn btn-primary room-qview"
                                            style={{backgroundColor: "#0d6056"}}
                                        >
                                            EDIT
                                        </button>
                                    </a>
                                    <a href="#">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{backgroundColor: "darkred"}}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            DELETE
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="room-card">
                        <div className="room-card-photo">
                            <img
                                width={370}
                                height={239}
                                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
                                className="img-fluid wp-post-image"
                                alt=""
                                srcSet="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg 370w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-300x194.jpg 300w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-768x497.jpg 768w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-871x563.jpg 871w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-145x94.jpg 145w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F.jpg 900w"
                                sizes="(max-width: 370px) 100vw, 370px"
                            />
                            <div className="flex-wrap-center"></div>
                        </div>
                        <div className="room-card-info">
                            <div className="row">
                                <div className="col ">
                                    <h4 className="room-type">
                                        <a href="https://furamavietnam.com/vi/rooms/ocean-studio-suite/">
                                            OCEAN STUDIO SUITE
                                        </a>
                                    </h4>
                                </div>
                            </div>
                            <div className="room-size mt-1">
                                Room Size: 40.1 m<sup>2</sup>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="room-price">
                                        <span/>
                                    </div>
                                </div>
                                <div className="col-auto  mt-0">
                                    <a href="http://localhost:63342/CaseStudy/prototype/service/EditService.html?_ijt=v2j6e3mjs29rrp6oeav7sdb4mb">
                                        <button
                                            className="btn btn-primary room-qview"
                                            style={{backgroundColor: "#0d6056"}}
                                        >
                                            EDIT
                                        </button>
                                    </a>
                                    <a href="#">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{backgroundColor: "darkred"}}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            DELETE
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="room-card">
                        <div className="room-card-photo">
                            <img
                                width={370}
                                height={239}
                                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
                                className="img-fluid wp-post-image"
                                alt=""
                                srcSet="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg 370w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-300x194.jpg 300w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-768x497.jpg 768w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-871x563.jpg 871w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-145x94.jpg 145w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F.jpg 900w"
                                sizes="(max-width: 370px) 100vw, 370px"
                            />
                            <div className="flex-wrap-center"></div>
                        </div>
                        <div className="room-card-info">
                            <div className="row">
                                <div className="col ">
                                    <h4 className="room-type">
                                        <a href="https://furamavietnam.com/vi/rooms/ocean-studio-suite/">
                                            OCEAN STUDIO SUITE
                                        </a>
                                    </h4>
                                </div>
                            </div>
                            <div className="room-size mt-1">
                                Room Size: 40.1 m<sup>2</sup>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="room-price">
                                        <span/>
                                    </div>
                                </div>
                                <div className="col-auto  mt-0">
                                    <a href="http://localhost:63342/CaseStudy/prototype/service/EditService.html?_ijt=v2j6e3mjs29rrp6oeav7sdb4mb">
                                        <button
                                            className="btn  room-qview"
                                            style={{backgroundColor: "#0d6056"}}
                                        >
                                            EDIT
                                        </button>
                                    </a>
                                    <a href="#">
                                        <button
                                            type="button"
                                            className="btn "
                                            style={{backgroundColor: "darkred"}}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            DELETE
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            {/*&lt;!&ndash;{/*phân trang* /}&ndash;&gt;*/}
            {/*<nav aria-label="Page navigation example" class="mt-5">*/}
            {/*    <ul class="pagination justify-content-center ">*/}
            {/*        <li class="page-item ">*/}
            {/*            <a*/}
            {/*                    class="page-link"*/}
            {/*                    href="@{'/orderController/'(page=${orderPage.number -1})}"*/}
            {/*                    if="${orderPage.hasPrevious()}"*/}
            {/*            >*/}
            {/*                Previous*/}
            {/*            </a>*/}
            {/*        </li>*/}
            {/*&lt;!&ndash;        {/*                        <li style="border: 1px solid #CCCCCC" class="page-item active" >&ndash;&gt;*/}
            {/*&lt;!&ndash;        <a class="page-link active" th:text="${pageNo}" th:href="@{/(page=${pageNo})}"></a></li>* /}&ndash;&gt;*/}
            {/*        <li class="page-item    ">*/}
            {/*            <a class="page-link" text="${orderPage.number +1}">*/}
            {/*                1*/}
            {/*            </a>*/}
            {/*        </li>*/}
            {/*        <li class="page-item">*/}
            {/*            <a*/}
            {/*                    class="page-link"*/}
            {/*                    href="@{'/orderController/'(page=${orderPage.number +1})}"*/}
            {/*                    if="${orderPage.hasNext()}"*/}
            {/*            >*/}
            {/*                Next*/}
            {/*            </a>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
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