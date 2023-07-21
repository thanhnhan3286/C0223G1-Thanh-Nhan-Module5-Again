import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import * as blogService from "../service/BlogService";
import {Link} from "react-router-dom";


export function DetailBlog() {
    const param = useParams();
    const [blog, setBlog] = useState();
    const getBlog = async () => {
        const res = await blogService.findById(param.id);
        console.log(res);
        setBlog(res);
    }
    useEffect(() => {
        getBlog()
    }, [param.id]);
    if (!blog) {
        return null
    }
    return (
        <>
            <div className="container boxed mt-5 w-75">
                <h1 className="text-center mt-3 ">Blog Detail</h1>
                <div className="text-center">
                    <Link to={`/`} type="button" className="btn btn-outline-success mt-3 mb-3">Back To List</Link>
                </div>
                <div className="container border-secondary border border-3">
                    <div className="row text-center pt-3 bg-body-secondary">
                        <h3>{blog.title}</h3>
                    </div>
                    <div className="row text-center m-lg-3 justify-content-center">
                        <table className="table bg-body-tertiary w-50 text-center">
                            <tr>
                                <th>
                                    Category: {blog.category}
                                </th>
                                <th>
                                    {blog?.author}
                                </th>
                            </tr>
                            <tr >
                                <th>

                                </th>
                                <th>
                                    {blog?.authorEmail}
                                </th>
                            </tr>
                        </table>
                    </div>
                    <div className="row">
                        <p>
                            {blog.content}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}