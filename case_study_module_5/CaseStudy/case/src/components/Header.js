import "./header_footer.css"
import React from "react";
import {Link} from "react-router-dom";

export function Header() {
    return (
        <>
            <div className="sticky-wrapper"
                 style={{position: "sticky", width: "100%", zIndex: 100, top: 0}}>
                <div className="header-nav js-header-nav ">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <div className="navbar-collapse d-flex justify-content-between">
                                <ul
                                    id="menu-furama-vi"
                                    className="menu navbar-nav js-main-menu"
                                    style={{ width: "80%", marginLeft:"5%"}}
                                >
                                    <li id="nav-menu-item-5006"
                                        className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <div className=" d-flex align-items-center bestel-logo">
                                            <Link to={`/`} className="header-logo">
                                                <img
                                                    src="https://www.furama.com/images/LOGOFHI_4C_Reverse.png"
                                                    alt="logo "
                                                    className="img-fluid"
                                                    style={{margin: "10px auto", padding: 5, width: 140}}
                                                />
                                            </Link>
                                        </div>
                                    </li>
                                    <li
                                        id="nav-menu-item-5006"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        style={{marginLeft:"4%"}}
                                    >
                                        <Link to={`/`}
                                              className="nav-link main-menu-link"
                                        >
                                            Room & Suites
                                        </Link>
                                    </li>
                                    <li
                                        id="nav-menu-item-5006"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"

                                    >
                                        <Link to={`/customerList`}
                                              className="nav-link main-menu-link"
                                        >
                                            customer
                                        </Link>
                                    </li>
                                    <li
                                        id="nav-menu-item-5006"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"

                                    >
                                        <Link to={`/contractList`}
                                              className="nav-link main-menu-link"
                                        >
                                            contract
                                        </Link>
                                    </li>
                                    <li
                                        id="nav-menu-item-5008"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <a
                                            href="https://furamavietnam.com/vi/culinary/"
                                            className="nav-link main-menu-link"
                                        >
                                            culinary
                                        </a>
                                    </li>
                                    <li
                                        id="nav-menu-item-5009"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <a
                                            href="https://furamavietnam.com/vi/meeting-and-events/"
                                            className="nav-link main-menu-link"
                                        >
                                            events
                                        </a>
                                    </li>
                                    <li
                                        id="nav-menu-item-5010"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <a
                                            href="https://furamavietnam.com/vi/spa-and-fitness/"
                                            className="nav-link main-menu-link"
                                        >
                                            SPA
                                        </a>
                                    </li>
                                    <li
                                        id="nav-menu-item-5011"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <a
                                            href="https://furamavietnam.com/vi/recreation/"
                                            className="nav-link main-menu-link"
                                        >
                                            recreation
                                        </a>
                                    </li>
                                    <li
                                        id="nav-menu-item-5012"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <a
                                            href="https://furamavietnam.com/vi/destination/"
                                            className="nav-link main-menu-link"
                                        >
                                            destination
                                        </a>
                                    </li>
                                    <li
                                        id="nav-menu-item-5013"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <a
                                            href="https://furamavietnam.com/vi/furama-special-offers/"
                                            className="nav-link main-menu-link"
                                        >
                                            special offers
                                        </a>
                                    </li>
                                </ul>
                                {/*<ul*/}
                                {/*    id="menu-furama-vi"*/}
                                {/*    className="menu navbar-nav js-main-menu"*/}
                                {/*    style={{ width: "80%", marginLeft:"5%"}}*/}
                                {/*>*/}
                                {/*    <li id="nav-menu-item-5006"*/}
                                {/*        className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"*/}
                                {/*    >*/}
                                {/*        <div className=" d-flex align-items-center bestel-logo">*/}
                                {/*            <Link to={`/`} className="header-logo">*/}
                                {/*                <img*/}
                                {/*                    src="https://www.furama.com/images/LOGOFHI_4C_Reverse.png"*/}
                                {/*                    alt="logo "*/}
                                {/*                    className="img-fluid"*/}
                                {/*                    style={{margin: "10px auto", padding: 5, width: 140}}*/}
                                {/*                />*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </li>*/}
                                {/*</ul>*/}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/*<nav id="topNav" className="navbar navbar-default navbar-fixed-top">*/}
            {/*    <div className="container">*/}
            {/*        <div className="navbar-header">*/}
            {/*            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"*/}
            {/*                    data-target="#bs-navbar">*/}
            {/*                <span class="sr-only">Toggle navigation</span>*/}
            {/*                <span class="icon-bar"></span>*/}
            {/*                <span class="icon-bar"></span>*/}
            {/*                <span class="icon-bar"></span>*/}
            {/*            </button>*/}
            {/*            <img*/}
            {/*                style={{margin: "10px auto", padding: 5, width: 140}}*/}
            {/*                src="https://www.furama.com/images/LOGOFHI_4C_Reverse.png"*/}
            {/*                alt=""*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        <div className="navbar-collapse collapse" id="bs-navbar">*/}
            {/*            <ul className="nav navbar-nav">*/}
            {/*                <li>*/}
            {/*                    <a className="page-scroll" href="#one">*/}
            {/*                        Room &amp; Suites*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <a className="page-scroll" href="#two">*/}
            {/*                        Customer*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <a className="page-scroll" href="#last">*/}
            {/*                        Contact*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <a className="page-scroll" href="#three">*/}
            {/*                        Gallery*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <a className="page-scroll" href="#four">*/}
            {/*                        Features*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*            <ul className="nav navbar-nav navbar-right">*/}
            {/*                <li>*/}
            {/*                    <a*/}
            {/*                        className="page-scroll"*/}
            {/*                        data-toggle="modal"*/}
            {/*                        title="A free Bootstrap video landing theme"*/}
            {/*                        href="#aboutModal"*/}
            {/*                    >*/}
            {/*                        About*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</nav>*/}
            {/*<section id="two">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-lg-12 text-center">*/}
            {/*                <h2 className="margin-top-0 text-primary">Flexible Layouts</h2>*/}
            {/*                <hr className="primary" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="border-2 border-secondary bg-danger col-lg-4 col-md-4 text-center">*/}
            {/*                <div className="feature">*/}
            {/*                    <i*/}
            {/*                        className="icon-lg ion-android-laptop wow fadeIn"*/}
            {/*                        data-wow-delay=".3s"*/}
            {/*                    />*/}
            {/*                    <h3>Responsive</h3>*/}
            {/*                    <p className="text-muted">Your site looks good everywhere</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-4 col-md-4 text-center">*/}
            {/*                <div className="feature">*/}
            {/*                    <i*/}
            {/*                        className="icon-lg ion-social-sass wow fadeInUp"*/}
            {/*                        data-wow-delay=".2s"*/}
            {/*                    />*/}
            {/*                    <h3>Customizable</h3>*/}
            {/*                    <p className="text-muted">Easy to theme and customize with SASS</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-4 col-md-4 text-center">*/}
            {/*                <div className="feature">*/}
            {/*                    <i*/}
            {/*                        className="icon-lg ion-ios-star-outline wow fadeIn"*/}
            {/*                        data-wow-delay=".3s"*/}
            {/*                    />*/}
            {/*                    <h3>Consistent</h3>*/}
            {/*                    <p className="text-muted">A mature, well-tested, stable codebase</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-4 col-md-4 text-center">*/}
            {/*                <div className="feature">*/}
            {/*                    <i*/}
            {/*                        className="icon-lg ion-ios-star-outline wow fadeIn"*/}
            {/*                        data-wow-delay=".3s"*/}
            {/*                    />*/}
            {/*                    <h3>Consistent</h3>*/}
            {/*                    <p className="text-muted">A mature, well-tested, stable codebase</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-4 col-md-4 text-center">*/}
            {/*                <div className="feature">*/}
            {/*                    <i*/}
            {/*                        className="icon-lg ion-ios-star-outline wow fadeIn"*/}
            {/*                        data-wow-delay=".3s"*/}
            {/*                    />*/}
            {/*                    <h3>Consistent</h3>*/}
            {/*                    <p className="text-muted">A mature, well-tested, stable codebase</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-4 col-md-4 text-center">*/}
            {/*                <div className="feature">*/}
            {/*                    <i*/}
            {/*                        className="icon-lg ion-ios-star-outline wow fadeIn"*/}
            {/*                        data-wow-delay=".3s"*/}
            {/*                    />*/}
            {/*                    <h3>Consistent</h3>*/}
            {/*                    <p className="text-muted">A mature, well-tested, stable codebase</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    )
}