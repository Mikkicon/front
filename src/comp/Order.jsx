import React, { Component } from "react";
class Order extends Component {
  state = {
    title: "",
    fields: [],
    warehouses: [1, 2, 3, 4, 5],
    items: [1, 2, 3, 4, 5],
    num: 1,
    res: []
  };
  handleAdd = () => {
    this.setState({ num: this.state.num + 1 });
  };
  render() {
    let elements = [];
    for (let i = 0; i < this.state.num; i++) {
      elements.push(
        <div key={i} className="form-row">
          <div className="form-group col-md-8">
            <label>Item</label>
            <select className="form-control">
              {this.state.items.map(p => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-4">
            <label>Quantity</label>
            <input
              id="quantity"
              className="form-control"
              type="number"
              min="0"
              step="1"
              data-bind="value:replyNumber"
            />
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="container">
          <h2>Request Form</h2>
          <h4>Enter your data below</h4>

          <form className="md-form" action="#">
            <div className="form-row">
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Warehouse</label>
                <select className="form-control">
                  {this.state.warehouses.map(p => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {elements}

            <button
              onClick={() => this.handleAdd()}
              className="form-group col-md-3 btn btn-lg btn-outline-primary"
              type="submit"
            >
              Add
            </button>
            <button
              onClick={() => this.setState({ num: this.state.num - 1 })}
              className={
                this.state.num <= 0
                  ? "form-group col-md-3 btn btn-lg btn-outline-danger disabled"
                  : "form-group col-md-3 btn btn-lg btn-outline-danger"
              }
            >
              Delete
            </button>

            <div className="form-row">
              <label className="btn btn-default">
                Add file <input type="file" hidden />
              </label>
            </div>

            <div className="form-row">
              <button className="btn btn-success center-block" type="submit">
                Send request
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Order;
