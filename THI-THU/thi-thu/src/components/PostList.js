import React, {useEffect, useState} from "react";
import * as postService from "../service/PostService";
import Swal from "sweetalert2";
import {Field, Form, Formik} from "formik";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";

export function PostList() {
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        const res = await postService.findAllPost();
        setPosts(res);
    }
    useEffect(() => {
        getPosts().then(r => null);
    }, []);

    const deletePost = async (id) => {
        await postService.deletePostApi(id);
        await Swal.fire({
            title: "DELETED!!!",
            icon: "success",
            timer: 2000
        })
        await getPosts();
    }

    function deletePostAler(id, title) {
        Swal.fire({
            title: "ARE YOU SURE???",
            icon: "warning",
            text: "DELETE POST: " + title + " ?",
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#d33',
            confirmButtonText: 'DELETE'
        }).then((r) => {
            if (r.isConfirmed) {
                deletePost(id).then(r => null);
            }
        })

    }

    return (
        <>

            <div className="row room-grid text-center bg-body-secondary" style={{margin: "3% 5%"}}>
                <h1 className="mt-3">Danh sách khách hàng</h1>
                <Formik
                    initialValues={{
                        title: '',
                    }}
                    onSubmit={async (values) => {
                        const searchByTitle = async (title) => {
                            const res = await postService.searchByTitle(title);
                            setPosts(res);
                        }
                        searchByTitle(values.title).then(r => null);
                    }}
                >
                    <Form>
                        <nav className="row right container mt-3 mb-3">
                            <div className="col-6"/>
                            <div className="col-6 ">
                                <div className="row">
                                    <div className="col-4">
                                        <Link to={`/create`} className="btn btn-success">Create</Link>
                                    </div>
                                    <div className="col-8 d-flex">
                                        <Field name="title" type="text" placeholder="Search by title"
                                               className="form-control-md"/>
                                        <button type="submit" className="btn btn-danger "
                                                style={{marginLeft: "2%"}}>Search
                                        </button>
                                        <button onClick={() => getPosts()} type="reset"
                                                className="btn btn-secondary me-2">Reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </Form>
                </Formik>
                <div className="tab-content" id="orders-table-tab-content">
                    <div className="tab-pane fade show active" id="orders-all" role="tabpanel"
                         aria-labelledby="orders-all-tab">
                        <div className="app-card app-card-orders-table shadow-sm mb-5">
                            <div className="app-card-body">
                                <div className="table-responsive">
                                    <table className="table app-table-hover mb-0 text-left">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Author</th>
                                            <th>Comment Id</th>
                                            <th>Comment Body</th>
                                            <th>Comment Post Id</th>
                                            <th colSpan="2">Chức năng
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            posts.map((post, index) => (
                                                <tr key={index}>
                                                    <th>{post.id}</th>
                                                    <th>{post.title}</th>
                                                    <th>{post.author}</th>
                                                    <th>{post.coment.id}</th>
                                                    <th>{post.coment.body}</th>
                                                    <th>{post.coment.postId}</th>
                                                    <th>
                                                        <button type="button" className=" btn-del btn btn-danger"
                                                                fdprocessedid="tkcp7c"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">Sửa
                                                        </button>
                                                    </th>
                                                    <th>
                                                        <button type="button" className=" btn-del btn btn-danger"
                                                                fdprocessedid="tkcp7c"
                                                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                                onClick={() => deletePostAler(`${post.id}`, `${post.title}`)}
                                                        >
                                                            Xóa
                                                        </button>
                                                    </th>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}