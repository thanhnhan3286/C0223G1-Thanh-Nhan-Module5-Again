import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css"
import * as blogService from "../service/BlogService"
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

export function ListBlog() {
    const [post, setPost] = useState([]);
    const getPosts = async () => {
        const res = await blogService.getAllPost();
        console.log(res)
        setPost(res);
    };
    useEffect(() => {
        getPosts()
    }, [])

    const deleteBlogApi = async (id) => {
        await blogService.deleteBlogById(id);
        getPosts();
        await Swal.fire({
            title: "Successful delete!!!",
            icon: "success",
            timer: 2000
        })
    }

    function deleteBlog(id, title) {
        Swal.fire({
            title: 'ARE YOU SURE?',
            text: "Delete blog " + title + " ?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteBlogApi(id).then(r => null)
            }
        })
    }

    return (
        <>
            <h1 className="text-center mt-5">List Posts</h1>
            <div className="text-center">
                <Link to={`/create`} type="button" className="btn btn-secondary">Create New Blog</Link>
            </div>


            <div className="row room-grid justify-content-center mt-2 mb-2">
                <div className="w-75">
                    <table className="table table-light">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th className="text-center">TITLE</th>
                            <th className="text-left">CATEGORY</th>
                            <th className="text-right">TIME</th>
                            <th className="text-center" colSpan="2">ACTION</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            post.map((post, index) => (
                                <tr key={index}>
                                    <td>{post.id}</td>
                                    <td className="text-left">{post.title}</td>
                                    <td className="text-left">{post.category}</td>
                                    <td className="text-right">{post.updatedAt}</td>
                                    <td>
                                        <Link to={`/editBlog/${post.id}`} type="button"
                                              className="btn btn-warning">
                                            {/*    <button className="btn btn-warning">*/}
                                            EDIT
                                            {/*</button>*/}
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger"
                                                onClick={() => deleteBlog(`${post.id}`, `${post.title}`)}>
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}