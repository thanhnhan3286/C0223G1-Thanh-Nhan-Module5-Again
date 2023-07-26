import {useEffect, useState} from "react";
import * as postService from "../../service/PostService"
import {useRouter} from "next/router";
import Link from "next/link";

export default function Id() {
    const router = useRouter();
    const [post, setPost] = useState();
    const getPost = async (id) => {
        const res = await postService.findById(id);
        console.log(res);
        setPost(res);
    }
    useEffect(() => {
        getPost(router.query.id).then(r => null)
    }, [router.query]);
    if (!post) {
        return null
    }
    return (
        <>
            <div className="container boxed mt-5 w-75">
                <h1 className="text-center mt-3 ">Post Detail</h1>
                <div className="text-center">
                    <Link href={`/post/list`}>
                        <button type="button" className="btn btn-outline-success mt-3 mb-3">Back To List</button>
                    </Link>
                </div>
                <div className="container border-secondary border border-3">
                    <div className="row text-center pt-3 bg-body-secondary">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="row text-center m-lg-3 justify-content-center">
                        <table className="table bg-body-tertiary w-50 text-center">
                            <tr>
                                <th>
                                    Category: {post.category}
                                </th>
                                <th>
                                    {post?.author}
                                </th>
                            </tr>
                            <tr >
                                <th>

                                </th>
                                <th>
                                    {post?.authorEmail}
                                </th>
                            </tr>
                        </table>
                    </div>
                    <div className="row">
                        <p>
                            {post.content}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}