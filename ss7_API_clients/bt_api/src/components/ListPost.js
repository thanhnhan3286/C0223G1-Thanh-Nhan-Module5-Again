import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as postService from "../service/PostService"
import "bootstrap/dist/css/bootstrap.css"

export function ListPost() {
    const [posts,setPost] = useState([]);
    const getPost = async () => {
        const res = await postService.findAll();
        setPost(res);
    };
    useEffect(() => {
        getPost().then(r => null);
    },[])
    return (
        <>
            <h1 className="text-center mt-5">List Posts</h1>
            <div className="text-center">
                <Link to={`/create`} type="button" className="btn btn-secondary mt-3 mb-3">Create</Link>
            </div>
            <div className="row room-grid justify-content-center mt-2 mb-2">
                <div className="w-75">
                    <table className="table table-light border-1" style={{border: "2px solid black"}}>
                        <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center" style={{width:"20%"}}>TITLE</th>
                            <th className="text-center" style={{width:"20%"}}>SLUG</th>
                            <th className="text-center" style={{width:"20%"}}>CATEGORY</th>
                            <th className="text-center" style={{width:"30%"}}>THUMBNAIL URL</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            posts.map((post, index) => (
                                <tr key={index}>
                                    <td className="text-center">{post.id}</td>
                                    <td className="text-left" style={{width:"20%"}}>{post.title}</td>
                                    <td className="text-left" style={{width:"20%"}}>{post.slug}</td>
                                    <td className="text-center" style={{width:"20%"}}>{post.category}</td>
                                    <td className="text-right" style={{width:"30%"}}>{post.thumbnail_url}</td>
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