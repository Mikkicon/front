import React, { Component } from "react";
class Order extends Component {
  state = {
    title: "",
    fields: [],
    warehouses: [1, 2, 3, 4, 5],
    items: [1, 2, 3, 4, 5],
    num: 1,
    roles: ["Creator", "executor", "manager"],
    Warehouse: 0,
    type: "",
    status: "",
    creationDate: "",
    updatedDate: "",
    attachments: [],
    comments: []
  };
  handleAdd = () => {
    this.setState({ num: this.state.num + 1 });
  };
  render() {
    let items = [];
    let attachments = [];
    let comments = [];
    for (let i = 0; i < 3; i++) {
      attachments.push(<li key={i}>Attachment {i}</li>);
    }
    for (let i = 0; i < 3; i++) {
      comments.push(<h5 key={i}>Comment {i}</h5>);
    }
    for (let i = 0; i < this.state.num; i++) {
      items.push(
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
          <div className="container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>Request Form</h2>
            <h4>Status:</h4>
            <h4>Type:</h4>

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
                <div>
                  <label className="m-2">Creation Date </label>
                  <label className="m-2"> Updated Date</label>
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

              {items}

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
              <button
                className="form-group col-md-3 btn btn-lg btn-outline-success"
                type="submit"
              >
                Send request
              </button>

              <div className="form-row">
                <label className="form-group col-md-3 btn btn-lg btn-outline-default">
                  Add file <input type="file" hidden />
                </label>
              </div>
              {attachments}
              <br />
              <br />
              {comments}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Order;
