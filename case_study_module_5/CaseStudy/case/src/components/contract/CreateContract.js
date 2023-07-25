export function CreateContract() {
    return (
        <>
            <div
                className="container boxed"
                style={{marginTop: "2%", width: 800, height: "auto"}}
            >
                <h2 className="text-center mt-2">Create New Contract</h2>
                <div
                    id="form"
                    className="form"
                    style={{marginLeft: "10%", marginRight: "10%"}}
                >
                    <form action="#" method="POST" noValidate="novalidate">
                        <div
                            className="input-group input-group-sm mg"
                            style={{marginTop: 30}}
                        >
                            <div className="input-group-prepend">
                                <span className="input-group-text">Start Day</span>
                            </div>
                            <input
                                type="date"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">End Day</span>
                            </div>
                            <input
                                type="date"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Deposit Amount($)</span>
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
                                <span className="input-group-text">Total Price($)</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <br/>
                        <div className="mb-4 text-center">
                            <button type="submit" className="btn btn-success">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}