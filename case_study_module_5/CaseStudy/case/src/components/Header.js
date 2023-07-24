// import "./HeaderFooterNav.css"
import React from "react";

export function Header() {
    return (
        <>
            <nav id="topNav" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <img
                            style={{margin: "10px auto", padding: 5, width: 140}}
                            src="https://www.furama.com/images/LOGOFHI_4C_Reverse.png"
                            alt=""
                        />
                    </div>
                    <div className="navbar-collapse collapse" id="bs-navbar">
                        <ul className="nav navbar-nav">
                            <li>
                                <a className="page-scroll" href="#one">
                                    Room &amp; Suites
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#two">
                                    Customer
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#last">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#three">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#four">
                                    Features
                                </a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a
                                    className="page-scroll"
                                    data-toggle="modal"
                                    title="A free Bootstrap video landing theme"
                                    href="#aboutModal"
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}