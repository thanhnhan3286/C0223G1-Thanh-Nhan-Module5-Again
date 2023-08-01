import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as postService from "../service/PostService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import {useNavigate} from "react-router";

export function CreatePost() {
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);
    const getComments = async () => {
        const res = await postService.findAllComment();
        setComments(res);
    }
    useEffect(() => {
        getComments().then(r => null);
    }, [])

    const createPost = async (values) => {
        await postService.createPost({
            ...values,
            coment: await postService.findCommentById(+values.coment),
        });
        navigate(`/`);
        await Swal.fire({
            timer: 2000,
            title: 'ADDED!!!',
            icon: 'success'
        })
    }

    return (
        <>
            <div className="container boxed mt-3" style={{width: "700px", height: " auto "}}>
                <h2 className="text-center mt-2">Thêm mới khách hàng</h2>
                <div id="form" className="form" style={{marginLeft: "10%", marginRight: "10%"}}>
                    <Formik
                        initialValues={{
                            title: '',
                            author: '',
                            coment: 0
                        }}
                        validationSchema={yup.object({
                            title: yup.string().required('Required!!!').min(5).max(150),
                            author: yup.string().required('Required!!!').min(5).max(150),
                            comment: yup.number().min(1, 'Please choose comment!!!')
                        })}
                        onSubmit={async (values, {setSubmitting, resetForm}) => (
                            createPost(values)
                        )}
                    >
                        <Form>
                            <div className="input-group input-group-sm mg mt-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Title</span>
                                </div>
                                <Field name="title" type="text" className="form-control" aria-label="Small"
                                       aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <ErrorMessage name="title" component="span" className="text-red m-lg-3"/>
                            <div className="input-group input-group-sm mg">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Author</span>
                                </div>
                                <Field name="author" type="date" className="form-control" aria-label="Small"
                                       aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <ErrorMessage name="author" component="span" className="text-red m-lg-3"/>
                            <div className="input-group input-group-sm mg">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Comment</span>
                                </div>
                                <Field as="select" name="coment" className="form-select">
                                    <option>--Choose comment--</option>
                                    {
                                        comments.map((comment, index) => (
                                            <option key={index} value={comment.id}>{comment.body}</option>
                                        ))
                                    }
                                </Field>
                            </div>
                            <ErrorMessage name="coment" component="span" className="text-red m-lg-3"/>
                            <br/>
                            <div className="mb-4 text-center">
                                <button type="submit" className="btn btn-success">Thêm mới</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}