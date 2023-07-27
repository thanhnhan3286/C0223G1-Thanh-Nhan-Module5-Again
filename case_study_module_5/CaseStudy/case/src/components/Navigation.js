import "./header_footer.css"
import React from "react";
import {Link} from "react-router-dom";
export function Navigation() {
    return (
        <>
            <header>
                <div id="indicators" className="carousel " data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active img">
                            <img
                                className="img"
                                src="https://www.ourtravelmix.com/wp-content/uploads/2022/11/Luxury-Resorts-Rarotonga.jpg"
                                style={{width:"100%",height:"350px"}}
                                alt=""
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="display-2 h2-form" style={{fontSize: "60px", color:"white"}}>
                                    ROOM & SUITES
                                </h1>
                                <div className="justify-content-center" >
                                    <Link to={`/serviceCreate`}
                                        type="submit"
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
        </>
    )
}