import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css"
import * as blogService from "../service/BlogService"

export function ListBlog() {
    const [post,setPost] = useState([]);
    const getPosts = async () => {
        const res = await blogService.getAllPost();
        console.log(res)
        setPost(res);
    };
    useEffect(() => {
        getPosts()
    },[])
    return (
        <>
            <h1 className="text-center mt-5">List Posts</h1>
            <div className="row room-grid text-center justify-content-center" style={{margin:"20px auto"}}>
                <div style={{width: "1000px"}}>
                    <table className="table table-light">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>CATEGORY</th>
                            <th>UPDATE AT</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            post.map((post,index) => (
                                <tr key={index}>
                                    <td>{post.id}</td>
                                    <td style={{textAlign:"left", marginLeft:"20px"}}>{post.title}</td>
                                    <td style={{textAlign:"left", marginLeft:"20px"}}>{post.category}</td>
                                    <td style={{textAlign:"right"}}>{post.updatedAt}</td>
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