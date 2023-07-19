import "bootstrap/dist/css/bootstrap.css"
import React from "react";
import {ErrorMessage, Field, Form} from "formik";
import {Link} from "react-router-dom";

export function CreateBlog() {

    return (
        <>
            <div
                className="container boxed mt-5 w-50"
                // style={{marginTop: "2%", width: 650, height: "auto"}}
            >
                <h2 className="text-center mt-3">
                    Create Blog
                </h2>
                <div className="text-center">

                <Link to={'/'} type="button" className="btn btn-outline-success">Back</Link>
                </div>
                <div
                    id="form"
                    className="form"
                    // style={{marginLeft: "10%", marginRight: "10%"}}
                >
                    <form action="#" method="POST" noValidate="novalidate">
                        <div className="input-group input-group-sm mg mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Mã hợp đồng</span>
                            </div>
                            <input
                                disabled
                                type="text"
                                name="contractCode"
                                className="form-control text-center"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        {/*<ErrorMessage name="contractCode" component="span" className="error-mess m-lg-3"/>*/}
                        <div className="input-group input-group-sm mg mt-3" >
                            <div className="input-group-prepend">
                                <span className="input-group-text">Ngày bắt đầu</span>
                            </div>
                            <input
                                type="date"
                                name="startDay"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        {/*<ErrorMessage name="startDay" component="span" className="error-mess m-lg-3"/>*/}
                        <div className="input-group input-group-sm mg mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Ngày kết thúc</span>
                            </div>
                            <input
                                type="date"
                                name="endDay"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        {/*<ErrorMessage name="endDay" component="span" className="error-mess m-lg-3"/>*/}
                        <div className="input-group input-group-sm mg mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Số tiền cọc trước ($)</span>
                            </div>
                            <input
                                type="number"
                                name="deposit"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        {/*<ErrorMessage name="deposit" component="span"*/}
                        {/*              className="error-mess m-lg-3 error-404"/>*/}
                        <br/>
                        <div className="mb-4 text-center">
                            <button type="submit" className="btn btn-success">
                                Tạo hợp đồng
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}