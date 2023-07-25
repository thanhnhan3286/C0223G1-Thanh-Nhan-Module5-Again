export function EditCustomer() {
    return (
        <>
            <div
                className="container boxed"
                style={{ marginTop: "2%", width: 700, height: "auto" }}
            >
                <h2 style={{ textAlign: "center", marginTop: 20 }}>Edit Customer</h2>
                <div
                    id="form"
                    className="form"
                    style={{ marginLeft: "10%", marginRight: "10%" }}
                >
                    <form action="#" method="POST" noValidate="novalidate">
                        <div
                            className="input-group input-group-sm mg"
                            style={{ marginTop: 30 }}
                        >
                            <div className="input-group-prepend">
                                <span className="input-group-text">Name</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="Đỗ Thành Nhân"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Birthday</span>
                            </div>
                            <input
                                type="date"
                                defaultValue="06/03/2000"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Gender</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="Man"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Identity Card</span>
                            </div>
                            <input
                                type="text"
                                defaultValue={123456789}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Phone</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="0123456789"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Email</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="nhan012@gmail.com"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Type Customer</span>
                            </div>
                            <select className="form-select">
                                <option>Diamond</option>
                                <option>Platinium</option>
                                <option>Gold</option>
                                <option>Silver</option>
                                <option>Member</option>
                            </select>
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Address</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="Huế"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                required=""
                            />
                        </div>
                        <br />
                        <div className="mb-4 text-center">
                            <button type="submit" className="btn btn-success">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}