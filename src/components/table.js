import React, { Component } from 'react';

class Table extends Component {

    render() {
        return (
        <div class="card" data-toggle="lists" data-lists-values='["orders-order", "orders-product", "orders-date", "orders-total", "orders-status", "orders-method"]'>
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col">

                    {/* Search */}
                    <form class="row align-items-center">
                      <div class="col-auto pr-0">
                        <span class="fe fe-search text-muted"></span>
                      </div>
                      <div class="col">
                          <input type="search" class="form-control form-control-flush search" placeholder="Search"/>
                      </div>
                    </form>
                    
                  </div>
                  <div class="col-auto">
                    
                    {/* Button */}

                    <div class="dropdown">
                      <button class="btn btn-sm btn-white dropdown-toggle" type="button" id="bulkActionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bulk action
                      </button>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="bulkActionDropdown">
                        <a class="dropdown-item" href="#!">Action</a>
                        <a class="dropdown-item" href="#!">Another action</a>
                        <a class="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </div>

                  </div>
                </div>
                {/* row */}
              </div>
                <div class="table-responsive" data-toggle="lists" data-lists-values='["tables-row", "tables-first", "tables-last", "tables-handle"]'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <a href="#" class="text-muted sort" data-sort="tables-row">#</a>
                                </th>
                                <th scope="col">
                                    <a href="#" class="text-muted sort" data-sort="tables-first">First</a>
                                </th>
                                <th scope="col">
                                    <a href="#" class="text-muted sort" data-sort="tables-last">Last</a>
                                </th>
                                <th scope="col">
                                    <a href="#" class="text-muted sort" data-sort="tables-handle">Handle</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="list">
                            <tr>
                                <th scope="row" class="tables-row">1</th>
                                <td class="tables-first">Mark</td>
                                <td class="tables-last">Otto</td>
                                <td class="tables-handle">@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row" class="tables-row">2</th>
                                <td class="tables-first">Jacob</td>
                                <td class="tables-last">Thorntonsadhlshdkshkshdkhksdhks</td>
                                <td class="tables-handle">@fat</td>
                            </tr>
                            <tr>
                                <th scope="row" class="tables-row">3</th>
                                <td class="tables-first">Larry</td>
                                <td class="tables-last">the Bird</td>
                                <td class="tables-handle">@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Table;









