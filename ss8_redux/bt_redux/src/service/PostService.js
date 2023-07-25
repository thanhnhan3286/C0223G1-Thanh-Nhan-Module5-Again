import axios from "axios";

axios.defaults.baseURL = `http://localhost:8082`;

const findAll = ()=>{
    return axios.get(`/posts?sort=id&_order=desc`);
};
const create = (post) =>{
    return axios.post(`/posts`,post);
};
export const postService = {
    findAll,create
}