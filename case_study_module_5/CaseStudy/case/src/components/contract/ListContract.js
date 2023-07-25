export function ListContract() {
    return (
        <>
            <div className="row room-grid text-center" style={{margin: "0 10%"}}>
                <h1 className="mt-5">List Contract</h1>
                <a href="http://localhost:63342/CaseStudy/prototype/contract/CreateContract.html?_ijt=50e36da1o38qlm9k98qvbpb2ce">
                    <button
                        type="button"
                        className="btn btn-primary text-capitalize"
                        data-bs-toggle="modal"
                        fdprocessedid="q2sbyt"
                    >
                        CREATE
                        {/*                                            th:attr="onclick=|detail('${productCoffeeModelPage.id}','${productCoffeeModelPage.nameProduct}')|">Detail*/}
                    </button>
                </a>
                <div className="tab-content" id="orders-table-tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="orders-all"
                        role="tabpanel"
                        aria-labelledby="orders-all-tab"
                    >
                        <div className="app-card app-card-orders-table shadow-sm mb-5">
                            <div className="app-card-body">
                                <div className="table-responsive">
                                    <table className="table app-table-hover mb-0 text-left">
                                        <thead>
                                        <tr>
                                            <th className="w-10 forn-16 text-center">Contract Code</th>
                                            <th className="forn-16 w-20">Customer Name</th>
                                            <th className="w-15 forn-16">Create Time</th>
                                            <th className="forn-16 w-15">End Time</th>
                                            <th className="forn-16 w-20 text-center">
                                                Deposit Amount($)
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th className="text-center">1</th>
                                            <th>Đỗ Thành Nhân</th>
                                            <th>06/03/2023</th>
                                            <th>12/03/2023</th>
                                            <th>1200</th>
                                        </tr>
                                        <tr>
                                            <th className="text-center">2</th>
                                            <th>Huỳnh Đức Định</th>
                                            <th>06/08/2023</th>
                                            <th>24/08/2023</th>
                                            <th>90000</th>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*//table-responsive*/}
                            </div>
                            {/*//app-card-body*/}
                        </div>
                        {/*//app-card*/}
                    </div>
                </div>
                {/*//tab-content*/}
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center ">
                        <li className="page-item ">
                            <a
                                className="page-link"
                                href="@{'/orderController/'(page=${orderPage.number -1})}"
                                if="${orderPage.hasPrevious()}"
                            >
                                Previous
                            </a>
                        </li>
                        {/*                        <li style="border: 1px solid #CCCCCC" class="page-item active" ><a class="page-link active" th:text="${pageNo}" th:href="@{/(page=${pageNo})}"></a></li>*/}
                        <li className="page-item    ">
                            <a className="page-link" text="${orderPage.number +1}">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a
                                className="page-link"
                                href="@{'/orderController/'(page=${orderPage.number +1})}"
                                if="${orderPage.hasNext()}"
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}