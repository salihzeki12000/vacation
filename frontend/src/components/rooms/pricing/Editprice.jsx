import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

class Editprice extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="base_price1" ng-init="night_price='0';">
        <div className="baseamt_price">
          <div className="table-responsive">
            <div
              id="pricing_price_table_wrapper"
              className="dataTables_wrapper form-inline dt-bootstrap no-footer"
            >
              <div className="row">
                <div className="col-sm-6" />
                <div className="col-sm-6" />
              </div>
              <div className="row">
                <div className="col-sm-12" style={{overflowX: 'auto'}}>
                  <table
                    id="pricing_price_table"
                    className="table dataTable no-footer dtr-inline"
                    style={{ width: "100%" }}
                    role="grid"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="pricing_price_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Title: activate to sort column ascending"
                        >
                          Title
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="pricing_price_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Per Night: activate to sort column ascending"
                        >
                          Per Night
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="pricing_price_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Per Week: activate to sort column ascending"
                        >
                          Per Week
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="pricing_price_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Per Month: activate to sort column ascending"
                        >
                          Per Month
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="pricing_price_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Minimum Stay: activate to sort column ascending"
                        >
                          Minimum Stay
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="pricing_price_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Action: activate to sort column ascending"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" className="odd">
                        <td tabIndex={0}>Your Base Price</td>
                        <td>
                          {this.props.code}{" "}
                          {this.props.data.original_night
                            ? this.props.data.original_night
                            : "-"}
                        </td>
                        <td>
                          {this.props.code}{" "}
                          {this.props.data.original_week
                            ? this.props.data.original_week
                            : "-"}
                        </td>
                        <td>
                          {this.props.code}{" "}
                          {this.props.data.original_month
                            ? this.props.data.original_month
                            : "-"}
                        </td>
                        <td>
                          <span id="update_minimum_stay">
                            {this.props.data.minimum_stay
                              ? this.props.data.minimum_stay + "Night"
                              : "-"}
                          </span>
                        </td>
                        <td>
                          <Link to="#" title="Edit" className="table_edit">
                            <FontAwesomeIcon icon={faPencilAlt} style={{color: '#034163'}} />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5" />
                <div className="col-sm-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editprice;
