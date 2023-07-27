import axios from "axios";

export const getTypeCustomer = async () => {
    try {
        return (await axios.get(`http://localhost:8080/customerType`)).data;
    }catch (e) {
        console.log(e)
    }
}


export const getGender = async () => {
    try {
            return (await axios.get(`http://localhost:8080/gender`)).data;
    }catch (e) {
        console.log(e)
    }
}


export const findAllCustomer = async () => {
    try {
        return (await axios.get(`http://localhost:8080/customer`)).data;
    }catch (e) {
        console.log(e)
    }
}