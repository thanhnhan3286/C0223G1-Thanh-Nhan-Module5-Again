import axios from "axios";

axios.defaults.baseURL = `http://localhost:8082`;

// export const create = async (value) => {
//     try {
//         await axios.post(`/posts`, value);
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// export const findAll = async () => {
//     try {
//         return (await axios.get(`/posts?_sort=id&_order=desc`)).data;
//     } catch (e) {
//         console.log(e)
//     }
// }
const findAll = ()=>{
    return axios.get(`/posts?sort=id&_order=desc`);
};
const create = (post) =>{
    return axios.post(`/posts`,post);
};
export const postService = {
    findAll,create
}