import axios from "axios";

export const saveCustomer = async (param) => {
    try {
        await axios.put(`http://localhost:8080/customer/` + param.id, param);
    } catch (e) {
        console.log(e);
    }
}


export const findCustomerTypeById = async (number) => {
    try {
        return (await axios.get(`http://localhost:8080/customerType/` + number)).data;
    } catch (e) {
        console.log(e);
    }
}


export const findGenderById = async (number) => {
    try {
        return (await axios.get(`http://localhost:8080/gender/` + number)).data;
    } catch (e) {
        console.log(e);
    }
}


export const createCustomer = async (param) => {
    try {
        await axios.post(`http://localhost:8080/customer`, param);
    } catch (e) {
        console.log(e);
    }
}


export const deleteCustomer = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/customer/` + id);
    } catch (e) {
        console.log(e);
    }
}
export const getTypeCustomer = async () => {
    try {
        return (await axios.get(`http://localhost:8080/customerType`)).data;
    } catch (e) {
        console.log(e);
    }
}


export const getGender = async () => {
    try {
        return (await axios.get(`http://localhost:8080/gender`)).data;
    } catch (e) {
        console.log(e);
    }
}


export const findAllCustomer = async () => {
    try {
        return (await axios.get(`http://localhost:8080/customer`)).data;
    } catch (e) {
        console.log(e);
    }
}