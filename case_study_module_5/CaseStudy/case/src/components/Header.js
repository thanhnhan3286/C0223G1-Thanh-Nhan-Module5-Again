import "./HeaderFooterNav.css"
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
            <section id="two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="margin-top-0 text-primary">Flexible Layouts</h2>
                            <hr className="primary" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="border-2 border-secondary bg-danger col-lg-4 col-md-4 text-center">
                            <div className="feature">
                                <i
                                    className="icon-lg ion-android-laptop wow fadeIn"
                                    data-wow-delay=".3s"
                                />
                                <h3>Responsive</h3>
                                <p className="text-muted">Your site looks good everywhere</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="feature">
                                <i
                                    className="icon-lg ion-social-sass wow fadeInUp"
                                    data-wow-delay=".2s"
                                />
                                <h3>Customizable</h3>
                                <p className="text-muted">Easy to theme and customize with SASS</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="feature">
                                <i
                                    className="icon-lg ion-ios-star-outline wow fadeIn"
                                    data-wow-delay=".3s"
                                />
                                <h3>Consistent</h3>
                                <p className="text-muted">A mature, well-tested, stable codebase</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="feature">
                                <i
                                    className="icon-lg ion-ios-star-outline wow fadeIn"
                                    data-wow-delay=".3s"
                                />
                                <h3>Consistent</h3>
                                <p className="text-muted">A mature, well-tested, stable codebase</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="feature">
                                <i
                                    className="icon-lg ion-ios-star-outline wow fadeIn"
                                    data-wow-delay=".3s"
                                />
                                <h3>Consistent</h3>
                                <p className="text-muted">A mature, well-tested, stable codebase</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="feature">
                                <i
                                    className="icon-lg ion-ios-star-outline wow fadeIn"
                                    data-wow-delay=".3s"
                                />
                                <h3>Consistent</h3>
                                <p className="text-muted">A mature, well-tested, stable codebase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}