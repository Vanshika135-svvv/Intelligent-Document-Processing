import React from "react";

function ExtractedTable({ data }) {

  return (

    <div>

      <div className="d-flex justify-content-between mb-3">

        <h4>
          Extracted Table
        </h4>

        <button className="btn btn-sm btn-outline-primary">
          Export CSV
        </button>

      </div>


      <div className="table-responsive">

        <table className="table table-bordered table-hover">

          <thead className="table-light">

            <tr>

              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>

            </tr>

          </thead>


          <tbody>

            {data.map((item, index) => (

              <tr key={index}>

                <td>
                  {item.product}
                </td>

                <td>
                  {item.quantity}
                </td>

                <td>
                  {item.price}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default ExtractedTable;