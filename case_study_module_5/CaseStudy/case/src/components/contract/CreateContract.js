import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as customerService from "../../service/CustomerService";
import * as facilityService from "../../service/FacilityService";
import Swal from "sweetalert2";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as contractService from "../../service/ContractService";
import * as yup from "yup";

export function CreateContract() {
    const navigate = useNavigate();
    const [customers, setCustomer] = useState([]);
    const [services, setServices] = useState([]);
    const [service, setService] = useState();
    const [code, setCode] = useState("");
    const fetchApi = async () => {
        const res = await customerService.findAllCustomer();
        setCustomer(res);
        setServices(await facilityService.findAllService());
    };
    const createContractCodeApi = async () => {
        let res = await contractService.createCode();
        console.log( "code: "+res)
        setCode(res.toString());
    };
    const getPrice = async (facilityId) => {
        console.log(facilityId);
        setService(facilityId);
        console.log(services.find((e) => e.id == service)?.rentalCosts);
    }
    useEffect(() => {
        fetchApi().then(r => null);
        createContractCodeApi().then(r=>null);
    }, []);
    return (
        <>
            <Formik initialValues={{
                customerId: 0,
                facilityId: 0,
                contractCode: code,
                startDay: '',
                endDay: '',
                deposit: '',
                totalPrice: service,
            }}
                    validationSchema={yup.object({
                        customerId: yup.number().required('Required!!!').min(1, 'Choose customer!!!'),
                        facilityId: yup.number().required('Required!!!').min(1, 'Choose service!!!'),
                        // contractCode: yup.string().required('Không được để trống!!!')
                        //     // .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/, 'Viết không dấu, in hoa chữ đầu'),
                        //     .matches(/^(VL-|HO-|RO-)(\d){5}$/, 'Vd: HO-12345'),
                        startDay: yup.date().required('Required!!!'),
                        endDay: yup.date().required('Required!!!'),
                        deposit: yup.number().required('Required!!!').min(800, 'Min 800$'),
                        // totalPrice: yup.number().required('Required!!!').min(1500, 'Min 1500$')
                    })}
                    onSubmit={async (values, {setSubmitting, resetForm}) => {
                        setSubmitting(false)
                        console.log(values.facilityId)
                        const create = async () => {
                            await contractService.create({
                                ...values,
                                contractCode: await contractService.createContractCode((await facilityService.findById(+values.facilityId)).typeId.toString(), code),
                                customerId: +values.customerId,
                                facilityId: +values.facilityId
                            })
                            navigate("/contractList")
                            await Swal.fire({
                                icon: "success",
                                title: "ADDED!!!",
                                timer: 2000
                            })
                            resetForm();
                        }
                        await create()
                    }}>
                {
                    ({isSubmitting}) => (
                        <div
                            className="container boxed"
                            style={{marginTop: "2%", width: 650, height: "auto"}}
                        >
                            <h2 style={{textAlign: "center", marginTop: 20}}>
                                Create Contract
                            </h2>
                            <div
                                id="form"
                                className="form"
                                style={{marginLeft: "10%", marginRight: "10%"}}
                            >
                                <Form action="#" method="POST" noValidate="novalidate">
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Customer</span>
                                        </div>
                                        <Field
                                            as="select"
                                            name="customerId"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        >
                                            <option value={0}>--Choose customer--</option>
                                            {
                                                customers.map((c, index) => (
                                                        <option key={index} value={c.id}>{c.id} - {c.name}</option>
                                                    )
                                                )
                                            }
                                        </Field>
                                    </div>
                                    <ErrorMessage name="customerId" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Service</span>
                                        </div>
                                        <Field
                                            onClick={(event) => getPrice(event.target.value)}
                                            as="select"
                                            name="facilityId"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        >
                                            <option value={0}>--Choose service--</option>
                                            {
                                                services.map((f, index) => (
                                                    <option key={index}
                                                            value={f.id}>
                                                        {f.id} - {f.name} - {f.useArea}m<sup>2</sup>
                                                    </option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <ErrorMessage name="facilityId" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg" style={{marginTop: 30}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Contract code</span>
                                        </div>
                                        <Field
                                            style={{textAlign: "center"}}
                                            disabled
                                            type="text"
                                            value={code}
                                            name="contractCode"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="contractCode" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg" style={{marginTop: 30}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Strat day</span>
                                        </div>
                                        <Field
                                            type="date"
                                            name="startDay"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="startDay" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">End day</span>
                                        </div>
                                        <Field
                                            type="date"
                                            name="endDay"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="endDay" component="span" className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Deposit Amount($)</span>
                                        </div>
                                        <Field
                                            type="number"
                                            name="deposit"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="deposit" component="span"
                                                  className="error-mess m-lg-3 error-404"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Total price($)</span>
                                        </div>
                                        <Field
                                            style={{textAlign: "center"}}
                                            disabled
                                            type="number"
                                            name="totalPrice"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            value={services.find((f) => f.id == service)?.rentalCosts}
                                        />
                                    </div>
                                    <ErrorMessage name="totalPrice" component="span" className="error-mess m-lg-3"/>
                                    <br/>
                                    <div className="mb-4 text-center">
                                        <button type="submit" className="btn btn-success">
                                            Create
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    )
                }
            </Formik>
            {/*<div*/}
            {/*    className="container boxed"*/}
            {/*    style={{marginTop: "2%", width: 800, height: "auto"}}*/}
            {/*>*/}
            {/*    <h2 className="text-center mt-2">Create New Contract</h2>*/}
            {/*    <div*/}
            {/*        id="form"*/}
            {/*        className="form"*/}
            {/*        style={{marginLeft: "10%", marginRight: "10%"}}*/}
            {/*    >*/}
            {/*        <form action="#" method="POST" noValidate="novalidate">*/}
            {/*            <div*/}
            {/*                className="input-group input-group-sm mg"*/}
            {/*                style={{marginTop: 30}}*/}
            {/*            >*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Start Day</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="date"*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="input-group input-group-sm mg">*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">End Day</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="date"*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="input-group input-group-sm mg">*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Deposit Amount($)</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="text"*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="input-group input-group-sm mg">*/}
            {/*                <div className="input-group-prepend">*/}
            {/*                    <span className="input-group-text">Total Price($)</span>*/}
            {/*                </div>*/}
            {/*                <input*/}
            {/*                    type="text"*/}
            {/*                    className="form-control"*/}
            {/*                    aria-label="Small"*/}
            {/*                    aria-describedby="inputGroup-sizing-sm"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <br/>*/}
            {/*            <div className="mb-4 text-center">*/}
            {/*                <button type="submit" className="btn btn-success">*/}
            {/*                    Create*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}