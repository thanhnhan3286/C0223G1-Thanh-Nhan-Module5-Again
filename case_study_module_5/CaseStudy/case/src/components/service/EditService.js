import "./create_edit.css"
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import * as facilityService from "../../service/FacilityService"
import {Formik} from "formik";

export function EditService() {
    const param = useParams();
    const [service, setService] = useState();
    const getService = async (id) => {
        const res = await facilityService.findById(id);
        console.log(res)
        setService(res);
    };
    useEffect(() => {
        getService(param.id).then(r => null);
    }, [param.id]);
    if (!service) {
        return null
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: service?.id,
                    typeId: service?.typeId,
                    name: service?.name,
                    useArea: service?.useArea,
                    rentalCosts: service?.rentalCosts,
                    maxNumberOfPeople: service?.maxNumberOfPeople,
                    rentalTypeId: service?.rentalTypeId,
                    roomStandardId: service?.roomStandardId,
                    otherUtilities: service?.otherUtilities,
                    quantityOfFloor: service?.quantityOfFloor,
                    areaOfPool: service?.areaOfPool,
                    freeServiceIncluded: service?.freeServiceIncluded,
                    image: service?.image
                }}>

            </Formik>
            <div
                className="container boxed "
                style={{marginTop: "2%", width: 700, height: "auto"}}
            >
                <h2 style={{textAlign: "center", marginTop: 20}}> EDIT SERVICE</h2>
                <div
                    id="form"
                    className="form"
                    style={{marginLeft: "10%", marginRight: "10%"}}
                >
                    <form action="#" method="POST" noValidate="novalidate">
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Service Type</span>
                            </div>
                            <select className="form-select">
                                <option>Villa</option>
                                <option>House</option>
                                <option>Room</option>
                            </select>
                        </div>
                        <div
                            className="input-group input-group-sm mg"
                            style={{marginTop: 30}}
                        >
                            <div className="input-group-prepend">
                                <span className="input-group-text">Service Name</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="OCEAN STUDIO SUITE"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">User Area(m2)</span>
                            </div>
                            <input
                                type="number"
                                min={40}
                                defaultValue="40.1"
                                className="form-control pr-1"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Rental Cost($)</span>
                            </div>
                            <input
                                type="number"
                                min={1000}
                                defaultValue={1099}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Max People</span>
                            </div>
                            <input
                                type="number"
                                min={2}
                                max={30}
                                defaultValue={2}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Rental Type</span>
                            </div>
                            <select className="form-select">
                                <option>Year</option>
                                <option>Month</option>
                                <option>Day</option>
                                <option>Hour</option>
                            </select>
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Room Standard</span>
                            </div>
                            <select className="form-select">
                                <option>Normal</option>
                                <option>Business</option>
                                <option>Presidential</option>
                            </select>
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Other Utilities</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="KARAOKE, BIDA"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Quantity Of Floor</span>
                            </div>
                            <input
                                type="number"
                                min={1}
                                max={10}
                                defaultValue={0}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Pool Area</span>
                            </div>
                            <input
                                type="number"
                                min={40}
                                max={1000}
                                defaultValue={0}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Free Service Included</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">URL Image</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <br/>
                        <div style={{textAlign: "center", marginBottom: 30}}>
                            <button type="submit" className="btn btn-success">
                                EDIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            )

        </>
    )
}