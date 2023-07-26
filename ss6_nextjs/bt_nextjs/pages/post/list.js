import "bootstrap/dist/css/bootstrap.css"
import {useEffect, useState} from "react";
import * as postService from "../../service/PostService"
import Swal from "sweetalert2";
import Link from "next/link";

export default function List() {
    const [posts, setPost] = useState([])
    const getAllPost = async () => {
        const res = await postService.findAllPost();
        setPost(res);
    }
    const deletePostApi = async (id) => {
        await postService.deletePost(id);
        await getAllPost();
        await Swal.fire({
            title: "DELETED!!!",
            icon: "success",
            timer: 2000
        })
    }

    function deletePostSwal(id, name) {
        Swal.fire({
            title: 'ARE YOU SURE ?',
            text: "DELETE THE POST '" + name + "' ?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'CANCEL',
            confirmButtonColor: '#d33',
            confirmButtonText: 'DELETE'
        }).then((result) => {
            if (result.isConfirmed) {
                deletePostApi(id).then(r => null);
            }
        })
    }

    useEffect(() => {
        getAllPost().then(r => null);
    }, [])
    return (
        <>
            <div className="container mt-3">
                <div className="text-center bg-body-secondary pb-3">
                    <h2 className="pt-3">List Post</h2>
                    <a href={`/components/CreatePost`}>
                        <button className="btn btn-success">
                            Create New Post
                        </button>
                    </a>
                </div>
                <div className="table-responsive-md">
                    <table className="table table-secondary">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            {/*<th>Slug</th>*/}
                            <th>Category</th>
                            <th>Time</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            posts.map((post, index) => (
                                <tr key={index}>
                                    <td>{post.id}</td>
                                    <td>
                                        <Link href={`/post/${post.id}`}>
                                            {post.title}
                                        </Link> </td>
                                    {/*<td>{post.slug} </td>*/}
                                    <td>{post.category} </td>
                                    <td>{post.updatedAt} </td>
                                    <td>
                                        <Link href={`/post/edit/${post.id}`}>
                                            <button className="btn btn-secondary">
                                                Edit
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button"
                                                className="btn btn-danger"
                                                onClick={() => deletePostSwal(`${post.id}`, `${post.title}`)}>
                                            Delete
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