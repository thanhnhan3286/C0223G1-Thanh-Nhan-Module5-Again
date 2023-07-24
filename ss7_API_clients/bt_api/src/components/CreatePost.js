import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css"
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import * as postService from "../service/PostService"
import Swal from "sweetalert2";

export function CreatePost() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const getSlug = () => {
        setSlug(title.toLowerCase().replace(/\s+/g, "-").replace(/[:,;/_'^]+/g, "").toString());
    }
    useEffect(() => {
        getSlug();
    }, [title])
    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    slug: '',
                    category: '',
                    thumbnail_url: ''
                }}
                validationSchema={yup.object({
                    title: yup.string().required('Required!!!'),
                    category: yup.string().required('Required!!!'),
                    thumbnail_url: yup.string().required('Required!!!')
                })}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                    setSubmitting(false);
                    const createPost = async () => {
                        console.log(values);
                        await postService.create({
                            ...values,
                            slug: slug
                        });
                    }
                    await createPost();
                    setSlug('');
                    await resetForm();
                    navigate('/');
                    await Swal.fire({
                        icon: "success",
                        title: "Added!!!",
                        timer: 2000
                    })
                }}>
                {
                    ({isSubmiting}) => (
                        <div className="container justify-content-center">
                            <div className="text-center mt-3 mb-3">
                                <h1>Create New Post</h1>
                            </div>
                            <div className="text-center mb-3">
                                <Link to={'/'} type="button" className="btn btn-outline-success">Back</Link>
                            </div>
                            <div className="col-4 bg-body-tertiary" style={{margin: "0 auto"}}>
                                <Form>
                                    <label htmlFor="title" className="fs-5 fw-bolder form-label">Title</label>
                                    <Field type="text" onKeyUp={(e) => setTitle(e.target.value)} name="title" id="title"
                                           className="form-control"/>
                                    <ErrorMessage component="span" name="title" className="text-red"/>
                                    <br/>
                                    <label htmlFor="slug" className="fs-5 fw-bolder form-label">Slug</label>
                                    <Field disabled type="text" value={slug} name="slug" id="slug"
                                           className="form-control"/>
                                    <ErrorMessage component="span" name="slug" className="text-red"/>
                                    <br/>
                                    <label htmlFor="category" className="fs-5 fw-bolder form-label">Category</label>
                                    <Field type="text" name="category" id="category" className="form-control"/>
                                    <ErrorMessage component="span" name="category" className="text-red"/>
                                    <br/>
                                    <label htmlFor="thumbnail_url" className="fs-5 fw-bolder form-label">Thumbnail
                                        URL</label>
                                    <Field type="text" name="thumbnail_url" id="thumbnail_url"
                                           className="form-control"/>
                                    <ErrorMessage component="span" name="thumbnail_url" className="text-red"/>
                                    <br/>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="m-lg-3 btn btn-success">
                                            Submit
                                        </button>
                                        <Link type="button" className="m-lg-3 btn btn-secondary" to={'/'}>
                                            Cancel
                                        </Link>
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