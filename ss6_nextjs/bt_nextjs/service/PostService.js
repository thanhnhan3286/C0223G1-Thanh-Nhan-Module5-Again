import axios from "axios";

export const savePost = async (param) => {
    try {
        await axios.put(`http://localhost:8085/posts/` + param.id, param);
    } catch (e) {
        console.log(e)
    }
}


export const findById = async (id) => {
    try {
        return (await axios.get(`http://localhost:8085/posts/` + id)).data;
    } catch (e) {
        console.log(e)
    }
}


export const createPost = async (param) => {
    try {
        await axios.post(`http://localhost:8085/posts`, param);
    } catch (e) {
        console.log(e)
    }
}


export const deletePost = async (id) => {
    try {
        await axios.delete(`http://localhost:8085/posts/` + id);
    } catch (e) {
        console.log(e)
    }
}


export const findAllPost = async () => {
    try {
        return (await axios.get(`http://localhost:8085/posts`)).data;
    } catch (e) {
        console.log(e)
    }
}