import React from 'react';

const Table = (props) => {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="row align-items-center">
                            <div className="col">

                                {/* Search */}
                                <form className="row align-items-center">
                                    <div className="col-auto pr-0">
                                        <span className="fe fe-search text-muted"></span>
                                    </div>
                                    <div className="col">
                                        <input type="search" className="form-control form-control-flush search" placeholder="Search" />
                                    </div>
                                </form>

                            </div>
                            <div className="col-auto">

                                {/* Button */}

                                <div className="dropdown">
                                    <button className="btn btn-sm btn-white dropdown-toggle" type="button" id="bulkActionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Bulk action
                      </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="bulkActionDropdown">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* row */}
                    </div>
                    <div className="table-responsive" data-toggle="lists" data-lists-values='["tables-row", "tables-first", "tables-last", "tables-handle"]'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <a href="#" class="text-muted sort" data-sort="tables-row">#</a>
                                    </th>
                                    <th scope="col">
                                        <a href="#" class="text-muted sort" data-sort="tables-first">Name</a>
                                    </th>
                                    <th scope="col">
                                        <a href="#" class="text-muted sort" data-sort="tables-last" onClick={() => props.sortBy('age')}>Age</a>
                                    </th>
                                    <th scope="col">
                                        <a href="#" class="text-muted sort" data-sort="tables-handle"  onClick={() => props.sortBy('city')}>City</a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="list">
                                {
                                props.data.map(row =>(
                                <tr>
                                    <th scope="row" class="tables-row">{row.id}</th>
                                    <td className="tables-first">{row.name}</td>
                                    <td className="tables-last">{row.age}</td>
                                    <td className="tables-handle">{row.city}</td>
                                </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </div>

        )
}
export default Table;









