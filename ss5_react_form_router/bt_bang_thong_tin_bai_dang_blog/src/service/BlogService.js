import axios from "axios";

export const saveBlog = async (param) => {
    try {
        await axios.put(`http://localhost:8081/posts/`+param.id,param)
    }catch (e) {
        console.log(e)
    }
}


export const findById = async (id) => {
    try {
        return (await axios.get(`http://localhost:8081/posts/` + id)).data;
    } catch (e) {
        console.log(e)
    }
}


export const createBlog = async (param) => {
    try {
        await axios.post(`http://localhost:8081/posts`, param)
    } catch (e) {
        console.log(e)
    }
}


export const deleteBlogById = async (id) => {
    try {
        await axios.delete(`http://localhost:8081/posts/` + id)
    } catch (e) {
        console.log(e)
    }
}


export const getAllPost = async () => {
    try {
        const res = await axios.get(`http://localhost:8081/posts`);
        return res.data;
    } catch (e) {
        console.log(e)
    }
}
