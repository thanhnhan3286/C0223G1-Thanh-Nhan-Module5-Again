import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import * as customerService from "../../service/CustomerService";
import Swal from "sweetalert2";
import * as yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function EditCustomer() {
    const param = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [genders, setGenders] = useState([]);
    const [customerTypes, setCustomersType] = useState([]);
    const getCustomer = async (id) => {
        const res = await customerService.findCustomerById(id);
        setCustomer(res);
    }
    const getGenders = async () => {
        const res = await customerService.getGender();
        setGenders(res);
    };
    const getCustomerTypes = async () => {
        const res = await customerService.getTypeCustomer();
        setCustomersType(res);
    };
    useEffect(() => {
        getGenders().then(r => null);
        getCustomerTypes().then(r => null);
    }, [])
    const saveCustomer = async (values) => {
        const gend = await customerService.findGenderById(+values.gender);
        const type = await customerService.findCustomerTypeById(+values.customerType);
        await customerService.saveCustomer({
            ...values,
            gender: gend,
            customerType: type,
        })
        navigate("/")
        await Swal.fire({
            icon: "success",
            title: "Them moi thanh cong!!!",
            timer: 2000
        })
    };
    useEffect(() => {
        getCustomer(param.id).then(r => null);
    }, [param.id])
    if (!customer) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: customer?.id,
                    name: customer?.name,
                    birthday: customer?.birthday,
                    gender: customer?.gender?.id,
                    identityCard: customer?.identityCard,
                    phone: customer?.phone,
                    email: customer?.email,
                    customerType: customer?.customerType?.id,
                    address: customer?.address
                }}
                validationSchema={yup.object({
                    name: yup.string().required('Required!!!').min(3).max(150),
                    birthday: yup.date().required('Required!!!'),
                    genders: yup.number().min(1, 'Choose gender!!!'),
                    identityCard: yup.string().required('Required!!!').min(8).max(12),
                    phone: yup.string().required('Required!!!').min(10).max(12)
                        .matches(/^((\+84)|0)[0-9]{9}$/, 'Not true format. Ex: +84123456789/0123456789'),
                    email: yup.string().email().required('Required!!!'),
                    customerType: yup.number().min(1, 'Choose customer type!!!'),
                    address: yup.string().required('Required').min(2).max(150)
                })}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                    setSubmitting(false);
                    await saveCustomer(values);
                    resetForm();
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div
                            className="container boxed"
                            style={{marginTop: "2%", width: 700, height: "auto"}}
                        >
                            <h2 style={{textAlign: "center", marginTop: 20}}>Edit Customer</h2>
                            <div
                                id="form"
                                className="form"
                                style={{marginLeft: "10%", marginRight: "10%"}}
                            >
                                <Form>
                                    <div
                                        className="input-group input-group-sm mg"
                                        style={{marginTop: 30}}
                                    >
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Name</span>
                                        </div>
                                        <Field
                                            name="name"
                                            type="text"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="name" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Birthday</span>
                                        </div>
                                        <Field
                                            name="birthday"
                                            type="date"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="birthday" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Gender</span>
                                        </div>
                                        <Field as="select"
                                               name={"gender"}
                                               type="text"
                                               className="form-control"
                                               aria-label="Small"
                                               aria-describedby="inputGroup-sizing-sm"
                                        >
                                            <option value={0}>--Choose gender--</option>
                                            {
                                                genders.map((g, index) => (
                                                    <option key={index} value={g.id}>{g.gender}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <ErrorMessage name="gender" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Identity Card</span>
                                        </div>
                                        <Field
                                            name="identityCard"
                                            type="text"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="identityCard" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Phone</span>
                                        </div>
                                        <Field
                                            name="phone"
                                            type="text"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="phone" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Email</span>
                                        </div>
                                        <Field
                                            name="email"
                                            type="text"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="email" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Customer Type</span>
                                        </div>
                                        <Field as="select"
                                               name="customerType"
                                               type="text"
                                               className="form-control"
                                               aria-label="Small"
                                               aria-describedby="inputGroup-sizing-sm"
                                        >
                                            <option value={0}>--Choose customer type--</option>
                                            {
                                                customerTypes.map((ct, index) => (
                                                    <option key={index} value={ct.id}>{ct.name}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <ErrorMessage name="customerType" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Address</span>
                                        </div>
                                        <Field
                                            name="address"
                                            type="text"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="address" component="span" className="error-mess m-lg-3"/>
                                    <br/>
                                    <div className="mb-4 text-center">
                                        <button type="submit" className="btn btn-success">
                                            Save
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    )
                }
            </Formik>
        </>
    )
}