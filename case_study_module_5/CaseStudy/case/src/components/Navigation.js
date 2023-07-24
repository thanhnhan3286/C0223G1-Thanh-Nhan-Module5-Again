import "./HeaderFooterNav.css"
import React from "react";
export function Navigation() {
    return (
        <>
            <header style={{marginTop:"65px"}}>
                <div id="indicators" className="carousel " data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active img">
                            <img
                                className="img"
                                src="https://www.ourtravelmix.com/wp-content/uploads/2022/11/Luxury-Resorts-Rarotonga.jpg"
                                width="100%"
                                height={450}
                                alt=""
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="display-2 h2-form" style={{fontSize: 50}}>
                                    ROOM & SUITES
                                </h1>
                                <button
                                    type="submit"
                                    className="btn btn-secondary"
                                    style={{
                                        backgroundColor: "#36333d",
                                        fontSize: 20,
                                        color: "white"
                                    }}
                                >
                                    CREATE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}