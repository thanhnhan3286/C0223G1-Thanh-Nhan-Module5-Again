import './fa.css'
import {Navigation} from "../Navigation";
import React from "react";

export function ListService() {
    return (

        <>
            <Navigation/>
            <div className="main">
                <ul className="cards">
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image">
                                <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg" />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title" style={{fontSize:"25px"}}>Card Grid Layout</h2>
                                <p className="card_text">
                                    Demo of pixel perfect pure CSS simple responsive card grid
                                    layout
                                </p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image">
                                <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg" />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">
                                    Demo of pixel perfect pure CSS simple responsive card grid
                                    layout
                                </p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image">
                                <img src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg" />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">
                                    Demo of pixel perfect pure CSS simple responsive card grid
                                    layout
                                </p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image">
                                <img src="https://picsum.photos/500/300/?image=14" />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">
                                    Demo of pixel perfect pure CSS simple responsive card grid
                                    layout
                                </p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image">
                                <img src="https://picsum.photos/500/300/?image=17" />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">
                                    Demo of pixel perfect pure CSS simple responsive card grid
                                    layout
                                </p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image">
                                <img src="https://picsum.photos/500/300/?image=2" />
                            </div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">
                                    Demo of pixel perfect pure CSS simple responsive card grid
                                    layout
                                </p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <h3 className="made_by">Made with ♡</h3>

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