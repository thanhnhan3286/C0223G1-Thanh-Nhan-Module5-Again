import axios from "axios";

export async function createPost(param) {
    try {
        await axios.post(`http://localhost:8080/posts`, param);
    } catch (e) {
        console.log(e);
    }
}


export async function findCommentById(id) {
    try {
        return (await axios.get(`http://localhost:8080/comments/` + id)).data;
    } catch (e) {
        console.log(e);
    }
}


export async function findAllComment() {
    try {
        return (await axios.get(`http://localhost:8080/comments`)).data;
    } catch (e) {
        console.log(e);
    }
}


export const searchByTitle = async (title) => {
    try {
        return (await axios.get(`http://localhost:8080/posts?q=${title}&_sort=id`)).data;
    } catch (e) {
        console.log(e);
    }
}


export const deletePostApi = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/posts/` + id);
    } catch (e) {
        console.log(e)
    }
}


export const findAllPost = async () => {
    try {
        return (await axios.get(`http://localhost:8080/posts?_sort=coment.id`)).data;
    } catch (e) {
        console.log(e);
    }
}