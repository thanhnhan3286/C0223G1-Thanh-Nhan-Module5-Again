import "./create_edit.css"
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as facilityService from "../../service/FacilityService"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";


export function CreateService() {
    const navigate = useNavigate()
    const [types, setTypes] = useState([]);
    const [typeService, setTypeService] = useState("1");
    console.log(typeService);
    const [rentalType, setRentalType] = useState([]);
    const [roomStandard, setRoomStandard] = useState([]);
    const fetchApi = async () => {
        const rentalTypeList = await facilityService.findAllRentalType();
        setRentalType(rentalTypeList);
        const facilityType = await facilityService.findAllFacilityType();
        setTypes(facilityType);
        const roomStandard = await facilityService.findAllRoomStandard();
        setRoomStandard(roomStandard);
    }
    useEffect(() => {
        fetchApi().then(r => null)
    }, [])
    return (
        <>
            <Formik
                initialValues={{
                    typeId: 0,
                    name: '',
                    useArea: 0,
                    rentalCosts: 0,
                    maxNumberOfPeople: 0,
                    rentalTypeId: 0,
                    roomStandardId: 0,
                    otherUtilities: '',
                    quantityOfFloor: 0,
                    areaOfPool: 0,
                    freeServiceIncluded: '',
                    image: ''
                }}
                validationSchema={Yup.object({
                    typeId: Yup.number().required('Required').min(1, 'No service type selected'),
                    name: Yup.string()
                        .required('Required'),
                    useArea: Yup.number()
                        .required('Required')
                        .min(40, 'Min: 40m2'),
                    rentalCosts: Yup.number()
                        .required('Required')
                        .min(1000, 'Min: 1000')
                        .max(990000000, 'Max: 10000000'),
                    maxNumberOfPeople: Yup.number()
                        .required('Required')
                        .min(2, 'Min: 2')
                        .max(30, 'Max: 30'),
                    rentalTypeId: Yup.number().required('Required').min(1, 'No rental type selected'),
                    roomStandardId: Yup.number().test('required-if-typeFacility-is-3', 'No room standard selected', function (value) {
                        if (typeService !== "3") {
                            return Yup.number().required('Required').min(1).isValidSync(value);
                        }
                        return true;
                    }),
                    otherUtilities: Yup.string(),
                    quantityOfFloor: Yup.number().test('required-if-typeFacility-is-3', 'The floor number has not been entered', function (value) {
                        if (typeService !== "3") {
                            return Yup.number().required('Required').min(1).max(10, 'Min 10').isValidSync(value);
                        }
                        return true;
                    }),
                    image: Yup.string().required('Required'),
                    areaOfPool: Yup.number().test('required-if-typeFacility-is-1', 'Pool area must be greater than 0', function (value) {
                        if (typeService === "1") {
                            return Yup.number().required('Required').min(1,).isValidSync(value);
                        }
                        return true;
                    }),
                })}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(false)
                    const create = async () => {
                        await facilityService.createService({
                            ...values,
                            typeId: +values.typeId,
                            rentalTypeId: +values.rentalTypeId,
                            roomStandardId: +values.roomStandardId
                        })
                        navigate("/")
                        await Swal.fire({
                            icon: "success",
                            title: "ADDED!!!",
                            timer: 2000
                        })
                        resetForm();
                    }
                    create().then(r => null);
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div
                            className="container boxed"
                            style={{marginTop: "2%", width: 700, height: "auto"}}
                        >
                            <h2 style={{textAlign: "center", marginTop: 20}}> CREATE NEW SERVICE</h2>
                            <div
                                id="form"
                                className="form"
                                style={{marginLeft: "10%", marginRight: "10%"}}
                            >
                                <Form>
                                    <div className="input-group input-group-sm mg text-center">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Service Type</span>
                                        </div>
                                        <Field
                                            onClick={(event) => setTypeService(event.target.value)}
                                            as="select"
                                            name="typeId"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        >
                                            <option value={0}>--Choose service type--</option>
                                            {
                                                types.map((type) => (
                                                    <option key={type.id} value={type.id}>{type.name}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <ErrorMessage name="typeId" component="span" className="error-mess m-lg-3"/>
                                    <div
                                        className="input-group input-group-sm mg"
                                        style={{marginTop: 30}}
                                    >
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Service Name</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="name" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">User Area (m<sup>2</sup> )</span>
                                        </div>
                                        <Field
                                            type="number"
                                            name="useArea"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="useArea" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Rental Cost ($)</span>
                                        </div>
                                        <Field
                                            type="number"
                                            name="rentalCosts"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="rentalCosts" component='span' className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Max People</span>
                                        </div>
                                        <Field
                                            type="number"
                                            name="maxNumberOfPeople"
                                            min={2}
                                            max={30}
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="maxNumberOfPeople" component='span'
                                                  className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Rental Type</span>
                                        </div>
                                        <Field as="select" className="form-select" name="rentalTypeId">
                                            <option value={0}>--Choose rental type--</option>
                                            {
                                                rentalType.map((rentalType) => (
                                                    <option key={rentalType.id}
                                                            value={rentalType.id}>{rentalType.name}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <ErrorMessage name="rentalTypeId" component='span' className="error-mess m-lg-3"/>
                                    {
                                        typeService === "3" ?
                                            '' :
                                            <div>
                                                <div className="input-group input-group-sm mg">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Room Standard</span>
                                                    </div>
                                                    <Field
                                                        as="select"
                                                        name="roomStandardId"
                                                        className="form-control"
                                                        aria-label="Small"
                                                        aria-describedby="inputGroup-sizing-sm"
                                                        required=""
                                                    >
                                                        <option value={0}>--Choose room standard--</option>
                                                        {
                                                            roomStandard.map((roomStandard) => (
                                                                <option key={roomStandard.id}
                                                                        value={roomStandard.id}>{roomStandard.name}</option>
                                                            ))
                                                        }
                                                    </Field>
                                                </div>
                                                <ErrorMessage name="roomStandardId" component='span'
                                                              className="error-mess m-lg-3"/>
                                                <div className="input-group input-group-sm mg">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Other Utilities</span>
                                                    </div>
                                                    <Field
                                                        type="text"
                                                        name="otherUtilities"
                                                        className="form-control"
                                                        aria-label="Small"
                                                        aria-describedby="inputGroup-sizing-sm"
                                                    />
                                                </div>
                                                <ErrorMessage name="otherUtilities" component='span'
                                                              className="error-mess m-lg-3"/>
                                                <div className="input-group input-group-sm mg">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Quantity Of Floor</span>
                                                    </div>
                                                    <Field
                                                        type="number"
                                                        name="quantityOfFloor"
                                                        min={1}
                                                        max={10}
                                                        className="form-control"
                                                        aria-label="Small"
                                                        aria-describedby="inputGroup-sizing-sm"
                                                    />
                                                </div>
                                                <ErrorMessage name="quantityOfFloor" component='span'
                                                              className="error-mess m-lg-3"/>
                                            </div>
                                    }
                                    {
                                        typeService === "1" ?
                                            <div>
                                                <div className="input-group input-group-sm mg">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Pool Area (m<sup>2</sup>)</span>
                                                    </div>
                                                    <Field
                                                        type="number"
                                                        name="areaOfPool"
                                                        min={40}
                                                        max={1000}
                                                        className="form-control"
                                                        aria-label="Small"
                                                        aria-describedby="inputGroup-sizing-sm"
                                                    />
                                                </div>
                                                <ErrorMessage name="areaOfPool" component='span'
                                                              className="error-mess m-lg-3"/>
                                            </div>
                                            : ""
                                    }

                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Free Service Included</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="freeServiceIncluded"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="freeServiceIncluded" component='span'
                                                  className="error-mess m-lg-3"/>
                                    <div className="input-group input-group-sm mg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">URL Image</span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="image"
                                            className="form-control"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                    </div>
                                    <ErrorMessage name="image" component='span' className="error-mess m-lg-3"/>
                                    <br/>
                                    <div className="text-center mb-3">
                                        <button type="submit" className="btn btn-success">
                                            ADD
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