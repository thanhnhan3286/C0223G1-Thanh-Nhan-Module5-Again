import "bootstrap/dist/css/bootstrap.css"
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import * as blogService from "../service/BlogService"
import * as Swal from "sweetalert2";
import * as Yup from "yup";

export function CreateBlog() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    content: '',
                }}
                validationSchema={Yup.object({
                    title:Yup.string().required('Required!!!'),
                    category:Yup.string().required('Required!!!'),
                    content:Yup.string().required('Required!!!')
                })}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                    setSubmitting(false)
                    const create = async () => {
                        // values.updatedAt = currentDate;
                        // values.slug = values.title.toLowerCase().replace(/\s+/g, "-");
                        await blogService.createBlog({
                            ...values,
                            updatedAt: new Date().toDateString(),
                            slug: values.title.toLowerCase().replace(/\s+/g, "-").replace(/[:,;/_]+/g,"")
                        })
                        navigate('/');
                        await Swal.fire({
                            icon: "success",
                            title: 'Added!!!',
                            timer: 2000
                        })
                    };
                    await create();
                }}>
                {
                    ({isSubmitting}) => (
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
                                <Form action="#" method="POST" noValidate="novalidate">
                                    <div className="input-group input-group-sm mg mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Title</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="title"
                                            className="form-control text-center"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="title" component="span" className="error-mess m-lg-3"/>
                                    {/*<div className="input-group input-group-sm mg mt-3">*/}
                                    {/*    <div className="input-group-prepend">*/}
                                    {/*        <span className="input-group-text">Mã hợp đồng</span>*/}
                                    {/*    </div>*/}
                                    {/*    <input*/}
                                    {/*        disabled*/}
                                    {/*        type="text"*/}
                                    {/*        name="contractCode"*/}
                                    {/*        className="form-control text-center"*/}
                                    {/*        aria-label="Small"*/}
                                    {/*        aria-describedby="inputGroup-sizing-sm"*/}
                                    {/*    />*/}
                                    {/*</div>*/}
                                    {/*<ErrorMessage name="contractCode" component="span" className="error-mess m-lg-3"/>*/}
                                    <div className="input-group input-group-sm mg mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Category</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="category"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="category" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Content</span>
                                        </div>
                                        <Field
                                            type="textarea"
                                            name="content"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="content" component="span" className="error-mess m-lg-3"/>
                                    <br/>
                                    <div className="mb-4 text-center">
                                        <button type="submit" className="btn btn-success">
                                            Create
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    )
                }
            </Formik>
        </>
    )
}