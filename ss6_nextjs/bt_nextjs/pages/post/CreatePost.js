import {ErrorMessage, Field, Form, Formik} from "formik";
import Swal from "sweetalert2";
import {useEffect, useState} from "react";
import * as Yup from "yup"
import * as postService from "../../service/PostService"
import "bootstrap/dist/css/bootstrap.css"
import Link from "next/link";

export default function CreatePost() {
    const [title,setTitle] = useState('');
    const [slug,setSlug] = useState('');
    const getSlug = () => {
        setSlug(title.toLowerCase().replace(/\s+/g, "-").replace(/[:,;/_'^]+/g,""));
        console.log(slug)
    }
    useEffect(()=>{
        getSlug()
    },[title])
    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    content: '',
                    author: '',
                    authorEmail: '',
                    slug: slug,
                }}
                validationSchema={Yup.object({
                    title: Yup.string().required('Required!!!'),
                    category: Yup.string().required('Required!!!'),
                    content: Yup.string().required('Required!!!'),
                    author:Yup.string().required('Required!!!'),
                    authorEmail:Yup.string().required('Required!!!').email('Not true format email')
                })}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                    setSubmitting(false)
                    const create = async () => {
                        // values.updatedAt = currentDate;
                        // values.slug = values.title.toLowerCase().replace(/\s+/g, "-");
                        await postService.createPost({
                            ...values,
                            updatedAt: new Date().toDateString(),
                            // slug: values.title.toLowerCase().replace(/\s+/g, "-").replace(/[:,;/_]+/g, "")
                        })
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
                                Create New Post
                            </h2>
                            <div className="text-center">
                                <Link href={`/post/list`}>
                                    <button type="button" className="btn btn-outline-success">Back</button>
                                </Link>
                            </div>
                            <div
                                id="form"
                                className="form"
                                // style={{marginLeft: "10%", marginRight: "10%"}}
                            >
                                <Form>
                                    <div className="input-group input-group-sm mg mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Title</span>
                                        </div>
                                        <Field
                                            onKeyUp={(e) => {
                                                setTitle(e.target.value)
                                            }}
                                            type="text"
                                            name="title"
                                            className="form-control text-center"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="title" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Slug</span>
                                        </div>
                                        <Field
                                            disabled
                                            type="text"
                                            name="slug"
                                            value={slug}
                                            className="form-control text-center"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
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
                                            <span className="input-group-text">Author</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="author"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="author" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Author Email</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="authorEmail"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="authorEmail" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Content</span>
                                        </div>
                                        <Field
                                            as="textarea"
                                            type="text"
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
                                            Submit
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